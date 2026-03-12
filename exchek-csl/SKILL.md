---
name: exchek-csl
description: Search the U.S. Consolidated Screening List (CSL) via the Trade.gov API. Use when the user wants to screen a party or entity against export screening lists, search the CSL by name (including fuzzy search), or check if a name appears on federal lists. Requires a free API key from developer.trade.gov.
compatibility: Claude Code, Claude desktop, Claude CoWork, Claude web, Perplexity, OpenAI, and other AI agents that can make HTTP requests
---

# ExChek CSL Search (Consolidated Screening List)

Search the **Consolidated Screening List** (CSL) provided by the International Trade Administration (ITA) via the Trade.gov API. The CSL consolidates eleven export screening lists from the Departments of Commerce, State, and Treasury. This skill supports **all search parameters** the API allows, including **fuzzy name search**.

**You need a free API key.** Users must provide an API key from [developer.trade.gov](https://developer.trade.gov). They can get one at no cost by signing in, subscribing to "Data Services Platform APIs," and copying the key from their Profile. Do **not** store the key in the skill; use the key the user provides (e.g. when you ask, or from an environment variable such as `TRADE_GOV_API_KEY`). See [references/api-key-setup.md](references/api-key-setup.md).

## When to use

Invoke this skill when the user asks to:

- Search the Consolidated Screening List
- Screen a party, entity, or name against trade lists
- Check if a name or company is on the CSL
- Run a fuzzy search on the CSL (e.g. names in different spellings or transliterations)
- Look up an entity in federal export screening lists

Example triggers: "Search the CSL for [name]", "Screen this entity against the consolidated screening list", "Is [company name] on the CSL?", "Fuzzy search the CSL for [name]".

## Flow

1. **Establish report folder and format (when you can write files)** — If you are in CoWork, Desktop with file access, or Claude Code: ask the user which folder to save CSL reports in; if none, suggest creating `ExChek CSL Reports` (or `ExChek Reports`) in the workspace and create it with their approval. Also ask: "Are you on **Mac** or **Windows**? Do you want the report as **Word (.docx)** or **Apple Pages (.pages)**?" Store the choices (platform: mac | windows, format: docx | pages) for use after building the report. If you are on Claude web or cannot write files, skip this and plan to output the full report in chat and tell the user to save it manually.
2. **API key** — Ensure the user has an API key. If not, direct them to [developer.trade.gov](https://developer.trade.gov) and [references/api-key-setup.md](references/api-key-setup.md). If they have one, ask them to provide it (or read from env e.g. `TRADE_GOV_API_KEY`). Never store the key in the skill.
3. **Collect search inputs** — Gather what the user wants to search: at least **name** (required for name search). Optionally: **sources** (which list(s)), **address**, **countries**, and any other parameters the API supports. See [references/api-reference.md](references/api-reference.md) for the full parameter list.
4. **Build the request** — Using [references/api-reference.md](references/api-reference.md), construct the HTTP request: base URL, path, method (typically GET), authentication (query param or header with the user’s key), and all chosen query parameters (name, sources, fuzzy options, etc.).
5. **Call the API** — Send the request to the CSL search endpoint.
6. **Interpret the response** — Parse the JSON. For fuzzy search, use the **score** (or similar) to explain match strength. For each result, note **source** (which list) and key fields (name, addresses, countries as applicable).
7. **Summarize and cite** — Present results clearly in chat, cite which list(s) each hit comes from, and mention the score when relevant.
8. **Build the report** — After presenting results, build a screening memo by filling [templates/report-template.md](templates/report-template.md) with the search parameters (step 3), the API used (Trade.gov CSL), and the results (count, summary, and detail for each hit with source list and score). **Do not call any API to generate or store the report.** If you can write files: save the report in the folder from step 1 as `ExChek-CSL-Report-YYYY-MM-DD-ShortQueryName.md` (use a short sanitized version of the search query for the filename) and show the path or summary in chat. If the user asked for **Word (.docx)** or **Apple Pages (.pages)** (from step 1), run the conversion script: from the skill directory run `npm install --prefix scripts` once if not already done, then `node scripts/report-to-docx.mjs <path-to-the-saved-report.md>`; this creates `ExChek-CSL-Report-YYYY-MM-DD-ShortQueryName.docx` in the same folder. Then give the user the appropriate instructions for their platform and format — see **Report format (Mac/Windows)** below. If you cannot write files (e.g. Claude web): output the full report in chat and instruct the user to save it to their compliance records for audit retention.
9. **Compliance reminder** — Remind the user that CSL results are for screening support only and that they must verify any compliance decision against official Federal Register and agency sources.

## Report template (CSL screening memo)

After the search, fill [templates/report-template.md](templates/report-template.md) with:

- **Section 1:** Search parameters — SEARCH_QUERY, SOURCES_FILTER, ADDRESS, COUNTRIES, OTHER_PARAMS.
- **Section 2:** RESULTS_COUNT and RESULTS_SUMMARY (e.g. "No matches" or "N potential match(es); review required").
- **Section 3:** RESULTS_DETAIL — for each API hit: name, source list(s), score (if fuzzy), address, country, and any other key fields returned.
- **Sections 4–5:** AI/audit trail and retention disclaimer (fill DATE and any session note; keep disclaimer as-is).

Omit only when no data exists (use "Not provided" or "None"). If you can write files, save as `ExChek-CSL-Report-YYYY-MM-DD-ShortQueryName.md` in the folder from step 1; if the user asked for .docx or .pages, run the conversion script and then give platform/format instructions. Otherwise output the full report in chat and tell the user to save it for compliance records.

## Report format (Mac/Windows)

After generating the .docx (via `node scripts/report-to-docx.mjs <path-to-report.md>`), tell the user what to do based on their chosen platform and format:

| User choice | What to say |
|-------------|-------------|
| **Windows / Word** | "Your CSL report is saved as … .docx. Open it in **Microsoft Word**." |
| **Mac / Word** | "Your CSL report is saved as … .docx. Open it in **Word for Mac**." |
| **Mac / Pages** | "Your CSL report is saved as … .docx. To use it in **Apple Pages**: open the file in Pages (File → Open), then File → Save to save as .pages." |
| **Windows / Pages** | "Your CSL report is saved as … .docx. Open it in Word, or upload to iCloud and open in Pages if you prefer." |

## References

- **API reference (endpoint, parameters, response):** [references/api-reference.md](references/api-reference.md). The exact base URL, path, and parameter names are on the [developer.trade.gov API details page](https://developer.trade.gov/api-details#api=consolidated-screening-list&operation=search); use that page as the source of truth when building requests.
- **API key setup:** [references/api-key-setup.md](references/api-key-setup.md).

## Compliance disclaimer

Results from the CSL API are **assistive only**. They do not constitute legal or compliance advice. Users must verify any determination against official Federal Register publications and the original lists maintained by Commerce, State, and Treasury before relying on them for compliance decisions.
