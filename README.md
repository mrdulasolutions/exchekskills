# ExChek Skills

Export compliance skills for AI agents (Claude, Perplexity, OpenAI, and others). This repo contains **three skills** in separate folders. Install one or more into your agent’s skills directory.

- **API**: https://api.exchek.us  
- **Docs**: https://docs.exchek.us  
- **Website**: https://exchek.us  

---

## Repository layout

| Folder | Skill | Description |
|--------|--------|-------------|
| **exchek-classify/** | ECCN Classification | Classify items for U.S. export control (15 CFR Part 774, 22 CFR Part 121). Human-in-the-loop; audit-ready report from a template. Free; optional donation. |
| **exchek-csl/** | Consolidated Screening List search | Search the Trade.gov Consolidated Screening List (CSL) via API. Requires a free API key from [developer.trade.gov](https://developer.trade.gov). Supports fuzzy search and all API parameters. |
| **exchek-export-docs/** | Export documentation & filing helper | Draft commercial invoice export block, packing list, SLI, and AES/EEI data from shipment + classification + screening. Flags when AES is required vs exempt. Prep only; no actual filing. No API key required. |

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

### Export documentation skill (exchek-export-docs)

No API key required. Drafts invoice block, packing list, SLI, and AES/EEI data; documents when AES filing is required vs exempt.

```bash
git clone https://github.com/mrdulasolutions/exchekskills exchekskills
cp -r exchekskills/exchek-export-docs ~/.claude/skills/exchek-export-docs
```

Skill name: **exchek-export-docs**.

---

## How to use

- **Classification** — Ask your agent to classify an item for export (e.g. “Classify this pressure sensor for export”, “What’s the ECCN for [product]?”). The skill collects details, fetches 774/121 data, runs Order of Review, and builds the report; you confirm jurisdiction and ECCN.
- **CSL search** — Ask your agent to search the Consolidated Screening List (e.g. “Search the CSL for [name]”, “Screen this entity against trade lists”). Use your Trade.gov API key when prompted.
- **Export documentation** — Ask your agent to prepare export docs (e.g. "Prepare export documentation for this shipment", "Is AES required for this export?"). Provide shipment, classification, and screening refs; the skill builds the Export Documentation Package and AES determination.

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
   cp -r exchekskills/exchek-export-docs ~/.claude/skills/exchek-export-docs
   ```
   (Adjust paths if the user’s clone or skills directory is different.)
4. **Restart or reload** — Restart the agent or run its “reload skills” command (e.g. `claude skills list`) so it uses the updated skill files.

If the user cloned the repo directly into the skills directory (e.g. `~/.claude/skills/exchek-classify`), a weekly `git pull` in that folder is enough; no copy step needed.

---

## License

ExChek, Inc. terms.
