# Risk Triage and Escalation Note

*This template documents risk score, disposition, and escalation for export compliance audit and handoff. Fill every `{{PLACEHOLDER}}` with transaction inputs, risk rationale, and escalation details. Use "Not provided" or "None" when no data exists. Output is designed for conversion to .docx or .pages from the skill.*

---

## Document header

**PRIVILEGED AND CONFIDENTIAL — EXPORT COMPLIANCE — RISK TRIAGE AND ESCALATION RECORD.**

| Field | Value |
|-------|--------|
| **Triage record no.** | {{TRIAGE_RECORD_NUMBER}} |
| **Date of triage** | {{DATE_OF_TRIAGE}} |
| **Prepared by** | {{PREPARED_BY}} |
| **Transaction reference** | {{TRANSACTION_REFERENCE}} |
| **Classification memo ref** | {{CLASSIFICATION_MEMO_REF}} |
| **DPS / screening record ref** | {{DPS_RECORD_REF}} |

---

## Section 1 — Transaction summary

| Field | Details |
|-------|---------|
| **Item / product (brief)** | {{ITEM_DESCRIPTION}} |
| **ECCN / jurisdiction** | {{ECCN}} / [ ] EAR99 / [ ] ITAR USML: ___ |
| **Destination country** | {{DESTINATION_COUNTRY}} |
| **Ultimate end user** | {{ULTIMATE_END_USER}} |
| **Ultimate end use** | {{ULTIMATE_END_USE}} |
| **License / exception** | {{LICENSE_OR_EXCEPTION}} |
| **Screening result summary** | {{SCREENING_RESULT_SUMMARY}} |
| **Screening hits (if any)** | {{SCREENING_HITS_DETAIL}} |

---

## Section 2 — Risk score and rationale

**Risk score:** {{RISK_SCORE}} (Low / Medium / High)

**Rationale:**

{{RISK_RATIONALE}}

*Key factors considered: screening outcome, classification sensitivity, destination, end use/end user, license/authorization. See risk-scoring-guidance for factor definitions.*

---

## Section 3 — Disposition and rationale

**Disposition:** {{DISPOSITION}} (Auto-approve / Hold for export compliance / Escalate to legal)

**Rationale:**

{{DISPOSITION_RATIONALE}}

---

## Section 4 — Red flag assessment

*Complete when screening or end-use context warrants. A "Yes" to any red flag typically requires hold or escalate and must be documented.*

| Red flag | Present? | Notes |
|----------|----------|-------|
| End-use inconsistent with product / counterparty unfamiliar with normal use | [ ] Yes / [ ] No | {{RED_FLAG_1_NOTES}} |
| Unwilling to provide end-use or end-user identity | [ ] Yes / [ ] No | {{RED_FLAG_2_NOTES}} |
| Unusual payment or delivery instructions | [ ] Yes / [ ] No | {{RED_FLAG_3_NOTES}} |
| Destination differs from buyer country without explanation | [ ] Yes / [ ] No | {{RED_FLAG_4_NOTES}} |
| No established business history / web presence | [ ] Yes / [ ] No | {{RED_FLAG_5_NOTES}} |
| Country subject to embargo or heightened controls | [ ] Yes / [ ] No | {{RED_FLAG_6_NOTES}} |
| Item controlled for AT, NP, CB, or MT reasons | [ ] Yes / [ ] No | {{RED_FLAG_7_NOTES}} |
| Refused to provide ownership or KYC documentation | [ ] Yes / [ ] No | {{RED_FLAG_8_NOTES}} |
| Known or suspected ownership by Entity List / MEU / SDN (BIS Red Flag 29) | [ ] Yes / [ ] No | {{RED_FLAG_9_NOTES}} |
| Other | [ ] Yes / [ ] No | {{RED_FLAG_OTHER_NOTES}} |

**Total red flags identified:** {{TOTAL_RED_FLAGS}}

**Red flag disposition:** {{RED_FLAG_DISPOSITION}}

---

## Section 5 — Escalation note

*Complete when disposition is Hold for export compliance or Escalate to legal.*

| Field | Details |
|-------|---------|
| **Escalated to (name, title or firm)** | {{ESCALATED_TO_NAME_TITLE}} |
| **Date of escalation** | {{ESCALATION_DATE}} |
| **Follow-up actions** | {{FOLLOW_UP_ACTIONS}} |
| **Transaction status** | {{TRANSACTION_STATUS}} |

**Escalation summary (for handoff):**

{{ESCALATION_SUMMARY}}

*Example: "Held for export compliance review. Inconclusive screening hit on [list]; secondary identifier verification requested. Transaction on hold until ECO review." Or: "Escalated to legal. Potential true match on SDN list. Transaction halted. Do not proceed without legal sign-off."*

---

## Section 6 — AI tool disclosure

| Field | Details |
|-------|---------|
| **Tool name and version** | ExChek Risk Triage (exchek-risk-triage) |
| **Human review** | Triage output is assistive only. Final disposition and compliance decisions are the responsibility of the designated Export Compliance Officer or legal counsel. |
| **AI reliance limitation** | Risk score and disposition recommendation were generated with AI assistance. This record should be reviewed and approved by a qualified human before reliance for compliance decisions. |

---

## Certification and retention

This risk triage and escalation record should be retained per the organization’s export compliance program and, where applicable, 15 C.F.R. § 762.6 (five-year retention). Final approval of disposition rests with the Export Compliance Officer or legal counsel as defined in the organization’s escalation chain.

**Reviewed by:** _______________________  **Date:** ___________

**Approved by (if required):** _______________________  **Date:** ___________
