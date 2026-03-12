# ExChek Skills

Export compliance skills for AI agents (Claude, Perplexity, OpenAI, and others). This repo contains **two skills** in separate folders. Install one or both into your agent’s skills directory.

- **API**: https://api.exchek.us  
- **Docs**: https://docs.exchek.us  
- **Website**: https://exchek.us  

---

## Repository layout

| Folder | Skill | Description |
|--------|--------|-------------|
| **exchek-classify/** | ECCN Classification | Classify items for U.S. export control (15 CFR Part 774, 22 CFR Part 121). Human-in-the-loop; audit-ready report from a template. Free; optional donation. |
| **exchek-csl/** | Consolidated Screening List search | Search the Trade.gov Consolidated Screening List (CSL) via API. Requires a free API key from [developer.trade.gov](https://developer.trade.gov). Supports fuzzy search and all API parameters. |

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

---

## How to use

- **Classification** — Ask your agent to classify an item for export (e.g. “Classify this pressure sensor for export”, “What’s the ECCN for [product]?”). The skill collects details, fetches 774/121 data, runs Order of Review, and builds the report; you confirm jurisdiction and ECCN.
- **CSL search** — Ask your agent to search the Consolidated Screening List (e.g. “Search the CSL for [name]”, “Screen this entity against trade lists”). Use your Trade.gov API key when prompted.

See each skill’s **README.md** and **SKILL.md** inside its folder for full instructions.

---

## License

ExChek, Inc. terms.
