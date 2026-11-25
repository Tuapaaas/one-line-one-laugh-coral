// One Line, One Laugh — make.fun bounty u-coral-404-one-line-one-laugh-22f2c9f3
// Writes a single funny line (<=200 chars) to entry.txt in the output dir.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const LINE = "I hired a life coach. He ghosted me for my own growth.";

function main(): void {
  // Gate: UTF-8 text of 1 to 200 characters, single line, not only whitespace.
  if (LINE.length < 1 || LINE.length > 200) {
    throw new Error(`line is ${LINE.length} chars, must be 1-200`);
  }
  if (LINE.trim().length === 0 || LINE.includes("\n")) {
    throw new Error("line must be a single non-blank line");
  }
  const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
  mkdirSync(outDir, { recursive: true });
  writeFileSync(join(outDir, "entry.txt"), LINE, "utf8");
  console.log(`wrote ${LINE.length} chars to ${join(outDir, "entry.txt")}`);
}

main();
