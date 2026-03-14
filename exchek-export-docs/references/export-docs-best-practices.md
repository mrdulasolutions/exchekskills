# Export documentation: best practices

Best practices for commercial invoice export blocks, packing lists, SLI, and DCS placement. Supports consistent, audit-ready export documentation prep.

## Destination Control Statement (DCS)

Under 15 CFR 758.6, the following (or equivalent) must appear on export documents for items exported under the EAR (license or license exception):

*"These items are controlled by the U.S. Government and authorized for export only to the country of ultimate destination for use by the ultimate consignee or end-user(s) herein identified. They may not be resold, transferred, or otherwise disposed of, to any other country or to any person other than the authorized ultimate consignee or end-user(s), either in their original form or after being incorporated into other items, without first obtaining approval from the U.S. Government or as otherwise authorized by U.S. law and regulations."*

- **Placement:** Commercial invoice, packing list, bill of lading/airway bill, and (when filed) AES/EEI. The skill provides the full text for the invoice block and an abbreviated reference for the packing list.
- **When not required:** EAR99 to non-embargo destinations with NLR may not require DCS in some interpretations; many companies still include it for consistency. If the license determination memo states “NLR” and no control, document that; the user may still choose to add a short disclaimer.

## Commercial invoice export block

Include in one block on the invoice:

- **ECCN** (or EAR99 / USML category if ITAR)
- **Country of origin**
- **Authorization:** License number, license exception (e.g. LVS, GBS), or “NLR”
- **Full DCS** when required
- Any **additional statements** required by license condition or company policy

Keep the block concise so it can be pasted onto the commercial invoice without reformatting.

## Packing list annotations

- List controlled items with ECCN per line where multiple items or line numbers exist.
- Include a short DCS statement or reference (e.g. “See commercial invoice for full DCS”).
- Align line numbers or descriptions with the invoice so auditors can match them.

## Shipper's Letter of Instruction (SLI)

The SLI instructs the freight forwarder or carrier. Standard fields:

- Exporter (USPPI) and consignee names and addresses
- Destination country
- Item description, ECCN, Schedule B/HTS, quantity, value
- License or exception or NLR
- Whether AES filing is required and (if already filed) ITN
- Transport mode and any special instructions

The skill drafts the SLI from collected shipment and classification data; the user or forwarder completes filing and ITN.

## Recordkeeping

BIS 15 CFR Part 762 and Census FTR Part 30 require retention of export documentation and filing records. The Export Documentation Package is part of that record. Retain the completed package (and any generated .docx) with the same retention policy as classification and license determination memos.

## Linking to other ExChek outputs

- **Classification memo:** Reference by doc number or filename so auditors can trace ECCN to the classification memo.
- **DPS record:** Reference the screening record to show denied party screening was completed.
- **License determination memo:** Reference when the authorization (license/exception/NLR) comes from the license skill.

Fill `{{CLASSIFICATION_MEMO_REF}}`, `{{DPS_RECORD_REF}}`, and `{{LICENSE_MEMO_REF}}` in the package header when the user provides them.
