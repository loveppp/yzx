#!/usr/bin/env bash
set -euo pipefail
cd "$(dirname "$0")/../.."
source scripts/use-node20.sh
REF="output/product-images/candidates/carbide-punches/2026-09-30T04-58-54-043Z/preview-neutral.webp"
LOG="output/product-images/batch-punch-v4-$(date -u +%Y-%m-%dT%H-%M-%S).log"
ids=(
  carbide-punches--profiles
  hss-punches--square-rectangle
  hss-punches--stepped
  hss-punches--special
  stepped-punches--special
)
exec > >(tee -a "$LOG") 2>&1
echo "batch start $(date -u +%Y-%m-%dT%H:%M:%SZ)"
echo "waiting 120s for API quota window..."
sleep 120
for id in "${ids[@]}"; do
  echo "=== $id ==="
  sleep 90
  if npm run image-gen -- 生成 --id "$id" --style-reference "$REF" --publish; then
    echo "OK $id"
  else
    echo "FAIL $id" >&2
    exit 1
  fi
done
node scripts/prepare-catalog.mjs
echo "batch done $(date -u +%Y-%m-%dT%H:%M:%SZ)"
