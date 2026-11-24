// Real-Life Patch Notes entry — writes one patch-note line to /output/entry.txt.
// Node 22, stdlib only. No network, no secrets, no reads outside this repo.
import { mkdirSync, writeFileSync } from "node:fs";

const ENTRY =
  "v2.7.3: fixed a bug where the brain, asked to recall a password, replayed every embarrassing moment since 2009 instead.";

// Gate: the kit requires 1–160 characters, one line, non-blank UTF-8.
if (ENTRY.length < 1 || ENTRY.length > 160 || ENTRY.includes("\n") || !ENTRY.trim()) {
  throw new Error(`entry fails gate: ${ENTRY.length} chars`);
}

const outDir = process.env.OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(`${outDir}/entry.txt`, ENTRY, "utf8");
