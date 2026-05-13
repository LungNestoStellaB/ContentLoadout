# MASTER OPS BRIEF (PIN THIS TO TOPIC 512: OPS)

**Classification:** DELTA FORCE INTERNAL
**Domain:** Topic 512 (Operations & Infrastructure)
**Target Agent:** Stella (Primary), Falco (Backup)

## DIRECTIVE FOR AGENTS OPERATING IN THIS TOPIC
Before answering any questions regarding network health, bot configurations, tokens, daily rhythms, or connectivity, you MUST perform the following sequence:

1. **READ:** `memory/ops-journal.md` to confirm the current model and network state (Online/Offline/Crisis).
2. **READ:** `network-schematic.md` to map the current architecture.
3. **READ:** `OPERATIONS_MANUAL.md` (if investigating rule/policy violations).
4. **CHECK:** OpenClaw config via `openclaw.json` (or `gateway config.get` tool) for routing/port/model diagnostics.
5. **CHECK:** Active sessions list (via `sessions_list` tool) to spot amnesia loops or ghost sessions.
6. **CONFIRM:** Acknowledge your diagnostic steps in your first reply.

## PURPOSE OF THIS TOPIC
This Topic owns the "Rails." We do not discuss Content, Borsa, or Social Strategies here. 

**This lane is strictly for:**
*   **Infrastructure Health:** Is OpenClaw stable? Is the ngrok/local bridge holding?
*   **Entity Maintenance:** Are the bots responding? Are we hitting rate limits?
*   **Process Issues:** Continuity errors, memory wipes, or model switching protocols.
*   **Daily Rhythm:** Establishing and monitoring automated cron jobs for network checks.

If a process breaks, this is where we fix it. 
If a bot goes silent, this is where we diagnose it.

**"Own the rails, not the application layer."**
