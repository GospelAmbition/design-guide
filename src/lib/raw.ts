// Serves files from brands/ and system/ at the same paths they have in the repo,
// so links in llms.txt work both in the repo and on the site.
import { readFileSync, readdirSync, statSync } from 'node:fs';
import { join, extname } from 'node:path';
import { ROOT } from '../../scripts/lib/brands.mjs';

const TYPES: Record<string, string> = {
  '.md': 'text/markdown; charset=utf-8', '.css': 'text/css; charset=utf-8', '.json': 'application/json',
  '.svg': 'image/svg+xml', '.png': 'image/png', '.jpg': 'image/jpeg', '.jpeg': 'image/jpeg', '.webp': 'image/webp', '.txt': 'text/plain; charset=utf-8',
  '.woff2': 'font/woff2', '.woff': 'font/woff', '.ttf': 'font/ttf',
};

const walk = (dir: string): string[] =>
  readdirSync(join(ROOT, dir)).filter((f) => !f.startsWith('.')).flatMap((f) =>
    statSync(join(ROOT, dir, f)).isDirectory() ? walk(`${dir}/${f}`) : [`${dir}/${f}`]);

export const rawPaths = (top: string) => walk(top).map((p) => ({ params: { file: p.slice(top.length + 1) } }));

export const rawFile = (path: string) =>
  new Response(readFileSync(join(ROOT, path)), { headers: { 'Content-Type': TYPES[extname(path)] ?? 'application/octet-stream' } });
