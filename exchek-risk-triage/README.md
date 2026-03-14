# ExChek Risk & Escalation Triage Skill (exchek-risk-triage)

Scores **export/transaction risk** (low / medium / high) from classification, CSL screening, destination, and end use. Recommends **auto-approve**, **hold for export compliance**, or **escalate to legal**, and produces a templated **escalation note** for audit and handoff.

- **Docs:** https://docs.exchek.us  
- **Website:** https://exchek.us  

## What it does

- **Inputs:** Classification (ECCN, jurisdiction), screening results (hits, lists, adjudication status), destination, end user/end use, optional license/exception. Accepts pasted summaries or references to prior ExChek reports.
- **Outputs:** Risk score (Low/Medium/High), disposition recommendation, and a filled **Risk Triage and Escalation Note** (markdown and optional .docx/.pages).

This skill does **not** perform classification or screening; it consumes results from **exchek-classify** and **exchek-csl** (or user-provided data).

## Install

Copy this folder into your agent’s skills directory:

```bash
# If from exchekinc repo:
cp -r exchek-skill-risk-triage ~/.cursor/skills/exchek-risk-triage

# Or from exchekskills repo:
git clone https://github.com/mrdulasolutions/exchekskills exchekskills
cp -r exchekskills/exchek-skill-risk-triage ~/.cursor/skills/exchek-risk-triage
```

Restart your agent or run `claude skills list`. Skill name: **exchek-risk-triage**.

## How to use

Ask your agent to triage risk after you have classification and screening results, e.g.:

- "Triage risk for this transaction"
- "Should we hold or escalate this?"
- "Risk score for ECCN 5A992 to Germany with no CSL hits"
- "Escalation note for a potential SDN match"

See **SKILL.md** in this folder for full flow, references, and template.

## License

See ExChek, Inc. terms.
