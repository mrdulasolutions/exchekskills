# Consolidated Screening List (CSL) API reference

This reference describes how to call the Trade.gov Consolidated Screening List API for the ExChek CSL skill. **The official source of truth is the ITA Developer Portal:** [developer.trade.gov – Consolidated Screening List API](https://developer.trade.gov/api-details#api=consolidated-screening-list&operation=search). Use the API details page and “Try it” to confirm the current base URL, path, and parameter names.

## Authentication

- **API key:** Required. Free subscription key from [developer.trade.gov](https://developer.trade.gov) (Sign In → Products → subscribe to Data Services Platform APIs → Profile → Primary or Secondary key). See [references/api-key-setup.md](api-key-setup.md).
- **How to send:** The portal may require the key as a **query parameter** (e.g. `api_key` or `subscription-key`) or as an **HTTP header** (e.g. `Ocp-Apim-Subscription-Key`). Check the API details page for the exact name and location.

## Base URL and endpoint

- **Base URL:** The live API is hosted by the ITA Data Services Platform. Common patterns (verify on the portal):
  - `https://api.trade.gov/...` or
  - A gateway URL shown on the API details / “Try it” page.
- **Search operation:** The API exposes a **search** operation for the Consolidated Screening List. The exact path (e.g. `/consolidated_screening_list/search` or as shown in the portal) and HTTP method (typically **GET**) are on the [API details page](https://developer.trade.gov/api-details#api=consolidated-screening-list&operation=search).

## Query parameters (support all that the API allows)

Document and support **every** query parameter listed for the search operation on the API details page. Commonly supported parameters include:

| Parameter | Description |
|-----------|-------------|
| **name** | Entity name to search. **Fuzzy name search** is supported: results include a match score (e.g. 100 for exact, lower for near matches). Useful for non-Latin names and misspellings. |
| **sources** | Filter by list/source (e.g. which federal list(s) to search). The CSL consolidates multiple lists; the API may accept a comma-separated list or specific source codes. See the “Search Parameters for Consolidated Screening List Sources” doc on the portal. |
| **address** | Address search (if supported by the API). |
| **countries** | Country filter (if supported). |
| **fuzzy_name** / **fuzzy** | If the API exposes an explicit fuzzy flag or option, include it per the docs. |

**Action:** When implementing, open the [API details page](https://developer.trade.gov/api-details#api=consolidated-screening-list&operation=search) and add every parameter shown for the search operation to this table and to the skill’s request-building logic.

## Response

- The API returns JSON. Responses typically include:
  - A **results** (or similar) array of matching entities.
  - Per result: fields such as name, addresses, countries, **source** (which list the entity is on), and when fuzzy search is used a **score** or similar match indicator.
- Use the **source** (and score, if present) to summarize results and cite which list(s) each hit comes from.

## Data and updates

- The CSL consolidates **eleven** export screening lists from the Departments of Commerce, State, and Treasury.
- Data is updated automatically every day at **5:00 AM EST/EDT**.
- For compliance decisions, users must verify against official Federal Register publications and the original lists maintained by the agencies.

## Compliance disclaimer

CSL results are for **screening support only**. They do not replace legal or compliance advice. Users must verify any determination against official Federal Register and agency sources before acting.
