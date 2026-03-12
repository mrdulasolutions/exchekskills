# CRM push — Write classification back to HubSpot, Salesforce, or another CRM

Use this reference when the user wants to push the approved classification (ECCN, jurisdiction, determination date) to a CRM after the report is built. Always ask for explicit confirmation before writing. ExChek does not store or require CRM credentials.

## How it works when the user has HubSpot installed

- **Confirm:** Object (product, deal, company), record ID, and custom property names (or use defaults).
- **Custom properties (create in HubSpot if needed):** e.g. `eccn` (text), `export_jurisdiction` (text, e.g. BIS or DDTC), `classification_date` (date), optionally `classification_report_url` (text).
- **Request:** `PATCH https://api.hubapi.com/crm/v3/objects/products/{id}` (or deals/companies) with body `{ "properties": { "eccn": "1A995", "export_jurisdiction": "BIS", "classification_date": "2025-03-11" } }`. Use private app token (user-provided, not stored in skill). Send `Authorization: Bearer {token}`.
- If the user has a HubSpot skill/connector that can PATCH, the agent uses that instead of raw HTTP.

## How it works when the user has Salesforce installed

- **Confirm:** Object (Product2, Opportunity, Account), record Id, and custom field names (e.g. ECCN__c, Export_Jurisdiction__c, Classification_Date__c).
- **Request:** `PATCH https://{instance}.salesforce.com/services/data/v59.0/sobjects/Product2/{id}` with body `{ "ECCN__c": "1A995", "Export_Jurisdiction__c": "BIS", "Classification_Date__c": "2025-03-11" }`. User provides credentials per session (e.g. Bearer token in Authorization header).
- If the user has a Salesforce connector/skill, use it to update the record after confirmation.

## How it works when the user has another CRM connector

- **Confirm:** System, object, record ID, and field names for ECCN, jurisdiction, and date.
- If the agent has a tool/connector that can update the CRM, use it after explicit user confirmation.
- If not, provide the user with the exact values (ECCN, jurisdiction, date) and instruct them to update the record in their CRM manually or via their connector.

## Security

No API keys in the skill; user provides credentials per session or via env/tools. Always require explicit user confirmation before any write.
