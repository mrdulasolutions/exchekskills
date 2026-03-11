# User prompt template (fill variables from the user)

Use this template to build the user message for classification. Collect each variable from the user (or use empty string if not provided).

---

<item_description>
Item description: {{Item_description}}
Technical specifications: {{Technical_specifications}}
Performance parameters: {{Performance_parameters}}
Valuation: {{Valuation}}
Unit of measure: {{Units}}
HTS Code: {{HTS_Code}}
Schedule B number: {{Schedule_B}}
End user: {{End_User}}
End use: {{End_Use}}
Destination country: {{destination_Country}}
</item_description>

Classify this item's ECCN using the steps in the system prompt. First determine who has jurisdiction (BIS or DDTC). If DDTC, follow the ITAR section; if BIS, follow the EAR section. Then provide your analysis in the required format (Agency, ECCN/Classification, Justification, Export Restrictions, License Requirements, Restrictions Justifications, Audit Log).
