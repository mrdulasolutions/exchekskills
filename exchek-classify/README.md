# ExChek Classification Skill (exchek-classify)

Classify export items for **ECCN** (BIS/ITAR) using the ExChek API. Runs the full Adjudicator-in-the-Loop (AITL) flow: collect item info, fetch 774/121 data, run jurisdiction and Order of Review, and produce an audit-ready classification report when you approve.

**Why use it** — U.S. export classifications (15 CFR Part 774, 22 CFR Part 121) from your agent. Free to use; optional donation. Reports are suitable for compliance records and audits.

- **API**: https://api.exchek.us  
- **Docs**: https://docs.exchek.us  
- **Website**: https://exchek.us  

## Install

This skill lives in the **exchek-classify** folder in the public repo. Clone the repo and copy the folder into your agent’s skills directory:

```bash
git clone https://github.com/mrdulasolutions/exchekskills exchekskills
cp -r exchekskills/exchek-classify ~/.claude/skills/exchek-classify
```

Or clone directly into the skills folder (Claude Code):

```bash
git clone https://github.com/mrdulasolutions/exchekskills exchekskills
cp -r exchekskills/exchek-classify ~/.claude/skills/exchek-classify
```

Restart your agent (or run `claude skills list`). Skill name: **exchek-classify**.

## How to use

- **Invoke** — Type `/exchek-classify` or ask in plain language, e.g. *“Classify this item for export”* or *“What’s the ECCN for [product description]?”*  
- **What the agent does** — Collects item details, fetches Part 774/121 data, runs classification, asks you to confirm jurisdiction and ECCN, then builds the report from the template. Optional donation at the end.  
- **What you get** — Final ECCN (or jurisdiction outcome), rationale, citations, and an audit-ready memorandum.

See **SKILL.md** and **skill.yaml** in this folder for full instructions and manifest.

## License

See ExChek, Inc. terms.
