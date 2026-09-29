import fs from 'node:fs/promises';
import path from 'node:path';

export type ManifestEntry = {
  id: string;
  categorySlug: string;
  material: string;
  shapeNotes?: string;
  prompt: string;
  model: string;
  styleRefUri?: string;
  sourceUrl?: string;
  localPath: string;
  createdAt: string;
  status: 'ok' | 'failed' | 'pending';
  error?: string;
};

export type Manifest = {
  version: 1;
  entries: ManifestEntry[];
};

export const MANIFEST_PATH = 'data/image-gen/manifest.json';
export const STYLE_REF_URI_PATH = 'data/image-gen/style-ref-uri.txt';
export const STYLE_REF_LOCAL = 'data/image-gen/style-reference.jpg';

export async function readManifest(): Promise<Manifest> {
  try {
    const raw = await fs.readFile(MANIFEST_PATH, 'utf8');
    return JSON.parse(raw) as Manifest;
  } catch {
    return { version: 1, entries: [] };
  }
}

export async function writeManifest(manifest: Manifest): Promise<void> {
  await fs.mkdir(path.dirname(MANIFEST_PATH), { recursive: true });
  await fs.writeFile(MANIFEST_PATH, JSON.stringify(manifest, null, 2) + '\n');
}

export async function upsertEntry(entry: ManifestEntry): Promise<void> {
  const m = await readManifest();
  const i = m.entries.findIndex((e) => e.id === entry.id);
  if (i >= 0) m.entries[i] = entry;
  else m.entries.push(entry);
  await writeManifest(m);
}

export async function readStyleRefUri(): Promise<string | undefined> {
  try {
    const uri = (await fs.readFile(STYLE_REF_URI_PATH, 'utf8')).trim();
    return uri || undefined;
  } catch {
    return undefined;
  }
}

export async function writeStyleRefUri(publicUrl: string): Promise<void> {
  await fs.mkdir(path.dirname(STYLE_REF_URI_PATH), { recursive: true });
  await fs.writeFile(STYLE_REF_URI_PATH, publicUrl + '\n');
}
