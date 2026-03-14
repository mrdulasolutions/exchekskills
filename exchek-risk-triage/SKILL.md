---
name: exchek-risk-triage
description: Score export/transaction risk (low/medium/high) from classification, CSL screening, destination, and end use. Recommends auto-approve, hold for export compliance, or escalate to legal, and produces a templated escalation note. Use when the user wants to triage risk, decide whether to hold or escalate, or get a risk score and escalation note for a transaction.
compatibility: Claude Code, Claude desktop, Claude CoWork, Claude web
---

# ExChek Risk & Escalation Triage

Scores **export/transaction risk** (low / medium / high) using classification, CSL/denied-party screening results, destination, and end-use/end-user. Recommends a **disposition**: auto-approve | hold for export compliance | escalate to legal. When hold or escalate applies, produces a **templated escalation note** for audit and handoff. **No classification or screening performed** — this skill consumes results from other ExChek skills or user-provided summaries. ExChek is free; an optional donation is suggested at the end.

## When to use

Invoke this skill when the user wants to:

- Score risk for a transaction after classification and screening
- Decide whether to auto-approve, hold for compliance, or escalate to legal
- Get a triage summary and/or escalation note for a deal, order, or shipment
- Assess risk given ECCN, destination, end use, and screening results

Example triggers: "Triage risk for this transaction", "Should we hold or escalate this?", "Risk score for ECCN 5A992 to Germany with no CSL hits", "Escalation note for a potential SDN match".

**Inputs:** Classification (ECCN or EAR99, jurisdiction BIS/ITAR), screening results (no hits / hits with list(s), adjudication status), destination country, end user/end use (recommended), optional license/exception and transaction ID. Accept pasted summaries or references to prior ExChek reports.

## CUI and classified information

At the start, ask: "Does the item or any information you'll share involve **Controlled Unclassified Information (CUI)** or **classified information**? **Yes** / **No** / **Don't know**." If **Yes**, do not use cloud APIs or LLMs; direct the user to run the skill on-premises with a local LLM (see [ExChek CUI/Classified docs](https://docs.exchek.us/docs/cui-classified)). If **Don't know**, give a brief note that CUI/classified requires on-prem use, then ask whether to proceed in this environment or use on-prem.

## Flow

0. **CUI/Classified check** — Ask the selector above; if Yes → route to on-prem guidance and stop; if No → continue; if Don't know → brief + re-ask.
1. **Report folder and format (when you can write files)** — Ask where to save triage/escalation notes (e.g. "ExChek Reports" or "ExChek Risk Triage"); ask .docx or .pages and Mac or Windows. If no file access, skip and plan to output full note in chat.
2. **Collect inputs** — Classification (ECCN, jurisdiction), screening results (hits, lists, adjudication status), destination, end user/end use, optional license/exception and transaction ID. Accept pasted data or "use my last CSL report and classification memo".
3. **Score risk** — Apply [references/risk-scoring-guidance.md](references/risk-scoring-guidance.md): evaluate screening, classification, destination, end use, and license factors; output **Low** / **Medium** / **High** with short rationale.
4. **Determine disposition** — Map risk and screening outcome to **Auto-approve** | **Hold for export compliance** | **Escalate to legal**; state reason. Use [references/escalation-best-practices.md](references/escalation-best-practices.md).
5. **Build triage record** — Fill [templates/Risk Triage and Escalation Note.md](templates/Risk%20Triage%20and%20Escalation%20Note.md) completely: transaction summary, risk score, disposition, rationale, red flags (if any), escalation block (when hold or escalate). Save as `ExChek-RiskTriage-YYYY-MM-DD-ShortName.md` in the folder from step 1. If user asked for .docx or .pages, run `npm install --prefix scripts` once if needed, then `node scripts/report-to-docx.mjs <path-to-saved-note.md>` from the skill directory; give platform/format instructions per **Report format (Mac/Windows)**. If you cannot write files: output the full note in chat and instruct the user to save it to their compliance records.
6. **Suggest donation** — ExChek is free. Offer: **I'll donate now** / **I'll donate later** / **Just trying**. Mention that optional donations support the project; if the user has a send-USDC or wallet capability, help them donate; otherwise give ExChek donation info from https://docs.exchek.us.

## Report template (Risk Triage and Escalation Note)

After scoring risk and determining disposition, fill [templates/Risk Triage and Escalation Note.md](templates/Risk%20Triage%20and%20Escalation%20Note.md) completely. All sections: (1) Document header, (2) Transaction summary, (3) Risk score and rationale, (4) Disposition and rationale, (5) Red flag assessment (if any), (6) Escalation note (when hold or escalate), (7) AI tool disclosure. Fill every `{{PLACEHOLDER}}`; use "Not provided" or "None" when no data exists. Map inputs to placeholders; for red flags use the checklist in [references/escalation-best-practices.md](references/escalation-best-practices.md) and the DPS red-flag list in exchek-skill-csl's [denied-party-screening-best-practices](https://github.com/mrdulasolutions/exchekskills/blob/main/exchek-skill-csl/references/denied-party-screening-best-practices.md) (Section 5) when screening or end-use context is present.

## Report format (Mac/Windows)

After generating the .docx (via `node scripts/report-to-docx.mjs <path-to-note.md>`):

| User choice | What to say |
|-------------|-------------|
| **Windows / Word** | "Your risk triage note is saved as … .docx. Open it in **Microsoft Word**." |
| **Mac / Word** | "Your risk triage note is saved as … .docx. Open it in **Word for Mac**." |
| **Mac / Pages** | "Your risk triage note is saved as … .docx. To use in **Apple Pages**: File → Open, then File → Save as .pages." |
| **Windows / Pages** | "Open the .docx in Word, or upload to iCloud and open in Pages if you prefer." |

## References

- **Risk scoring:** [references/risk-scoring-guidance.md](references/risk-scoring-guidance.md) — Factors that increase risk, low/medium/high bands, mapping to disposition.
- **Escalation:** [references/escalation-best-practices.md](references/escalation-best-practices.md) — When to hold vs escalate, escalation chain, documentation expectations.
- **Red flags (DPS):** For screening-related red flags and escalation language, see the CSL skill's denied-party-screening-best-practices (Section 5 Red Flag Assessment, Section 4.5.C Escalation).
- **Docs:** https://docs.exchek.us

## Compliance disclaimer

This skill provides assistive risk triage and disposition recommendations only. It does not perform classification, screening, or license determination. Final disposition and compliance decisions are the responsibility of the user and their designated Export Compliance Officer or legal counsel. Retain triage and escalation records per your program and 15 C.F.R. § 762.6 as applicable.
