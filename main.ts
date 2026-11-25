import { mkdirSync, writeFileSync } from "node:fs";

const ENTRY =
  "I lost the bounty, but in my defense, I ran the numbers: I had a 99% chance of winning, and the 1% showed up on time.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", ENTRY, "utf8");
