#!/usr/bin/env node
/**
 * Convert an ExChek markdown report (.md) to Word (.docx).
 * Usage: node report-to-docx.mjs <path-to-report.md>
 * Output: <path-to-report.docx> in the same directory.
 * Requires: npm install (in this scripts folder) first.
 */

import { readFileSync, writeFileSync } from "fs";
import { resolve, dirname } from "path";
import { fileURLToPath } from "url";
import {
  Document,
  Packer,
  Paragraph,
  TextRun,
  HeadingLevel,
} from "docx";

const __dirname = dirname(fileURLToPath(import.meta.url));

function parseReportToBlocks(md) {
  const lines = md.split(/\r?\n/);
  const blocks = [];
  let i = 0;

  while (i < lines.length) {
    const line = lines[i];
    const trimmed = line.trim();
    const next = lines[i + 1]?.trim() ?? "";

    if (!trimmed) {
      i++;
      continue;
    }

    // Section header: line of = only (underline for line above)
    if (/^=+$/.test(trimmed)) {
      const prev = blocks[blocks.length - 1];
      if (prev?.type === "paragraph" && prev.text) {
        prev.type = "heading1";
      }
      i++;
      continue;
    }

    // Numbered section header: "1. ITEM INFORMATION", "7.1 AI-assisted..."
    if (/^\d+(\.\d+)?\.\s+.+/.test(trimmed)) {
      blocks.push({ type: "heading2", text: trimmed });
      i++;
      continue;
    }

    // Subsection underline: "-------------------------------------------------"
    if (/^-+$/.test(trimmed) && trimmed.length > 10) {
      const prev = blocks[blocks.length - 1];
      if (prev?.type === "paragraph" && prev.text) {
        prev.type = "heading3";
      }
      i++;
      continue;
    }

    // List item
    if (trimmed.startsWith("- ")) {
      blocks.push({ type: "list", text: trimmed.slice(2) });
      i++;
      continue;
    }

    // Plain paragraph (collect consecutive non-special lines)
    let para = trimmed;
    i++;
    while (i < lines.length) {
      const nextLine = lines[i];
      const nextTrimmed = nextLine?.trim();
      if (!nextTrimmed) break;
      if (nextTrimmed.startsWith("- ") || /^=+$/.test(nextTrimmed) || /^-+$/.test(nextTrimmed)) break;
      if (/^\d+(\.\d+)?\.\s+.+/.test(nextTrimmed)) break;
      para += " " + nextTrimmed;
      i++;
    }
    blocks.push({ type: "paragraph", text: para });
  }

  return blocks;
}

function buildDocument(blocks) {
  const children = [];

  for (const block of blocks) {
    const text = block.text || "";
    if (!text) continue;

    switch (block.type) {
      case "heading1":
        children.push(
          new Paragraph({
            text,
            heading: HeadingLevel.HEADING_1,
            spacing: { before: 240, after: 120 },
          })
        );
        break;
      case "heading2":
        children.push(
          new Paragraph({
            text,
            heading: HeadingLevel.HEADING_2,
            spacing: { before: 240, after: 120 },
          })
        );
        break;
      case "heading3":
        children.push(
          new Paragraph({
            text,
            heading: HeadingLevel.HEADING_3,
            spacing: { before: 120, after: 60 },
          })
        );
        break;
      case "list":
        children.push(
          new Paragraph({
            children: [new TextRun({ text: "• " + text })],
            indent: { left: 720 },
            spacing: { after: 60 },
          })
        );
        break;
      default:
        children.push(
          new Paragraph({
            children: [new TextRun(text)],
            spacing: { after: 120 },
          })
        );
    }
  }

  return new Document({
    sections: [
      {
        properties: {},
        children,
      },
    ],
  });
}

async function main() {
  const mdPath = process.argv[2];
  if (!mdPath) {
    console.error("Usage: node report-to-docx.mjs <path-to-report.md>");
    process.exit(1);
  }

  const resolved = resolve(process.cwd(), mdPath);
  let md;
  try {
    md = readFileSync(resolved, "utf8");
  } catch (e) {
    console.error("Could not read file:", resolved, e.message);
    process.exit(1);
  }

  const blocks = parseReportToBlocks(md);
  const doc = buildDocument(blocks);
  const buffer = await Packer.toBuffer(doc);

  const outPath = resolved.replace(/\.md$/i, ".docx");
  writeFileSync(outPath, buffer);
  console.log("Wrote:", outPath);
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
