# ExChek classification report template

Fill every placeholder with the collected or derived information. This template is structured for DDTC, DOJ, and BIS audit readiness. Omit only when no data exists (use "Not provided" or "None specified"). Output the completed report and save per skill instructions (CoWork: user folder; Claude web: full report in chat + user saves manually).

---

EXCHEK EXPORT CONTROL CLASSIFICATION MEMORANDUM
==============================================
DDTC / DOJ / BIS Audit-Ready | Adjudicator-in-the-Loop (AITL) Document

Document type: Export classification determination memorandum
Date of determination: {{DATE}}
Retention: Retain per 15 CFR Part 762 (BIS) and applicable DDTC/DOJ recordkeeping requirements. This memorandum supports export control compliance and may be requested in an audit.

================================================================================
1. ITEM INFORMATION
================================================================================

Description: {{ITEM_DESCRIPTION}}
Technical specifications: {{TECHNICAL_SPECIFICATIONS}}
Performance parameters: {{PERFORMANCE_PARAMETERS}}
Valuation: {{VALUATION}}
Unit of measure: {{UNITS}}
HTS Code: {{HTS_CODE}}
Schedule B number: {{SCHEDULE_B_NUMBER}}
End user: {{END_USER}}
End use: {{END_USE}}
Destination country: {{DESTINATION_COUNTRY}}
Intended use: {{INTENDED_USE}}
Notes: {{NOTES}}

================================================================================
2. JURISDICTION DETERMINATION
================================================================================

Determination: {{JURISDICTION}}
Regulatory agency: {{REGULATORY_AGENCY}}
Rationale: {{JURISDICTION_RATIONALE}}

================================================================================
3. CLASSIFICATION (ORDER OF REVIEW)
================================================================================

ECCN / USML or other classification: {{ECCN}}
Order of Review summary: {{OOR_SUMMARY}}
(e.g., Supplement No. 4 to Part 774 Steps 1–6 applied; jurisdiction confirmed; Step X determined classification.)

Technical analysis and justification: {{JUSTIFICATION}}

================================================================================
4. EXPORT RESTRICTIONS
================================================================================

{{EXPORT_RESTRICTIONS}}

================================================================================
5. LICENSE REQUIREMENTS AND EXCEPTIONS
================================================================================

{{LICENSE_REQUIREMENTS}}

================================================================================
6. REGULATORY CITATIONS
================================================================================
Include citations to specific ECCN and paragraph (e.g., 1A995.a). When "specially designed" was applied, cite 15 CFR 772.1. Optionally list "considered and rejected" (e.g., USML, 9x515/600 series) with a one-line reason for each.

{{CITATIONS}}

================================================================================
7. ADJUDICATOR-IN-THE-LOOP (AITL) AND AI ACTIVITIES AUDIT
================================================================================
This section documents how AI was used and how the human adjudicator validated the determination, for DDTC/DOJ/BIS audit trail purposes.

7.1 AI-assisted activities (what the AI performed)
-------------------------------------------------
- Regulatory data retrieval: {{AI_DATA_SOURCES}} (e.g., ExChek API GET /api/ecfr/774, /api/ecfr/121; or eCFR.gov structure/current/title-15.json, title-22.json).
- Order of Review application: AI applied CCL (15 CFR Part 774) and USML (22 CFR Part 121) review logic to item information.
- Draft classification: AI proposed jurisdiction (BIS/ITAR) and ECCN/classification with rationale.
- Report generation: AI produced this memorandum from the ExChek skill template using the approved determination.

7.2 Human adjudication (what the adjudicator reviewed and validated)
-------------------------------------------------------------------
- Jurisdiction confirmation: Adjudicator reviewed and {{JURISDICTION_CONFIRMATION}} (e.g., confirmed BIS jurisdiction on [date/context]).
- Classification review: Adjudicator reviewed proposed ECCN/classification and {{ECCN_APPROVAL}} (e.g., approved ECCN X on [date/context]).
- Refinements (if any): {{REFINEMENTS_NOTES}} (e.g., none; or summary of feedback and re-analysis).
- Final approval: Adjudicator explicitly approved this classification before report generation.

7.3 Data and tool sources
-------------------------
- Regulatory text: {{REGULATORY_SOURCES}} (e.g., ExChek snapshot API and/or eCFR.gov versioner API; date of access or snapshot).
- Classification methodology: ExChek skill prompts (Order of Review, 15 CFR Part 774, 22 CFR Part 121).
- No automated submission to BIS/DDTC; this is an internal determination memorandum.

7.4 Sequence of steps (audit trail)
-----------------------------------
{{AITL_SEQUENCE}}
Example: (1) Item information collected; (2) Regulatory data retrieved; (3) AI proposed jurisdiction; (4) Adjudicator confirmed jurisdiction; (5) AI proposed ECCN; (6) Adjudicator approved ECCN; (7) Report generated and saved.

================================================================================
8. COMPLIANCE AUDIT LOG / RECORD SUMMARY
================================================================================

{{AUDIT_LOG}}

This memorandum constitutes a record of the classification determination and the use of AI with human oversight. Retain with other export control records per your internal compliance program and 15 CFR Part 762 (and any applicable DDTC/DOJ requirements).

================================================================================
9. RECORD RETENTION AND REFERENCES
================================================================================

- BIS (15 CFR Part 762): Retain records as required by 15 CFR 762.2 and 762.6 (e.g., memoranda, notes, and correspondence pertaining to export transactions). Typical retention: at least five years from export, license expiration, or last shipment, whichever is latest.
- DDTC/ITAR: Retain supporting documentation consistent with ITAR and DDTC guidance for license applications and commodity jurisdiction determinations.
- This document: Internal classification memorandum; not a substitute for a formal BIS classification request or DDTC commodity jurisdiction when required.

--- End of Report ---

Note: For a comprehensive and legally binding determination, consider filing a classification request with the Bureau of Industry and Security (BIS) or a commodity jurisdiction request with DDTC. ExChek can assist with process guidance; consult qualified counsel for legal advice.
