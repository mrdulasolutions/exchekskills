# AES/EEI requirements and exemptions

When is AES (Automated Export System) / EEI (Electronic Export Information) filing required, and when is it exempt? This reference supports the export-docs skill’s AES determination step. The skill does **not** perform actual filing; it prepares data and documents the reasoning.

## Regulatory basis

- **EAR:** 15 CFR Part 758 (Export Clearance Requirements). § 758.1 describes when export information must be filed and when exemptions apply.
- **Census:** Foreign Trade Regulations (FTR), 15 CFR Part 30. § 30.7 sets filing requirements and value thresholds for EEI.

For current thresholds and exemption details, consult the eCFR and Census Bureau guidance (e.g. [Census FTR](https://www.ecfr.gov/current/title-15/subtitle-B/chapter-I/subchapter-A/part-30)).

## When AES/EEI is generally required

- **Value threshold:** For most destinations, EEI is required when the value of the shipment (per Schedule B line or per exemption category) exceeds **$2,500** (USD) for the same item to the same consignee on the same day. Different thresholds apply for certain countries and types of shipments.
- **Controlled items:** Shipments requiring a license (BIS or State) generally require AES filing regardless of value.
- **Destination:** Some countries have lower thresholds or no exemption; comprehensive embargo destinations require filing when exports are permitted at all.

Apply 15 CFR 758.1 and FTR 30.7 together: if either EAR or Census requires filing, the exporter must file.

## Common exemptions (summary)

- **Canada:** Many shipments to Canada are exempt from EEI filing under FTR 30.36 (see current 30.7 and 30.36 for exact conditions).
- **Same shipment value below threshold:** For non-controlled items to many destinations, shipments at or below the stated value threshold may be exempt (see 30.7(a) and related sections).
- **License exception and value:** Even when a license exception applies under the EAR, Census value rules still apply; document both.

Always confirm current rules; thresholds and country-specific exemptions can change.

## Output for the skill

The AES determination section of the Export Documentation Package must state:

1. **AES required: Yes or No**
2. **Reasoning:** Bullet or short paragraph citing (a) value and destination, (b) whether item is controlled and license/exception applies, (c) applicable exemption if “No” (e.g. “Shipment value below $2,500; item EAR99; destination Germany; no license required; FTR 30.7(a) exemption applies.”).
3. **Citations:** e.g. “15 CFR 758.1; 15 CFR Part 30 § 30.7(a).”

## Key AES/EEI data elements (for Section 5 of the template)

Typical elements prepared for filing (exact fields depend on Census/ACE and mode of filing):

- USPPI (exporter) EIN, name, address
- Ultimate consignee name and address
- Country of ultimate destination
- Schedule B (or HTS) number
- ECCN
- Quantity and units
- Value (USD)
- License or license exception code; license number if applicable
- Transport mode
- ITN (Internal Transaction Number) — assigned upon filing, so often left blank in prep; user fills after filing

The skill fills what it can from shipment and classification; leave ITN and any post-filing fields for the user.
