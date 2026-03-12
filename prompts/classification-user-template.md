# User prompt template (fill variables from the user)

Use this template to build the user message for classification. Collect each variable from the user (or use empty string if not provided). If a source document is provided (file path or pasted text), use it to fill the following variables where possible.

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
Classification notes (optional): {{Classification_notes}}
</item_description>

**Search/review text:** When applying Order of Review and matching against Part 774/121, build the search text from: item description, technical specifications, intended use, notes, classification notes, performance parameters, end user, end use, destination country (same fields as above). Use this combined text for civilian/non-military signal detection and for identifying relevant ECCN/USML sections.

Classify this item's ECCN using the steps in the system prompt. First determine who has jurisdiction (BIS or DDTC). If DDTC, follow the ITAR section; if BIS, follow the EAR section. Then provide your analysis in the required format (Agency, ECCN/Classification, Justification, Export Restrictions, License Requirements, Restrictions Justifications, Audit Log).
