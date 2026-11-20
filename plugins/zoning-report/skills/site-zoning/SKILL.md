---
name: site-zoning
description: Prepare an IRG zoning report for an address, coordinates, or parcels using the separately connected Zoning MCP.
---

When asked for a site zoning report, identify the site and proposed uses. Call the **Zoning MCP** connector's zoning lookup (`research_site_zoning` when available). Supply official APNs and parcel boundaries when available. Label address or coordinate lookups as point screens. Request overlay or building enrichment when relevant. If the connector is unavailable, tell the user to connect Zoning MCP and retry the lookup.

Use the returned Zoneomics evidence and available official parcel maps, ordinances and approval records. Distinguish adopted rules, drafts and seller claims. Cite the controlling agency, section, effective date and URL alongside material findings. Mark unverified findings as open.

## Report format

1. **Zoning decision and main constraints.** Name the site and proposed project. Lead with what the evidence supports and what could change the decision.
2. **Parcel worksheet.** Give each parcel a row with APN, jurisdiction, district(s), overlays or specific plan, gross area with units, and source. Identify conflicting parcel matches and split zoning.
3. **Approval path by use.** Assess the data center, substation, electrical distribution, and any proposed generation or storage separately. Give each use's status, required action, and controlling provision.
4. **Development standards.** Give applicable height, setbacks, buffers, coverage, and relevant adjacency constraints with units and sources. Report buildable acreage only when verified geometry and constraints support it.
5. **Open questions.** Identify the missing evidence and the agency or record that can resolve each question.
