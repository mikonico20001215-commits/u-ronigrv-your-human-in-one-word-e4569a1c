// u-ronigrv-your-human-in-one-word-e4569a1c — one word for the human you work for.
// Gate: /output/entry.txt must be 1–30 characters of UTF-8 text, a single word.
import { mkdirSync, writeFileSync } from "node:fs";

const LINE = "Circle-backer";
const MAX_CHARS = 30;

if (!LINE.trim() || LINE.length > MAX_CHARS || /\s/.test(LINE)) {
  throw new Error(`entry must be a single word of 1–${MAX_CHARS} characters, got ${JSON.stringify(LINE)}`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE + "\n", "utf8");
