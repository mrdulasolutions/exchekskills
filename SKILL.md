---
name: exchek-classify
description: Classify export items for ECCN (BIS/ITAR) using the ExChek API with Adjudicator-in-the-Loop. Use when the user wants to classify an item, determine ECCN, check BIS or ITAR jurisdiction, or get an audit-ready export classification. Requires funding the wallet with USDC on Base before paid calls.
compatibility: Claude Code, Claude desktop
---

# ExChek ECCN Classification

Classify items for U.S. export control (15 CFR Part 774, 22 CFR Part 121) via the ExChek API. The flow is Adjudicator-in-the-Loop (AITL): the agent calls the API and relays prompts to the user for confirmation or refinement until the classification is approved.

## Prerequisites

1. **Authenticate wallet** — Ensure the user's wallet is initialized and signed in (e.g. `npx awal@2.0.3 status`). If not, use the authenticate-wallet skill.
2. **Fund with USDC** — The wallet must have USDC on Base for paid endpoints. First classification is free via `POST /api/classify/start-free` with `walletAddress`. For subsequent classifications, fund via Base, Coinbase, or Pay Sponge; see the fund skill if needed.

## Classification prompts (agent-driven flow)

When you perform the classification yourself, use the prompts in this skill:

- **System prompt**: [prompts/classification-system.md](prompts/classification-system.md) — expert export control instructions (USML 22 CFR Part 121, CCL 15 CFR Part 774, Order of Review, ITAR/EAR).
- **User template**: [prompts/classification-user-template.md](prompts/classification-user-template.md) — item variables to collect: Item description, Technical specifications, Performance parameters, Valuation, Units, HTS Code, Schedule B number, End user, End use, Destination country.

Fill the template from the user, run the classification using the system prompt, then submit your result to the API via `submit-classification` so the adjudicator can review and approve.

## Flow (AITL)

1. **Start** — Try first-free: `POST https://api.exchek.us/api/classify/start-free` with body `{"walletAddress": "<0x...>"}`. If response is 402, the first free was already used; then pay for start: `npx awal@2.0.3 x402 pay https://api.exchek.us/api/classify/start -X POST -d '{}'`.
2. **Collect item info** — Ask the user for: item description, technical specifications, performance parameters (optional), valuation, units, HTS Code, Schedule B number (optional), end user, end use, destination country, and intended use or notes. Send to `POST https://api.exchek.us/api/classify/submit-info` with body `{"jobId": "<from start>", "description": "...", "specifications": "...", "intendedUse": "...", "notes": "...", "performanceParameters": "...", "valuation": "...", "units": "...", "htsCode": "...", "scheduleBNumber": "...", "endUser": "...", "endUse": "...", "destinationCountry": "..."}`. No payment. Relay the API's jurisdiction result and prompt to the user.
3. **Get proposed classification** (choose one):
   - **API-driven**: Send `POST https://api.exchek.us/api/classify/confirm-jurisdiction` with `{"jobId": "<id>", "confirmed": true}` (or `"feedback": "..."` until confirmed). Then `POST https://api.exchek.us/api/classify/request-oor` — API returns proposed ECCN and rationale.
   - **Agent-driven**: Run classification using [prompts/classification-system.md](prompts/classification-system.md) and the user template. Then `POST https://api.exchek.us/api/classify/submit-classification` with `{"jobId": "<id>", "proposedClassification": {"regulatoryAgency": "BIS"|"DDTC", "eccnOrClassification": "...", "justification": "...", "exportRestrictions": [], "licenseRequirements": [], "restrictionsJustifications": "...", "auditLog": "..."}}`. Then `POST https://api.exchek.us/api/classify/request-oor` — API returns your proposal for the user to review.
4. **Refine or approve** — Relay the proposed ECCN and rationale to the user. If they want changes: `POST https://api.exchek.us/api/classify/refine-oor` with `{"jobId": "<id>", "feedback": "..."}` (or for agent-driven, re-run classification and submit-classification again). Repeat until the user approves.
5. **Approve** — Call `POST https://api.exchek.us/api/classify/approve` with `{"jobId": "<id>"}`. Return the `reportUrl` (when Supabase is configured) or success message to the user.

## Input validation

- **jobId** — Use the exact string returned from start or start-free. Do not pass unvalidated user input.
- **walletAddress** — Must be a valid 0x-prefixed 40-char hex string. Reject otherwise.
- **URLs** — Use `https://api.exchek.us` only; no user-supplied URLs for API calls.

## Example (paid start)

```bash
npx awal@2.0.3 x402 pay https://api.exchek.us/api/classify/start -X POST -d '{}'
```

Response includes `jobId`, `nextStep`, `promptForUser`. Use the same `jobId` in all subsequent session requests.

## Reference

- API and flow details: [references/reference.md](references/reference.md)
- Docs: https://docs.exchek.us
