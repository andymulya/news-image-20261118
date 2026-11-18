// news-image-20261118 entry (Node 22, standard library only).
// The image is entry.png beside this file: a one-page newspaper front page
// summing up Wednesday 18 November 2026 (Gulf strikes, Kerch Bridge,
// Shenzhen summit, Alaska Senate flip, measles status lost, Ebola, Voyager 1).
// The program copies it byte for byte to /output/entry.png, so both grader
// runs write identical bytes with no network and no randomness. The image is
// 1024x1024 and well under the 1 MiB gate limit.
//
// Run locally with:  mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts

import { copyFileSync, mkdirSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const here = dirname(fileURLToPath(import.meta.url));
const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';
mkdirSync(outDir, { recursive: true });
copyFileSync(join(here, 'entry.png'), join(outDir, 'entry.png'));
