# IRG Zoning Reports marketplace

A private source repository for the IRG zoning plugin. GitHub access lets you install the package. It does not grant access to the connected app or to Zoneomics credentials.

The Cloudflare Worker handles authenticated Zoneomics lookups. The shared `site-zoning` skill uses that evidence and official records to write the IRG report.

## Claude Code

```text
/plugin marketplace add https://github.com/kavins06/irg-zoning-marketplace
/plugin install irg-zoning-reports@irg-zoning
```

The plugin connects directly to the hosted Cloudflare MCP. IRG team members with access to the Doppler config can launch Claude Code with just the MCP access token:

```sh
doppler run --no-fallback -p zoning-power -c dev --only-secrets IRG_ZONING_MCP_TOKEN -- claude
```

The token grants access to the MCP, not to Zoneomics itself. Claude web has not been configured for team OAuth sign-in.

## ChatGPT and Codex

**ChatGPT workspace:** In **Admin → Plugins → Add → Import marketplace**, enter `https://github.com/kavins06/irg-zoning-marketplace` and authorize the GitHub account that can read the repo. Enable access to the existing IRG Zoning Reports app for the intended members separately. Import does not grant access.

**Codex desktop:** Run `codex plugin marketplace add https://github.com/kavins06/irg-zoning-marketplace`, then select **IRG Zoning** in the desktop plugin directory. The installed app remains subject to its existing access policy.

The OpenAI package references the existing private hosted app, which forwards requests to the same Cloudflare Worker. The Zoneomics credential remains in Cloudflare’s runtime secrets.

## Try it

Ask “Prepare an IRG zoning report for 2810 Dogwood Drive SE, Conyers, GA 30013. Show the parcel, development standards, and the evidence needed to determine data center eligibility.”
