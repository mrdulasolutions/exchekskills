# Escalation Best Practices for Risk Triage

When to **hold** vs **escalate**, escalation chain expectations, and how to document the escalation note for audit. Aligns with DPS best practices (hit resolution, Section 4.5.C Escalation, Section 5 Red Flag Assessment).

---

## 1. Hold for export compliance vs Escalate to legal

### Hold for export compliance

**Meaning:** Pause the transaction until an **Export Compliance Officer (ECO)** or designated compliance reviewer completes review. No shipment, no commitment, no release of controlled technology until cleared.

**Use when:**

- Risk is **Medium** (e.g. inconclusive screening hit, ambiguous license exception, sensitive destination or end use)
- No true match and no SDN/Entity List/MEU/DPL hit, but adjudication is pending or inconclusive
- One or more red flags that require documented review before proceeding
- Controlled item or exception to a jurisdiction that needs an ECO sign-off per company policy

**Documentation:** Fill the escalation note with transaction summary, risk score, disposition, rationale, and **Escalation note** section: "Held for export compliance review. Escalated to: [Name, Title]. Date: [YYYY-MM-DD]. Follow-up: [e.g. secondary identifier verification, ownership trace, ECO approval]."

### Escalate to legal

**Meaning:** Do **not** proceed. **Legal or export compliance counsel** must make the determination. Transaction is halted until counsel advises.

**Use when:**

- Risk is **High**
- **True match** or **potential true match** on any list (especially SDN, Entity List, MEU, DPL)
- Red flags that cannot be resolved by ECO alone (e.g. refused KYC, ownership by listed entity, suspected diversion)
- License required but not obtained; or export to embargoed/sanctioned destination
- Any situation where voluntary self-disclosure (VSD) to BIS or OFAC might be relevant

**Documentation:** Escalation note must state: "Escalated to legal/compliance counsel. Do not proceed. Escalated to: [Name/Firm]. Date: [YYYY-MM-DD]. Transaction status: On hold pending legal review."

---

## 2. Escalation chain

Best practice (per DPS program governance):

1. **Screening analyst / triage** — Performs screening and triage; documents risk and disposition; escalates to ECO when hold or escalate.
2. **Export Compliance Officer (ECO)** — Reviews holds; resolves medium-risk cases where policy allows; escalates to legal when required.
3. **Legal / export compliance counsel** — Final authority on true matches, potential true matches, red-flag resolution, license strategy, and VSD decisions.

The triage skill does **not** define your escalation chain; it produces a **templated note** with placeholders for "Escalated to" (name/role) and date so your program’s chain is documented.

---

## 3. What to include in the escalation note (template sections)

When disposition is **Hold** or **Escalate**, the note must include:

- **Transaction summary** — Destination, ECCN, end user/end use, screening outcome (no hits / hits with list names and adjudication status), license/exception if known.
- **Risk score and rationale** — Low/Medium/High and the main factors (screening, classification, destination, end use, license).
- **Disposition and rationale** — Auto-approve / Hold for export compliance / Escalate to legal, with one or two sentences explaining why.
- **Red flag assessment** — If any red flags are present (from BIS Part 732 Supp. 3 or DPS Section 5), list them and note "Escalated" or "Under review".
- **Escalation block** — Escalated to (name, title/firm), date, follow-up actions, transaction status (e.g. "On hold for ECO review" / "On hold pending legal review").

This structure supports audit and handoff to ECO or legal.

---

## 4. Red flags to assess (checklist for template)

When completing the Red Flag Assessment section, consider (from BIS Know Your Customer and DPS best practices):

| Red flag | Notes |
|----------|--------|
| Counterparty unfamiliar with product’s normal use / end-use inconsistent with product | |
| Unwilling to provide end-use or end-user identity | |
| Unusual payment (cash, third-party, overpayment) | |
| Destination differs from buyer country/billing without explanation | |
| Delivery instructions inconsistent with normal practice | |
| Requests removal of technical documentation | |
| No established business history or web presence | |
| Country subject to comprehensive embargo or heightened controls | |
| Item controlled for AT, NP, CB, or MT reasons | |
| Refused to provide ownership or identification (KYC) | Refusal is itself a red flag; escalate |
| Known or suspected ownership by Entity List / MEU / SDN (BIS Red Flag 29) | Affirmative duty to determine ownership % |
| Other (specify) | |

**Total red flags identified** and **disposition** (e.g. "Escalated to ECO on [date]" / "No red flags" / "Enhanced due diligence — describe") must be documented.

---

## 5. References

- exchek-skill-csl **denied-party-screening-best-practices.md**: Section 4.5.C (Escalation Inconclusive), Section 5 (Red Flag Assessment), Section 7 (Final Disposition CLEAR/HOLD).
- BIS "Know Your Customer" Guidance: Supplement No. 3 to 15 C.F.R. Part 732.
- Voluntary Self-Disclosure: 15 C.F.R. § 764.5 (BIS); OFAC guidance for sanctions violations.
