# ExChek CSL Search Skill (exchek-csl)

Search the **Consolidated Screening List** (CSL) via the Trade.gov API. Supports name search (including fuzzy), sources, and all parameters the API allows. Requires a **free API key** from [developer.trade.gov](https://developer.trade.gov).

- **API (ExChek):** https://api.exchek.us  
- **Docs:** https://docs.exchek.us  
- **Website:** https://exchek.us  
- **Trade.gov API key:** https://developer.trade.gov (Sign In → Products → Data Services Platform APIs → Profile)

## Install

This skill lives in the **exchek-csl** folder in the public repo. Clone the repo and copy the folder into your agent’s skills directory:

```bash
git clone https://github.com/mrdulasolutions/exchekskills exchekskills
cp -r exchekskills/exchek-csl ~/.claude/skills/exchek-csl
```

Restart your agent (or run `claude skills list`). Skill name: **exchek-csl**.

## API key

You need a free API key from [developer.trade.gov](https://developer.trade.gov). Subscribe to "Data Services Platform APIs" and copy your Primary or Secondary key from your Profile. Provide the key when your agent asks, or set `TRADE_GOV_API_KEY` in your environment.

## How to use

Ask your agent to search the CSL, e.g. "Search the CSL for [name]", "Screen this entity against the consolidated screening list", or "Fuzzy search the CSL for [name]". The skill will use your API key and the Trade.gov API to return matches and cite which list(s) each result comes from.

See **SKILL.md** and **skill.yaml** in this folder for full instructions.

## License

See ExChek, Inc. terms.
