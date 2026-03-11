# ExChek API reference (Claude skill)

- **Base URL**: `https://api.exchek.us`
- **Paid endpoints**: x402 (USDC on Base). Use `npx awal@2.0.3 x402 pay <url> -X POST -d '<json>'` for paid calls.
- **Session endpoints**: Require `jobId` in body; no payment after start.

## Endpoints

| Endpoint | Payment | Body | Returns |
|----------|---------|------|--------|
| POST /api/classify/start-free | None | `{ "walletAddress": "0x..." }` | jobId, promptForUser (or 402 if free used) |
| POST /api/classify/start | x402 $10 | `{}` | jobId, nextStep, promptForUser |
| POST /api/classify/jurisdiction | x402 $2 | item fields (see below) | jurisdiction, regulatoryAgency, justification, citations, exportRestrictions, licenseRequirements, auditLog |
| POST /api/classify/submit-info | None | jobId + item fields (see below) | jurisdiction, justification, citations, promptForUser |
| POST /api/classify/submit-classification | None | jobId, proposedClassification (see below) | nextStep, promptForUser |
| POST /api/classify/confirm-jurisdiction | None | jobId, confirmed or feedback | nextStep, promptForUser |
| POST /api/classify/request-oor | None | jobId | eccn, rationale, justification, regulatoryAgency, citations, exportRestrictions, licenseRequirements, auditLog, promptForUser |
| POST /api/classify/refine-oor | None | jobId, feedback | eccn, rationale, justification, promptForUser |
| POST /api/classify/approve | None | jobId | reportUrl, message, eccn, jurisdiction |

## Item fields (submit-info, jurisdiction)

- **description** (Item description)
- **specifications** (Technical specifications)
- **intendedUse**, **notes**
- **performanceParameters** (Performance parameters)
- **valuation**, **units**
- **htsCode** (HTS Code), **scheduleBNumber** (Schedule B number)
- **endUser**, **endUse**, **destinationCountry**

All optional; send what the user provides.

## proposedClassification (submit-classification)

Agent-driven flow: send the result of your classification for adjudicator review.

- **regulatoryAgency**: `"BIS"` or `"DDTC"`
- **eccnOrClassification**: ECCN (e.g. 3A001), EAR99, or ITAR category
- **justification**: Legally defensible reasoning
- **exportRestrictions**: array of strings
- **licenseRequirements**: array of strings
- **restrictionsJustifications**: string
- **auditLog**: summary of steps for legal review

After submit-classification, call request-oor to retrieve this proposal for the user; then approve or refine-oor.

Full docs: https://docs.exchek.us
