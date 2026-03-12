# CUI and Classified Information

When the user or their organization handles **Controlled Unclassified Information (CUI)** or **classified information**, the ExChek skill must be used in a way that complies with their security requirements.

## Quick brief (for Don't know)

Use this when the user selects "Don't know" in the CUI/Classified check (step 0). **CUI (Controlled Unclassified Information)** and **classified information** are categories of sensitive data that may have handling and distribution restrictions. Using cloud AI (e.g. Claude, ChatGPT, or APIs like ExChek in the cloud) can send that data outside the user's control and may violate their organization's security or export rules. If they might be working with CUI/classified, they should check with their security or compliance team before using ExChek in a cloud or online environment; otherwise they can use ExChek on-prem with a local LLM. Full guidance is below and at https://docs.exchek.us/docs/cui-classified.

## Do not use cloud or API LLMs for CUI/classified data

**Do not use cloud-hosted services or API-based LLM models to process CUI or classified information.** Sending item descriptions, technical specifications, or other CUI/classified content to third-party cloud APIs (e.g., commercial Claude, ChatGPT, or other cloud LLM endpoints) may violate the user's agency or contractor security requirements and can result in unauthorized disclosure.

If the user indicates they are working with CUI or classified information, or that their environment requires on-premises processing:

1. **Do not** call external APIs (including the ExChek API at api.exchek.us) with item data or context that could contain CUI/classified content.
2. **Tell the user** they must run this skill in an **on-premises (on-prem) environment** with a **local LLM** only. They should download the ExChek skill from the public GitHub repo as a **ZIP** (not clone over the network from an untrusted path), transfer it to their on-prem environment via their organization's approved method, and install it into their on-prem agent's skills directory (e.g. `~/.claude/skills/exchek-classify` or the equivalent for their platform). The agent that runs the skill must use a **local LLM** hosted within their secure boundary—no cloud or external API LLM.
3. **Regulatory data (Part 774 and Part 121)** must also be obtained on-prem. The user should either:
   - Run the ExChek API refresh script on-prem (from the ExChek API codebase): `node scripts/refresh-ecfr-snapshot.js` from the `apps/api` directory. This fetches from eCFR, extracts Part 774 and Part 121, and writes `ecfr-part-774.json` and `ecfr-part-121.json` to a local directory (e.g. `apps/api/.data` or `ECFR_SNAPSHOT_DIR`). No Supabase or cloud required for local-only use.
   - Or, from a system allowed to reach eCFR, fetch `https://www.ecfr.gov/api/versioner/v1/structure/current/title-15.json` and `title-22.json`, transfer the files on-prem, extract the Part 774 subtree from title-15 and the Part 121 subtree from title-22, and save as JSON where the on-prem agent or API can read them.

Full guidance (including curl examples and refresh steps) is in the ExChek docs: **https://docs.exchek.us/docs/cui-classified**.

## Summary for the agent

- **CUI/classified context:** Do not call cloud APIs or use cloud LLMs. Direct the user to use the skill on-prem with a local LLM, install from a downloaded ZIP from the ExChek skill repo, and use 774/121 data obtained on-prem. Point them to the docs for step-by-step instructions.
