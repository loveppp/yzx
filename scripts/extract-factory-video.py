#!/usr/bin/env python3
"""Extract sharp factory video frames and an optional web clip."""
from __future__ import annotations

import json
import sys
from pathlib import Path

import cv2
import numpy as np

VIDEO = Path(sys.argv[1]) if len(sys.argv) > 1 else Path.home() / "Desktop/1790787336536552.mp4"
OUT_DIR = Path(__file__).resolve().parents[1] / "public/images/factory"
VIDEO_OUT = Path(__file__).resolve().parents[1] / "public/videos/factory-punch.mp4"
META_OUT = OUT_DIR / "video-extract-meta.json"

FRAME_COUNT = 4
CLIP_SECONDS = 0  # set >0 to export public/videos/factory-punch.mp4 (compress before deploy)
JPEG_QUALITY = 96
# Light unsharp — video frames only; keep subtle
UNSHARP_AMOUNT = 0.35


def sharpness(gray: np.ndarray) -> float:
    return float(cv2.Laplacian(gray, cv2.CV_64F).var())


def unsharp(frame: np.ndarray, amount: float) -> np.ndarray:
    if amount <= 0:
        return frame
    blurred = cv2.GaussianBlur(frame, (0, 0), 1.0)
    return cv2.addWeighted(frame, 1.0 + amount, blurred, -amount, 0)


def best_frame_in_range(
    cap: cv2.VideoCapture, seg_start: int, seg_end: int, step: int = 2
) -> tuple[float, int, np.ndarray] | None:
    best: tuple[float, int, np.ndarray] | None = None
    for pos in range(seg_start, seg_end, step):
        cap.set(cv2.CAP_PROP_POS_FRAMES, pos)
        ok, frame = cap.read()
        if not ok or frame is None:
            continue
        gray = cv2.cvtColor(frame, cv2.COLOR_BGR2GRAY)
        score = sharpness(gray)
        if best is None or score > best[0]:
            best = (score, pos, frame)
    return best


def main() -> None:
    if not VIDEO.is_file():
        raise SystemExit(f"Video not found: {VIDEO}")

    OUT_DIR.mkdir(parents=True, exist_ok=True)
    VIDEO_OUT.parent.mkdir(parents=True, exist_ok=True)

    cap = cv2.VideoCapture(str(VIDEO))
    if not cap.isOpened():
        raise SystemExit("Cannot open video")

    fps = cap.get(cv2.CAP_PROP_FPS) or 30.0
    total = int(cap.get(cv2.CAP_PROP_FRAME_COUNT) or 0)
    width = int(cap.get(cv2.CAP_PROP_FRAME_WIDTH) or 0)
    height = int(cap.get(cv2.CAP_PROP_FRAME_HEIGHT) or 0)
    duration = total / fps if fps else 0

    start = int(total * 0.05)
    end = int(total * 0.95)
    segment = max(1, (end - start) // FRAME_COUNT)

    names = [
        "punch-workshop-1.jpg",
        "punch-workshop-2.jpg",
        "punch-workshop-3.jpg",
        "punch-workshop-4.jpg",
    ]
    saved = []
    picks: list[tuple[float, int, np.ndarray]] = []
    for i in range(FRAME_COUNT):
        seg_start = start + i * segment
        seg_end = seg_start + segment if i < FRAME_COUNT - 1 else end
        pick = best_frame_in_range(cap, seg_start, seg_end)
        if pick:
            picks.append(pick)
        elif picks:
            picks.append(picks[-1])

    if not picks:
        raise SystemExit("No frames extracted")

    for (score, pos, frame), name in zip(picks, names):
        out = OUT_DIR / name
        out_frame = unsharp(frame, UNSHARP_AMOUNT)
        cv2.imwrite(
            str(out),
            out_frame,
            [int(cv2.IMWRITE_JPEG_QUALITY), JPEG_QUALITY, int(cv2.IMWRITE_JPEG_OPTIMIZE), 1],
        )
        saved.append(
            {
                "file": f"/images/factory/{name}",
                "timeSec": round(pos / fps, 2),
                "sharpness": round(score, 1),
                "width": width,
                "height": height,
            }
        )
        print(f"Wrote {out} @ {pos / fps:.1f}s sharpness={score:.0f}")

    clip_ok = False
    clip_start = 0
    written = 0
    if CLIP_SECONDS > 0:
        all_best = max(picks, key=lambda x: x[0])
        clip_start = max(0, all_best[1] - int(fps * 2))
        clip_frames = int(fps * CLIP_SECONDS)
        cap.set(cv2.CAP_PROP_POS_FRAMES, clip_start)
        fourcc = cv2.VideoWriter_fourcc(*"avc1")
        writer = cv2.VideoWriter(str(VIDEO_OUT), fourcc, fps, (width, height))
        if not writer.isOpened():
            fourcc = cv2.VideoWriter_fourcc(*"mp4v")
            writer = cv2.VideoWriter(str(VIDEO_OUT), fourcc, fps, (width, height))
        while written < clip_frames:
            ok, frame = cap.read()
            if not ok:
                break
            writer.write(frame)
            written += 1
        writer.release()
        clip_ok = VIDEO_OUT.is_file() and VIDEO_OUT.stat().st_size > 1000
    cap.release()
    meta = {
        "source": str(VIDEO),
        "durationSec": round(duration, 2),
        "fps": fps,
        "resolution": [width, height],
        "frames": saved,
        "jpegQuality": JPEG_QUALITY,
        "clip": {
            "path": "/videos/factory-punch.mp4",
            "startSec": round(clip_start / fps, 2),
            "durationSec": round(written / fps, 2),
            "ok": clip_ok,
        },
    }
    META_OUT.write_text(json.dumps(meta, indent=2), encoding="utf-8")
    print(json.dumps(meta, indent=2))


if __name__ == "__main__":
    main()
