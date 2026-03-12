# CRM pull — Pre-fill classification from HubSpot, Salesforce, or another CRM

Use this reference when the user wants to pull item data from a CRM to pre-fill the ExChek classification template. The agent (or user) calls the CRM; ExChek does not store or require CRM credentials.

## How it works when the user has HubSpot installed

- **Setup:** User has HubSpot skill/connector or Claude has HubSpot API access (e.g. private app token in env). No API keys stored in the skill.
- **Steps:**
  1. Ask for object type (Product, Deal, Company) and record ID.
  2. Fetch: Products `GET https://api.hubapi.com/crm/v3/objects/products/{id}`, Deals `GET https://api.hubapi.com/crm/v3/objects/deals/{id}`, Companies `GET https://api.hubapi.com/crm/v3/objects/companies/{id}` (with `?properties=name,description,...` and any custom property names the user wants).
  3. Map: `name` → item description; `description` or custom property → technical specs; other custom properties → performance/valuation/units as needed. For end user/end use/destination, optionally fetch associated contact/deal and map.
  4. List recommended custom properties for later push: eccn, export_jurisdiction, classification_date.
  5. Fill template; ask user for any missing required fields.

## How it works when the user has Salesforce installed

- **Setup:** User has Salesforce skill/connector or API access (connected app + token). Credentials per session or env.
- **Steps:**
  1. Ask for object (Product2, Opportunity, Account) and record Id.
  2. Fetch via REST: `GET https://{instance}.salesforce.com/services/data/v59.0/sobjects/Product2/{id}` (or SOQL query). Replace `Product2` with Opportunity or Account as needed.
  3. Map: Name, Description, and custom fields to item description/specs.
  4. Fill template; ask for missing fields. Note custom fields for push (e.g. ECCN__c, Export_Jurisdiction__c).

## How it works when the user has another CRM connector

- **Generic pattern:**
  1. Ask which CRM and which object type and record identifier.
  2. If the agent has a tool/connector that can read from that CRM, use it to fetch the record; map fields to ExChek template (description, specs, end user, end use, destination where available).
  3. If the agent cannot call the CRM, ask the user to use their connector to export or paste the record fields, then map manually into the template.
- **Connector:** "Connector" means any Claude-accessible integration that can read CRM records (e.g. HubSpot skill, Salesforce skill, Zapier/Make, custom skill). ExChek does not store or require CRM credentials.

## Security

Never store API keys or tokens in the skill. User provides per session or via environment / Claude tools.
