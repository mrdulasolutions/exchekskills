# ExChek Export Documentation & Filing Helper (exchek-export-docs)

Draft **export documentation** and **AES/EEI data elements** from shipment details plus classification and screening results. Produces: commercial invoice export block, packing list annotations, Shipper's Letter of Instruction (SLI) draft, and an AES/EEI data table. **Flags when AES filing is required vs exempt** and documents the reasoning. **Prep only** — does not perform actual AES filing.

**Why use it** — Get 80% of export doc and AES prep done in your agent; BIS and Census audit-ready package. Free to use; optional donation.

- **No API key** required for this skill (no external APIs; uses rules and references).
- **Docs**: https://docs.exchek.us
- **Website**: https://exchek.us

## Install

This skill lives in the **exchek-export-docs** folder. Clone the repo and copy the folder into your agent's skills directory:

```bash
git clone https://github.com/mrdulasolutions/exchekskills exchekskills
cp -r exchekskills/exchek-export-docs ~/.claude/skills/exchek-export-docs
```

Restart your agent. Skill name: **exchek-export-docs**.

## How to use

- **Invoke** — Ask e.g. *"Prepare export documentation for this shipment"*, *"Draft the commercial invoice export block and SLI"*, *"Is AES required for this export?"*, *"Export docs for [shipment] to [country] with ECCN [X]."*
- **What the agent does** — Collects shipment, classification ref, screening ref, and license/exception; determines AES required vs exempt with reasoning; builds the Export Documentation Package (invoice block, packing list, SLI, AES data, AES determination).
- **What you get** — One markdown (and optional .docx) package with all sections ready for your commercial invoice, packing list, forwarder (SLI), and AES filing prep. Actual AES filing is done by you or your filer.

See **SKILL.md** in this folder for full flow and references.

## License

See ExChek, Inc. terms.
