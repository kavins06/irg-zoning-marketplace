# IRG Zoning Reports marketplace

A private source repository for the IRG zoning plugin. GitHub access lets you install the package. It does not grant access to the connected app or to Zoneomics credentials.

## Claude Code

```text
/plugin marketplace add https://github.com/kavins06/irg-zoning-marketplace
/plugin install irg-zoning-reports@irg-zoning
```

Requires Node.js 22+ and `ZONOMICS_API_KEY` in the environment of the Claude Code process. Use your authorized secrets manager. IRG team members with access to the existing Doppler config can launch Claude Code with:

```sh
doppler run --no-fallback -p zoning-power -c dev --only-secrets ZONOMICS_API_KEY -- claude
```

This package runs its MCP server locally through stdio. Claude web or cloud execution is not covered by this configuration.

## ChatGPT and Codex

**ChatGPT workspace:** In **Admin → Plugins → Add → Import marketplace**, enter `https://github.com/kavins06/irg-zoning-marketplace` and authorize the GitHub account that can read the repo. Enable access to the existing IRG Zoning Reports app for the intended members separately. Import does not grant access.

**Codex desktop:** Run `codex plugin marketplace add https://github.com/kavins06/irg-zoning-marketplace`, then select **IRG Zoning** in the desktop plugin directory. The installed app remains subject to its existing access policy.

The OpenAI package references the existing private hosted app. Its Zoneomics credential stays in the server runtime.

## Try it

Ask “Prepare an IRG zoning report for 2810 Dogwood Drive SE, Conyers, GA 30013. Show the parcel, development standards, and the evidence needed to determine data center eligibility.”
