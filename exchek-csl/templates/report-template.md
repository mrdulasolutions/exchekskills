# ExChek CSL screening report template

Fill every placeholder with the search parameters and API results. This memo is for compliance and audit trail: what was searched, when, and what the CSL API returned. Save per skill instructions (file access: save to user's report folder; no file access: output full report in chat and instruct user to save).

---

EXCHEK CONSOLIDATED SCREENING LIST (CSL) SEARCH MEMORANDUM
============================================================
Screening support only | Trade.gov CSL API | Retain for compliance records

Document type: CSL search / screening memo
Date of search: {{DATE}}
Retention: Retain per your internal compliance program. This memo documents a screening search and is not a substitute for legal or compliance advice. Verify any determination against official Federal Register and agency sources.

================================================================================
1. SEARCH PARAMETERS
================================================================================

Search query (name or terms): {{SEARCH_QUERY}}
Sources filter (if any): {{SOURCES_FILTER}}
Address (if searched): {{ADDRESS}}
Countries (if filtered): {{COUNTRIES}}
Other parameters: {{OTHER_PARAMS}}
API used: Trade.gov Consolidated Screening List API (developer.trade.gov)
API key: User-provided (not stored in skill)

================================================================================
2. SEARCH RESULTS SUMMARY
================================================================================

Total results returned: {{RESULTS_COUNT}}
Summary: {{RESULTS_SUMMARY}}
(e.g., "No matches found" or "N potential match(es); review required.")

================================================================================
3. RESULTS DETAIL
================================================================================
List each result with name, source list(s), match score (if fuzzy), and key fields (addresses, countries as returned by the API). Use "None" if no results.

{{RESULTS_DETAIL}}

Example format per hit:
- Name: [entity name]
  Source(s): [list name(s), e.g. Denied Persons List, Entity List]
  Score: [if fuzzy]
  Address: [if present]
  Country: [if present]
  Notes: [any other relevant fields]

================================================================================
4. AI-ASSISTED SEARCH AND AUDIT TRAIL
================================================================================
This section documents how the search was performed for audit purposes.

4.1 Data source
---------------
- API: Trade.gov Consolidated Screening List API (ITA Data Services Platform).
- Search performed: {{DATE}} (or session timestamp).
- Parameters and results as recorded above.

4.2 Human use
-------------
- User requested CSL search; user provided or had configured API key.
- Results are for screening support only; user is responsible for any compliance decisions and for verifying against official agency sources.

================================================================================
5. RECORD RETENTION AND DISCLAIMER
================================================================================

- Retain this memorandum with other screening and export compliance records per your internal policy.
- CSL data is updated daily (~5:00 AM EST/EDT). This report reflects the API response at the time of the search.
- This document does not constitute legal or compliance advice. For binding determinations, consult official Federal Register publications and the agencies that maintain the source lists (Commerce, State, Treasury).

--- End of Report ---
