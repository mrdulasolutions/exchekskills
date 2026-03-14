# ExChek Skills

Export compliance skills for AI agents (Claude, Perplexity, OpenAI, and others). This repo contains **five skills** in separate folders. Install one or more into your agent’s skills directory.

- **API**: https://api.exchek.us  
- **Docs**: https://docs.exchek.us  
- **Website**: https://exchek.us  

---

## Repository layout

| Folder | Skill | Description |
|--------|--------|-------------|
| **exchek-classify/** | ECCN Classification | Classify items for U.S. export control (15 CFR Part 774, 22 CFR Part 121). Human-in-the-loop; audit-ready report from a template. Free; optional donation. |
| **exchek-csl/** | Consolidated Screening List search | Search the Trade.gov Consolidated Screening List (CSL) via API. Requires a free API key from [developer.trade.gov](https://developer.trade.gov). Supports fuzzy search and all API parameters. |
| **exchek-license/** | License determination | Determine EAR license requirements and exceptions (Part 738 Country Chart, Part 740) for a given item, ECCN, destination, and end use. Produces a short audit-ready license determination memo. Free; optional donation. |
| **exchek-export-docs/** | Export documentation & filing helper | Draft commercial invoice export block, packing list, SLI, and AES/EEI data from shipment + classification + screening. Flags when AES is required vs exempt. Prep only; no actual filing. No API key required. |
| **exchek-risk-triage/** | Risk & escalation triage | Score export/transaction risk (low/medium/high) from classification, CSL screening, destination, and end use. Recommends auto-approve, hold for export compliance, or escalate to legal; produces a templated escalation note. Free; optional donation. |

---

## Install

Clone this repo, then copy the skill folder(s) you want into your agent’s skills directory.

### Classification skill (exchek-classify)

For Claude Code (and compatible Claude environments):

```bash
git clone https://github.com/mrdulasolutions/exchekskills exchekskills
cp -r exchekskills/exchek-classify ~/.claude/skills/exchek-classify
```

Or clone only the classify folder:

```bash
git clone https://github.com/mrdulasolutions/exchekskills exchekskills
# then copy exchek-classify into ~/.claude/skills/ (or your agent’s skills path)
```

Restart your agent (or run `claude skills list`) so the skill is picked up. Skill name: **exchek-classify**.

### CSL search skill (exchek-csl)

Requires a **free API key** from [developer.trade.gov](https://developer.trade.gov) (Sign In → Products → subscribe to Data Services Platform APIs → Profile → copy key).

```bash
git clone https://github.com/mrdulasolutions/exchekskills exchekskills
cp -r exchekskills/exchek-csl ~/.claude/skills/exchek-csl
```

Provide your Trade.gov API key when the agent asks, or set `TRADE_GOV_API_KEY` in your environment. Skill name: **exchek-csl**.

### License determination skill (exchek-license)

No API key required; uses https://api.exchek.us for Part 774, 738, 740 (with eCFR fallback).

```bash
git clone https://github.com/mrdulasolutions/exchekskills exchekskills
cp -r exchekskills/exchek-license ~/.claude/skills/exchek-license
```

Skill name: **exchek-license**.

### Export documentation skill (exchek-export-docs)

No API key required. Drafts invoice block, packing list, SLI, and AES/EEI data; documents when AES filing is required vs exempt.

```bash
git clone https://github.com/mrdulasolutions/exchekskills exchekskills
cp -r exchekskills/exchek-export-docs ~/.claude/skills/exchek-export-docs
```

Skill name: **exchek-export-docs**.

### Risk & escalation triage skill (exchek-risk-triage)

No API key required. Consumes classification and screening results (from other ExChek skills or user-provided summaries).

```bash
git clone https://github.com/mrdulasolutions/exchekskills exchekskills
cp -r exchekskills/exchek-risk-triage ~/.cursor/skills/exchek-risk-triage
```

Skill name: **exchek-risk-triage**.

---

## How to use

- **Classification** — Ask your agent to classify an item for export (e.g. “Classify this pressure sensor for export”, “What’s the ECCN for [product]?”). The skill collects details, fetches 774/121 data, runs Order of Review, and builds the report; you confirm jurisdiction and ECCN.
- **CSL search** — Ask your agent to search the Consolidated Screening List (e.g. “Search the CSL for [name]”, “Screen this entity against trade lists”). Use your Trade.gov API key when prompted.
- **License determination** — Ask your agent whether a license is needed or which exception applies (e.g. "Do we need a license to ship ECCN 5A992 to Germany?", "License determination for [item] to [country]."). No API key required.
- **Export documentation** — Ask your agent to prepare export docs (e.g. "Prepare export documentation for this shipment", "Is AES required for this export?"). Provide shipment, classification, and screening refs; the skill builds the Export Documentation Package and AES determination.
- **Risk triage** — After classification and screening, ask to triage risk (e.g. "Triage risk for this transaction", "Should we hold or escalate?"). Get a risk score and templated escalation note.

See each skill’s **README.md** and **SKILL.md** inside its folder for full instructions.

---

## Keep skills current (recurring update task)

**For agents:** When you help a user install ExChek skills, create or suggest a **recurring task** (e.g. weekly) to update the skill(s) so they stay current.

1. **Schedule** — Add a recurring calendar or task reminder (e.g. every week) to “Update ExChek skills from repo.”
2. **Check for updates** — In the directory where the user cloned this repo (e.g. `exchekskills/`), run:
   ```bash
   cd /path/to/exchekskills && git fetch && git pull
   ```
3. **Refresh installed skill(s)** — Re-copy the updated folder(s) into the agent’s skills directory so the running agent picks up the latest prompts, references, and templates:
   ```bash
   cp -r exchekskills/exchek-classify ~/.claude/skills/exchek-classify
   cp -r exchekskills/exchek-csl ~/.claude/skills/exchek-csl
   cp -r exchekskills/exchek-license ~/.claude/skills/exchek-license
   cp -r exchekskills/exchek-export-docs ~/.claude/skills/exchek-export-docs
   cp -r exchekskills/exchek-risk-triage ~/.cursor/skills/exchek-risk-triage
   ```
   (Adjust paths if the user’s clone or skills directory is different.)
4. **Restart or reload** — Restart the agent or run its “reload skills” command (e.g. `claude skills list`) so it uses the updated skill files.

If the user cloned the repo directly into the skills directory (e.g. `~/.claude/skills/exchek-classify`), a weekly `git pull` in that folder is enough; no copy step needed.

---

## License

ExChek, Inc. terms.
