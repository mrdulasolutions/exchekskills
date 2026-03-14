---
name: exchek-export-docs
description: Draft export documentation (commercial invoice export block, packing list annotations, SLI, AES/EEI data elements) from shipment, classification, and screening results. Flags when AES is required vs exempt and documents reasoning. Prep only; does not perform actual AES filing. Free; optional donation.
compatibility: Claude Code, Claude desktop, Claude CoWork, Claude web
---

# ExChek Export Documentation & Filing Helper

Given **shipment details** plus **classification** and **screening** results, this skill drafts export documentation and AES/EEI data elements: commercial invoice export block, packing list annotations, Shipper's Letter of Instruction (SLI), and an AES/EEI data table. It **flags when AES filing is required vs exempt** and documents the reasoning (15 CFR 758.1, Census FTR 30.7). **No actual AES/EEI filing** — prep only. ExChek is free; an optional donation is suggested at the end.

## When to use

Invoke this skill when the user wants to prepare export documentation or AES/EEI data for a shipment. Example triggers: "Prepare export documentation for this shipment", "Draft the commercial invoice export block and SLI", "Do we need to file AES for this?", "Export docs for [shipment] with ECCN [X] to [country]", "AES required or exempt for this export?"

**Inputs:** Shipment (exporter, consignee, destination, value, quantity, description, Schedule B/HTS, transport mode), classification (ECCN or EAR99, memo ref), screening (DPS record ref), license or exception or NLR (optional license memo ref).

## CUI and classified information

At the start, ask: "Does the item or any information you'll share involve **Controlled Unclassified Information (CUI)** or **classified information**? **Yes** / **No** / **Don't know**." If **Yes**, do not use cloud APIs or LLMs; direct the user to run the skill on-premises with a local LLM (see [ExChek CUI/Classified docs](https://docs.exchek.us/docs/cui-classified)). If **Don't know**, give a brief note that CUI/classified requires on-prem use, then ask whether to proceed in this environment or use on-prem.

## Flow

0. **CUI/Classified check** — Ask the selector above; if Yes → route to on-prem guidance and stop; if No → continue; if Don't know → brief + re-ask.
1. **Report folder and format (when you can write files)** — Ask where to save (e.g. "ExChek Export Docs" or "ExChek Reports") and .docx/.pages preference; Mac or Windows. If no file access, skip and plan to output full package in chat.
2. **Collect inputs** — Shipment: exporter, ultimate consignee, intermediate consignee(s), destination country, shipment value (USD), quantity, item description, Schedule B/HTS if available, transport mode. Classification: ECCN (or EAR99/USML), classification memo ref. Screening: DPS record ref (screening complete). License: license number, license exception (e.g. LVS, GBS), or NLR; optional license determination memo ref. Allow pasted data or references to prior ExChek reports.
3. **Determine AES** — Apply [references/aes-eei-requirements.md](references/aes-eei-requirements.md): value threshold (e.g. $2,500), destination, controlled item, license/exception. Conclude AES required Yes or No; write short reasoning with citations (15 CFR 758.1, Census 30.7 as applicable).
4. **Build export documentation package** — Fill [templates/Export Documentation Package.md](templates/Export%20Documentation%20Package.md): Section 1 AES determination, Section 2 invoice export block (include full DCS per 15 CFR 758.6 — see [references/export-docs-best-practices.md](references/export-docs-best-practices.md)), Section 3 packing list annotations, Section 4 SLI, Section 5 AES/EEI data elements, Section 6 AI disclosure. Use "Not provided" or "None" when no data exists. For DCS full text use the exact wording in export-docs-best-practices.md.
5. **Save and convert** — If you can write files: save as `ExChek-ExportDocs-YYYY-MM-DD-ShortName.md` in the folder from step 1. If user asked for .docx or .pages, run `npm install --prefix scripts` once if needed, then `node scripts/report-to-docx.mjs <path-to-saved-report.md>` from the skill directory; give platform/format instructions per **Report format (Mac/Windows)**. If you cannot write files: output the full package in chat and instruct the user to save it to their compliance records.
6. **Suggest donation** — ExChek is free. Offer: **I'll donate now** / **I'll donate later** / **Just trying**. Mention that optional donations support the project; if the user has a send-USDC or wallet capability, help them donate; otherwise give ExChek donation info from https://docs.exchek.us or the classification skill's donation reference if available.

## Report template (Export Documentation Package)

After building the package, fill [templates/Export Documentation Package.md](templates/Export%20Documentation%20Package.md) completely. All six sections: (1) AES/EEI filing determination — required Yes/No, reasoning, citations; (2) Commercial invoice export block — ECCN, country of origin, authorization, full DCS, additional statements; (3) Packing list annotations — line items table, abbreviated DCS; (4) SLI draft — all fields; (5) AES/EEI data elements table; (6) AI tool disclosure. Map inputs: shipment → exporter, consignee, destination, value, quantity, description, Schedule B, transport; classification → ECCN, classification memo ref; screening → DPS ref; license → license/exception/NLR, license memo ref. Fill every `{{PLACEHOLDER}}`; use "Not provided" or "None" when no data exists. See [references/export-docs-best-practices.md](references/export-docs-best-practices.md) for DCS text and placement.

## Report format (Mac/Windows)

After generating the .docx (via `node scripts/report-to-docx.mjs <path-to-report.md>`):

| User choice | What to say |
|-------------|-------------|
| **Windows / Word** | "Your export documentation package is saved as … .docx. Open it in **Microsoft Word**." |
| **Mac / Word** | "Your export documentation package is saved as … .docx. Open it in **Word for Mac**." |
| **Mac / Pages** | "Your export documentation package is saved as … .docx. To use in **Apple Pages**: File → Open, then File → Save as .pages." |
| **Windows / Pages** | "Open the .docx in Word, or upload to iCloud and open in Pages if you prefer." |

## Reference

- **Export docs best practices:** [references/export-docs-best-practices.md](references/export-docs-best-practices.md) — DCS, invoice block, packing list, SLI, recordkeeping.
- **AES/EEI requirements and exemptions:** [references/aes-eei-requirements.md](references/aes-eei-requirements.md) — When AES is required vs exempt, citations, key data elements.
- **Docs:** https://docs.exchek.us

## Compliance disclaimer

This skill prepares export documentation and AES/EEI data for the user's review and use. It does not perform AES/EEI filing. The user is responsible for actual filing and for ensuring all export documentation and determinations are correct and complete before shipment.
