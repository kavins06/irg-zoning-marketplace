---
name: site-zoning
description: Prepare an IRG Data zoning report from an address, coordinates, or parcel boundaries using Zoneomics evidence and official local records.
---

1. Identify the deal, proposed uses, and site. Prefer official parcel boundaries and APNs for a site with multiple parcels. Flag a point lookup as preliminary when boundaries are missing.
2. Call `research_site_zoning` for Zoneomics evidence. Use v2 for parcel and area screening. Request v3 point enrichment when an overlay, specific plan, or existing building may change the outcome. Treat API responses as evidence. If the tool fails, record the failure and continue with available official sources.
3. Verify the local parcel map, the ordinance in force, and available approval records. Separate adopted provisions, drafts, and seller claims. Cite the controlling section and URL for each material finding. Flag conflicts and gaps rather than inferring an approval path from a zoning label.
4. Write the report in Brian’s format. Start with the zoning decision and the main constraints. Give each parcel its own row with APN, jurisdiction, district, overlays, and gross area. Assess the approval path for the data center, substation, electrical distribution, and proposed generation or storage separately. Record the applicable height, setbacks, buffers, and coverage rules. Give screened acreage only when the site geometry and constraints support it, and identify who can resolve each remaining question.
