# Risk Scoring Guidance for Export Transaction Triage

This reference defines how to assign **Low**, **Medium**, or **High** risk and map to disposition (auto-approve / hold for export compliance / escalate to legal). Align with BIS "Know Your Customer" red flags (Supplement No. 3 to 15 C.F.R. Part 732) and denied party screening best practices.

---

## 1. Factors that increase risk

### Screening

- Any CSL or list hit, especially **unadjudicated** or **potential true match**
- Hit on **SDN**, **Entity List**, **MEU List**, or **DPL** (any match = high risk until adjudicated)
- **Fuzzy match** with high score (e.g. >85%) not yet resolved
- **Multiple lists** with hits for the same party
- **Inconclusive** adjudication (cannot confirm false positive)
- **Ownership / affiliates**: known or suspected ownership by Entity List, MEU, or SDN entity (BIS Red Flag 29)

### Classification

- **Controlled ECCN** (not EAR99), especially 600 series, 9x515, or encryption (5A992, 5D992, etc.)
- **ITAR** (USML) jurisdiction
- **Uncertainty** in classification (e.g. "specially designed" catch/release, multiple possible ECCNs)
- Item controlled for **AT, NP, CB, MT** (anti-terrorism, nuclear, chemical/biological, missile tech) reasons

### Destination

- **Embargoed or comprehensively sanctioned** country (e.g. OFAC comprehensive sanctions)
- **High-risk jurisdiction** per BIS/OFAC (e.g. Entity List–heavy or MEU-heavy countries)
- **Diversion concern** (e.g. transshipment hub, known re-export risk)

### End use / End user

- **Military**, **government**, **nuclear**, **WMD**, or **sanctioned** end user or end use
- **Vague or refused** end-use statement
- **Red flags** from BIS Know Your Customer (Supp. 3 to Part 732): unfamiliar with product use, unwilling to provide end-use/end-user, unusual payment, destination differs from buyer country, delivery inconsistent with practice, removal of documentation requested, no business history, refusal to provide ownership/KYC docs, minority ownership by listed entity

### License / Authorization

- **License required** but not yet obtained or pending
- **Exception inapplicable** or borderline (e.g. LVS/GBS/TMP not clearly met)
- **NLR** with controlled item to sensitive destination (e.g. Country Group D:1, D:3, D:4, D:5)

---

## 2. Risk bands (Low / Medium / High)

### Low

- **Classification:** EAR99 or low-control ECCN; BIS jurisdiction; no classification uncertainty
- **Screening:** No hits, or **adjudicated false positives only** (documented)
- **Destination:** Low-risk; no embargo or comprehensive sanctions
- **End use / End user:** Benign, clearly stated, no red flags
- **License:** NLR or clear, applicable license exception (e.g. GBS, LVS where criteria met)

**Disposition:** **Auto-approve** (proceed per standard process).

### Medium

- **Classification:** Controlled ECCN or license exception applies; or some sensitivity (e.g. encryption, 3x991) but not 600 series / 9x515 / ITAR
- **Screening:** No hits, or only adjudicated false positives; **or** one or more **unresolved** hits (inconclusive, pending review, not yet adjudicated)
- **Destination:** Some sensitivity (e.g. Country Group D but not embargoed); or transit through higher-risk jurisdiction
- **End use / End user:** Some sensitivity (e.g. government but not military); or one or more red flags that are mitigated or under review
- **License:** Exception applies but borderline; or NLR with controlled item to non-embargoed but sensitive destination

**Disposition:** **Hold for export compliance** — pause until Export Compliance Officer (ECO) or compliance review. Do not auto-approve.

### High

- **Classification:** ITAR; or 600 series / 9x515 / highly controlled ECCN to sensitive destination; or significant classification uncertainty
- **Screening:** **True match** (confirmed hit on any list); **potential true match** (unadjudicated); hit on **SDN, Entity List, MEU, DPL**; or **red flags** (e.g. ownership by listed entity, refusal to provide KYC)
- **Destination:** Embargoed or comprehensively sanctioned country; or export to Entity List / MEU / SDN party
- **End use / End user:** Military, WMD, nuclear, or sanctioned use; or multiple / serious red flags (refused end-use, refused ownership docs, etc.)
- **License:** License **required** but not obtained; or exception does not apply and license not in place

**Disposition:** **Escalate to legal** — do not proceed. Legal/compliance counsel must decide. If true match confirmed, **halt the transaction** and follow escalation and (if applicable) VSD guidance per your program.

---

## 3. Mapping risk band to disposition

| Risk band | Default disposition |
|-----------|----------------------|
| Low      | Auto-approve         |
| Medium   | Hold for export compliance |
| High     | Escalate to legal    |

**Override rule:** Any **true match** or **potential true match** on SDN, Entity List, MEU, or DPL → disposition is **Escalate to legal** regardless of other factors. Document in escalation note and do not proceed without legal/compliance sign-off.

---

## 4. Citations

- BIS "Know Your Customer" Guidance: Supplement No. 3 to 15 C.F.R. Part 732
- Denied party screening and red-flag assessment: see exchek-skill-csl references/denied-party-screening-best-practices.md (Part III Hit Resolution, Section 5 Red Flag Assessment)
- BIS Red Flag 29 (ownership by Entity List/MEU/SDN): affirmative duty to determine ownership percentage
