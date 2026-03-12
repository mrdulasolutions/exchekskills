---
name: exchek-classify
description: Classify export items for ECCN (BIS/ITAR) using regulatory data and in-skill classification. Free to use; optional donation. Use when the user wants to classify an item, determine ECCN, check BIS or ITAR jurisdiction, or get an audit-ready export classification memo.
compatibility: Claude Code, Claude desktop, Claude CoWork, Claude web
---

# ExChek ECCN Classification

Classify items for U.S. export control (15 CFR Part 774, 22 CFR Part 121) using regulatory data and your own classification reasoning. The skill teaches you how to obtain Part 774 (CCL) and Part 121 (USML) data, apply Order of Review, and produce an audit-ready classification report from a template. **No paid API required.** ExChek is free; an optional donation is suggested at the end.

## When to use

Invoke this skill when the user asks to classify an item for export, determine ECCN or jurisdiction, or check license requirements. Example triggers: "Classify this item for export", "What's the ECCN for…?", "Is this ITAR or EAR?", "Export classification for [product]", "Do we need a license for shipping to [country]?"

## Regulatory data (snapshots / eCFR)

To classify, obtain Part 774 (CCL) and Part 121 (USML) structure data using one of these options:

- **ExChek API (recommended):** No auth, no payment.
  - `GET https://api.exchek.us/api/ecfr/774` — Part 774 (CCL) structure JSON.
  - `GET https://api.exchek.us/api/ecfr/121` — Part 121 (USML) structure JSON.
- **eCFR developer API:** No API key. Use when ExChek is unavailable.
  - Structure: `GET https://www.ecfr.gov/api/versioner/v1/structure/current/title-15.json` (extract Part 774), `GET https://www.ecfr.gov/api/versioner/v1/structure/current/title-22.json` (extract Part 121).
  - JSON shape: nodes have `identifier`, `label`, `children`; traverse to find sections and cite specific parts.

Use the structure to apply Order of Review and cite specific parts. See [references/reference.md](references/reference.md) for details.

## Classification prompts

- **System prompt**: [prompts/classification-system.md](prompts/classification-system.md) — expert export control instructions (USML 22 CFR Part 121, CCL 15 CFR Part 774, Order of Review, ITAR/EAR).
- **User template**: [prompts/classification-user-template.md](prompts/classification-user-template.md) — item variables to collect: Item description, Technical specifications, Performance parameters, Valuation, Units, HTS Code, Schedule B number, End user, End use, Destination country.

Fill the user template from the user, then run classification using the system prompt and (optionally) the regulatory data from the API or eCFR.

## Saving the report (CoWork vs Claude web)

The report is DDTC/DOJ/BIS audit-ready and must be retained by the user for compliance (e.g. BIS 15 CFR Part 762). Behavior depends on environment:

- **Claude CoWork, Claude Desktop (with file access), Cursor, or Claude Code:** You have write access to the user's machine or workspace. At the start of classification, ask which folder to save reports in (e.g. Desktop, Documents, or a project folder). If they don't specify, suggest creating `ExChek Reports` in the current workspace or project root and create it after they agree. Ask whether they want the report as Word (.docx) or Apple Pages (.pages) and whether they are on Mac or Windows (see Flow step 1 and **Report format (Mac/Windows)**). Save each completed report as `ExChek-Report-YYYY-MM-DD-ShortItemName.md`. If they asked for .docx or .pages, run `node scripts/report-to-docx.mjs <path-to-report.md>` to generate the .docx and give them the matching instructions for their platform and format. Also show the full report or a summary in chat.
- **Claude web (claude.ai) or any environment where you cannot write files:** You cannot save to the user's folder. Output the **entire completed report** in the chat so the user can copy it. Then instruct them to save it for audit retention: "Please save this memorandum to your compliance records (e.g. copy into a document and save to your Documents folder or shared drive). BIS and DDTC expect retention of classification records; keeping a copy is important for audits." Optionally mention that they can use the conversation export (Settings → Privacy → Export data) or a browser extension to export the conversation to PDF/Markdown if they want a dated record.

