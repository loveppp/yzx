#!/usr/bin/env node
/**
 * Remove outer near-white matte from family section figures (edge flood-fill → transparent PNG).
 * Usage: node scripts/htx/remove-figure-white-matte.mjs <input.jpg|png> [output.png]
 */
import path from 'node:path';
import sharp from 'sharp';

const input = process.argv[2];
if (!input) {
  console.error('Usage: node scripts/htx/remove-figure-white-matte.mjs <input> [output.png]');
  process.exit(1);
}
const output =
  process.argv[3] ?? input.replace(/\.(jpe?g|webp)$/i, '.png').replace(/(\.png)?$/i, '.png');

const threshold = Number(process.env.FIGURE_BG_THRESHOLD ?? 248);

function isBackground(r, g, b) {
  return r >= threshold && g >= threshold && b >= threshold;
}

const {data, info} = await sharp(input).ensureAlpha().raw().toBuffer({resolveWithObject: true});
const {width, height, channels} = info;
const visited = new Uint8Array(width * height);
const queue = [];

function tryPush(x, y) {
  if (x < 0 || y < 0 || x >= width || y >= height) return;
  const i = y * width + x;
  if (visited[i]) return;
  const p = i * channels;
  if (!isBackground(data[p], data[p + 1], data[p + 2])) return;
  visited[i] = 1;
  queue.push(i);
}

for (let x = 0; x < width; x++) {
  tryPush(x, 0);
  tryPush(x, height - 1);
}
for (let y = 0; y < height; y++) {
  tryPush(0, y);
  tryPush(width - 1, y);
}

while (queue.length) {
  const i = queue.pop();
  const x = i % width;
  const y = (i / width) | 0;
  tryPush(x + 1, y);
  tryPush(x - 1, y);
  tryPush(x, y + 1);
  tryPush(x, y - 1);
}

let cleared = 0;
for (let i = 0; i < width * height; i++) {
  if (visited[i]) {
    data[i * channels + 3] = 0;
    cleared++;
  }
}

await sharp(data, {raw: {width, height, channels}}).png({compressionLevel: 9}).toFile(output);
console.log(JSON.stringify({input: path.resolve(input), output: path.resolve(output), cleared, threshold}, null, 2));
