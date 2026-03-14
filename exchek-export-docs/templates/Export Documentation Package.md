# Export Documentation Package

*This template is for BIS and Census audit readiness. Fill every `{{PLACEHOLDER}}` with shipment, classification, screening, and license data. Use "Not provided" or "None" when no data exists. Output is designed for conversion to .docx or .pages from the skill. This package prepares export documentation and AES/EEI data only; it does not perform actual AES filing. For full guidance, see [references/export-docs-best-practices.md](references/export-docs-best-practices.md) and [references/aes-eei-requirements.md](references/aes-eei-requirements.md).*

---

## Document header

| Field | Value |
|-------|--------|
| **Document type** | Export Documentation Package |
| **Transaction / Order no.** | {{TRANSACTION_ID_OR_ORDER}} |
| **Date prepared** | {{DATE}} |
| **Prepared by** | {{PREPARED_BY}} |
| **Classification memo ref** | {{CLASSIFICATION_MEMO_REF}} |
| **DPS / screening record ref** | {{DPS_RECORD_REF}} |
| **License determination ref** | {{LICENSE_MEMO_REF}} |

---

## Section 1 — AES/EEI filing determination

**AES filing required?** [ ] Yes / [ ] No

**Reasoning (cite 15 CFR 758.1, Census FTR 30.7 as applicable):**

{{AES_DETERMINATION_REASONING}}

**Citations:** {{AES_CITATIONS}}

---

## Section 2 — Commercial invoice export block

*Insert the following block on the commercial invoice.*

**ECCN(s):** {{ECCN}}

**Country of origin:** {{COUNTRY_OF_ORIGIN}}

**Authorization:** {{LICENSE_OR_EXCEPTION_OR_NLR}}

**Destination Control Statement (15 CFR 758.6):**

{{DCS_FULL_TEXT}}

**Additional certifications or statements:** {{INVOICE_ADDITIONAL_STATEMENTS}}

---

## Section 3 — Packing list annotations

*Controlled items and export control information for the packing list.*

| Line / Item | Description | ECCN | Quantity | Notes |
|-------------|-------------|------|----------|-------|
| {{PACKING_LINE_ITEMS}} |

**DCS (abbreviated for packing list):** These items are controlled by the U.S. Government and authorized for export only to the country of ultimate destination for use by the ultimate consignee or end-user(s) identified. No resale, transfer, or disposal without U.S. Government approval.

**Reference:** See commercial invoice and SLI for full export details.

---

## Section 4 — Shipper's Letter of Instruction (SLI) draft

| Field | Value |
|-------|--------|
| **Exporter / USPPI name and address** | {{EXPORTER_NAME_ADDRESS}} |
| **Ultimate consignee name and address** | {{ULTIMATE_CONSIGNEE_NAME_ADDRESS}} |
| **Intermediate consignee(s)** | {{INTERMEDIATE_CONSIGNEES}} |
| **Country of ultimate destination** | {{DESTINATION_COUNTRY}} |
| **Item description** | {{ITEM_DESCRIPTION}} |
| **ECCN** | {{ECCN}} |
| **Schedule B / HTS** | {{SCHEDULE_B_OR_HTS}} |
| **Quantity** | {{QUANTITY}} |
| **Shipment value (USD)** | {{SHIPMENT_VALUE_USD}} |
| **License / exception / NLR** | {{LICENSE_OR_EXCEPTION_OR_NLR}} |
| **AES filing required?** | {{AES_REQUIRED_YES_NO}} |
| **ITN (if filed)** | {{ITN_IF_APPLICABLE}} |
| **Transport mode** | {{TRANSPORT_MODE}} |
| **Additional instructions** | {{SLI_ADDITIONAL_INSTRUCTIONS}} |

---

## Section 5 — AES/EEI data elements (prepared for filing)

*These elements are prepared for manual or system AES/EEI filing. This skill does not perform the actual filing.*

| Data element | Value | Source / notes |
|--------------|-------|----------------|
| **USPPI / Exporter EIN** | {{EXPORTER_EIN}} | {{EXPORTER_EIN_NOTES}} |
| **Exporter name and address** | {{EXPORTER_NAME_ADDRESS}} | |
| **Ultimate consignee** | {{ULTIMATE_CONSIGNEE_NAME_ADDRESS}} | |
| **Country of destination** | {{DESTINATION_COUNTRY}} | ISO 2-letter |
| **Schedule B (or HTS)** | {{SCHEDULE_B_OR_HTS}} | |
| **ECCN** | {{ECCN}} | |
| **Quantity** | {{QUANTITY}} | {{QUANTITY_UNITS}} |
| **Value (USD)** | {{SHIPMENT_VALUE_USD}} | |
| **License / exception code** | {{LICENSE_OR_EXCEPTION_CODE}} | NLR, LVS, GBS, etc. |
| **License number (if applicable)** | {{LICENSE_NUMBER}} | |
| **Transport mode** | {{TRANSPORT_MODE}} | |
| **Other elements as required** | {{OTHER_AES_ELEMENTS}} | |

---

## Section 6 — AI tool disclosure *(if AI tools were used)*

| Field | Details |
|-------|---------|
| **Tool name and version** | {{AI_TOOL_NAME_VERSION}} |
| **Scope of AI use** | {{AI_SCOPE_OF_USE}} |
| **Human review** | [ ] Confirmed / [ ] Modified — basis: ___ / [ ] Rejected — basis: ___ |
| **Responsible reviewer** | {{AI_RESPONSIBLE_REVIEWER}} |

---

*End of Export Documentation Package. Retain for audit. Actual AES/EEI filing must be performed by the exporter or designated filer.*