## CUI and classified information

You **must** run the **CUI/Classified check (step 0)** at the start of every classification and act on the user's selection before proceeding to step 1. If the user or their work involves **Controlled Unclassified Information (CUI)** or **classified information**, do **not** use cloud services or API-based LLMs. The user must run this skill **on-premises** with a **local LLM** only: download the skill as a ZIP from the [ExChek skill repo](https://github.com/mrdulasolutions/exchekskill) (Code → Download ZIP), transfer it to the on-prem environment via their approved process, and install it into the on-prem agent's skills directory. Regulatory data (Part 774 and Part 121) must also be obtained on-prem (e.g. run the ExChek refresh script or fetch from eCFR and extract the parts). See [references/cui-classified.md](references/cui-classified.md) and the docs [CUI / Classified Information](https://docs.exchek.us/docs/cui-classified) for full guidance.

**CUI/Classified selector (step 0):**

| User choice | Agent action |
|-------------|--------------|
| **Yes, this is CUI/Classified** | Do **not** continue with cloud/API-based classification. Route the user to full CUI/classified guidance: summarize that they must use the skill **on-premises with a local LLM only** (no cloud APIs, no cloud LLMs). Point them to [references/cui-classified.md](references/cui-classified.md) and the docs [CUI / Classified Information](https://docs.exchek.us/docs/cui-classified). Offer to show the key points from that reference (on-prem, install from ZIP, 774/121 on-prem). Do not collect item info or call ExChek/eCFR APIs with their data. |
| **No** | Confirm and **continue** with the normal flow (step 1: report folder and format, then step 2: collect item info, etc.). |
| **Don't know** | Give the **quick brief** from [references/cui-classified.md](references/cui-classified.md) (Quick brief for Don't know). Then ask: "Do you want to proceed with this classification in this environment (No), or do you need to use an on-prem setup (Yes)?" so they can re-select or continue. |

## Human-in-the-loop

You **must** get **explicit user confirmation** on jurisdiction (BIS vs ITAR) and on the final ECCN/classification before presenting the report. Do not override the user's stated jurisdiction or classification.

## Flow

0. **CUI/Classified check** — At the very start, before asking about report folder or collecting item info, show a short warning and present a selector. Say something like: "Before we start: Does the item or any information you'll share involve **Controlled Unclassified Information (CUI)** or **classified information**? Please choose: **Yes** (this is CUI/classified), **No** (it is not), or **Don't know**." Then act according to **CUI/Classified selector** below (Yes → route to CUI/classified guidance and do not continue with cloud classification; No → continue to step 1; Don't know → quick brief from [references/cui-classified.md](references/cui-classified.md), then re-ask to proceed or use on-prem).
1. **Establish report folder and format (when you can write files)** — If you are in CoWork, Desktop with file access, Cursor, or Claude Code: ask the user which folder to save reports in; if none, suggest creating `ExChek Reports` in the workspace and create it with their approval. Also ask: "Are you on **Mac** or **Windows**? Do you want the report as **Word (.docx)** or **Apple Pages (.pages)**?" Store the choices (platform: mac | windows, format: docx | pages) for use after building the report. If you are on Claude web or cannot write files, skip this and plan to output the full report in chat and tell the user to save it manually.
2. **Collect item info** — If the user wants to pull item data from a CRM (HubSpot, Salesforce, or another), determine how they will provide data: (1) They have a HubSpot/Salesforce/CRM skill or connector installed — ask for object type and record ID, then use that connector (or the agent's CRM API access) to fetch the record and map to the classification template. (2) They will paste data — ask for object type and ID and for them to paste the relevant fields. (3) They have API keys — see [references/crm-pull.md](references/crm-pull.md) for endpoints and field mapping. Fill the template from the CRM data; then collect any missing fields from the user. If the user has a spec sheet, datasheet, or other document, ask for the file path or use the file they have already shared. In environments with file access (CoWork, Desktop, Cursor, Claude Code), read the file and extract item description and specs to pre-fill the template. In Claude web or environments without file access, ask the user to paste relevant excerpts. Ask the user for: item description, technical specifications, performance parameters (optional), valuation, units, HTS Code, Schedule B number (optional), end user, end use, destination country, intended use, and notes. Optionally ask for classification notes (internal/compliance or reclassification reason). Use [prompts/classification-user-template.md](prompts/classification-user-template.md). When a source document was used, set SOURCE_DOCUMENT (e.g. filename or "Pasted excerpt") and SOURCE_EXCERPTS in the report; otherwise use "Not applicable". CRM pull: see [references/crm-pull.md](references/crm-pull.md) for HubSpot, Salesforce, and generic connector behavior.
3. **Get regulatory data (optional but recommended)** — Call `GET https://api.exchek.us/api/ecfr/774` and `GET https://api.exchek.us/api/ecfr/121` to retrieve Part 774 and Part 121 structure. If the API returns 503, use the eCFR URLs above and extract the relevant part from each title.
4. **Classify** — Run classification using [prompts/classification-system.md](prompts/classification-system.md) and the collected item info. Classification must follow **Supplement No. 4 to Part 774** (Commerce Control List Order of Review) and **15 CFR 772.1** for "specially designed" (catch/release). When multiple ECCNs could apply: 600 series and 9x515 take precedence; civilian-use signals favor **1A995 over 1A004**. Use the regulatory data to apply Order of Review and cite sections. See [references/order-of-review.md](references/order-of-review.md) for a concise OOR reference. Present jurisdiction (BIS vs ITAR) and rationale to the user; **ask for confirmation** before proceeding. Then present the proposed ECCN and justification; **ask for approval** (or feedback to refine). Repeat until the user explicitly approves the classification.
5. **Build the report** — After the user approves, build the DDTC/DOJ/BIS audit-ready memorandum by filling [templates/report-template.md](templates/report-template.md) (all sections including Section 7 AITL/AI audit). **Do not call any API to generate or store the report.** If you can write files: save the report in the folder from step 1 as `ExChek-Report-YYYY-MM-DD-ShortItemName.md` and show the full report or summary in chat. If the user asked for **Word (.docx)** or **Apple Pages (.pages)** (from step 1), run the conversion script: from the skill directory run `npm install --prefix scripts` once if not already done, then `node scripts/report-to-docx.mjs <path-to-the-saved-report.md>`; this creates `ExChek-Report-YYYY-MM-DD-ShortItemName.docx` in the same folder. Then give the user the appropriate instructions for their platform and format — see **Report format (Mac/Windows)** below. If you cannot write files (e.g. Claude web): output the full report in chat and instruct the user to save it to their compliance records for audit retention.
6. **Push to CRM (optional)** — If the user wants to push this classification to a CRM (HubSpot, Salesforce, or another), confirm: (1) target system and object type and record ID, (2) property/field names for ECCN, jurisdiction, and determination date (and optional report URL if available). Always ask for explicit confirmation before writing. Then use the user's CRM connector or API access to update the record. See [references/crm-push.md](references/crm-push.md).
7. **Suggest donation** — ExChek is free to use. Offer three options: **I'll donate now** (you check their balance and ask the amount, then help send); **I'll donate later** (set up a reminder or scheduled task); **Just trying** (no donation). Say something like: "Would you like to donate? You can say: **I'll donate now** (I'll check your balance and ask the amount, then we can send), **I'll donate later** (I'll set up a reminder/task), or **Just trying** (no donation)." Then act on their choice — see **Donation (multi-chain)** and [references/donation.md](references/donation.md) for the three options and agent behavior. Pick the donation address for the network that matches the user's or agent's payment abilities.

## Report template (DDTC/DOJ/BIS audit-ready)

After classification is approved, fill [templates/report-template.md](templates/report-template.md) completely. The template includes:

- **Sections 1–6:** DATE; item info; JURISDICTION, REGULATORY_AGENCY, JURISDICTION_RATIONALE; ECCN, OOR_SUMMARY, JUSTIFICATION; EXPORT_RESTRICTIONS; LICENSE_REQUIREMENTS; CITATIONS (paragraph-level; 772.1 when specially designed; optional "considered and rejected").
- **Section 7 — Adjudicator-in-the-Loop (AITL) and AI Activities Audit (required for audits):** Fill every placeholder to show how AI was used and how the human validated the determination.
  - **AI_DATA_SOURCES** — e.g. "ExChek API GET /api/ecfr/774 and /api/ecfr/121" or "eCFR.gov structure/current/title-15.json, title-22.json".
  - **JURISDICTION_CONFIRMATION** — e.g. "confirmed BIS jurisdiction after review of rationale".
  - **ECCN_APPROVAL** — e.g. "approved ECCN 1A995 after review of justification".
  - **REFINEMENTS_NOTES** — e.g. "None" or a short summary of any feedback and re-analysis.
  - **REGULATORY_SOURCES** — e.g. "ExChek snapshot API and eCFR.gov; [date or session]".
  - **AITL_SEQUENCE** — Numbered list of steps: item collected → data retrieved → AI proposed jurisdiction → adjudicator confirmed → AI proposed ECCN → adjudicator approved → report generated.
- **Section 8:** AUDIT_LOG — summary of the compliance record (steps, sources, approvals).
- **Section 9:** Retention notice is pre-filled; keep as-is.

Omit only when no data exists (use "Not provided" or "None specified"). Then: if you can write files, save the report to the user's report folder as `ExChek-Report-YYYY-MM-DD-ShortItemName.md` and show the full report or summary in chat; if you cannot write files (e.g. Claude web), output the full report in chat and tell the user to save it to their compliance records for audit retention. Do not call any API to store the report.

## Report format (Mac/Windows)

After generating the .docx (via `node scripts/report-to-docx.mjs <path-to-report.md>`), tell the user what to do based on their chosen platform and format:

| User choice | What to say |
|-------------|-------------|
| **Windows / Word** | "Your report is saved as … .docx. Open it in **Microsoft Word**." |
| **Mac / Word** | "Your report is saved as … .docx. Open it in **Word for Mac**." |
| **Mac / Pages** | "Your report is saved as … .docx. To use it in **Apple Pages**: open the file in Pages (File → Open), then File → Save to save as .pages." |
| **Windows / Pages** | "Your report is saved as … .docx. Open it in Word, or upload to iCloud and open in Pages if you prefer." |

## Donation (multi-chain)

At the end of a successful classification, offer the three donation options (see Flow step 7). See [references/donation.md](references/donation.md) for the full list of networks and addresses. **Pick the chain that matches the user's or agent's pay abilities** and give that address when relevant.

**Donation options and agent behavior:**

| User choice | Agent behavior |
|-------------|----------------|
| **I'll donate now** | (1) Check balance for the user's payment method (e.g. wallet/USDC on the network that matches the donation address). (2) Ask how much they want to donate. (3) If the environment supports sending (e.g. send-USDC skill, wallet tools), help them send that amount to the ExChek donation address for the chosen network. If not, give them the address and amount and instruct them to send manually. |
| **I'll donate later** | Set up a reminder or scheduled task to donate (e.g. "Donate to ExChek"). If the environment supports tasks/reminders (e.g. todo list, calendar, or scheduled task), create one. Otherwise suggest they add "Donate to ExChek" to their task list or calendar and give the donation address again for when they're ready. |
| **Just trying** | Acknowledge (e.g. "No problem—ExChek is free to use. Come back if you need another classification."). Do not push donation further. |

## Reference

- API and eCFR: [references/reference.md](references/reference.md)
- Order of Review: [references/order-of-review.md](references/order-of-review.md) — Supplement No. 4 to Part 774, 772.1, and BIS tool links
- CUI / Classified: [references/cui-classified.md](references/cui-classified.md) — On-prem use only; no cloud APIs or LLMs for CUI/classified
- CRM pull: [references/crm-pull.md](references/crm-pull.md) — HubSpot, Salesforce, and generic connector behavior
- CRM push: [references/crm-push.md](references/crm-push.md) — Write ECCN/jurisdiction/date back to CRM
- Donation addresses: [references/donation.md](references/donation.md)
- Docs: https://docs.exchek.us
