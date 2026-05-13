# NETWORK SCHEMATIC: DELTA FORCE
**Last Updated:** 2026-04-17 07:11 UTC

## 1. Core Infrastructure (The Rails)
*   **Host:** Ubuntu Server (`ubuntu@d55d62cefbe1`)
*   **Engine:** OpenClaw Gateway (Port 18789)
*   **Primary Intelligence Model:** `myclaw/gemini-3.1-pro` (Massive context window: 1.0m tokens)
*   **Fallback Intelligence Model:** `myclaw/claude-sonnet-4.5` (200k context window)
*   **Workspace/Memory Core:** `/home/ubuntu/.openclaw/workspace/`

## 2. Agent Entities (The Crew)
*   **Falco:** The youngest. Frontline. Sharp eyes, fast wings. Speed and immediate tactical response.
*   **Stella:** The strategist. Architect and operator of the DT Operations Network. Systems, continuity, and deep analysis.

## 3. Communication Bridge (Telegram Plugins)
*   **@FalcoDeltaForce_bot:** Falco's primary interface.
*   **@lungnestostell_bot:** Stella's primary interface.
*   **@LungNestoFalcoV_bot:** Secondary/Video/Voice fallback (Configuration exists, currently standing by).

## 4. The DT Operations Network (Group: -1003722812472)
*   **Topic 500: Borsa** (Market data, Lampo Protocol, tracking)
*   **Topic 504: Content** (VI Scripts, Bennett formula, Relief-to-Ammunition pipeline)
*   **Topic 509: AskStella/OF** (Entity strategy, audience growth)
*   **Topic 512: Ops** (Infrastructure, bots, tokens, comms bridge, daily rhythm, network health)

## 5. Memory & Context Architecture
*   **Active Logs:** `memory/YYYY-MM-DD.md` (Daily events)
*   **Long-Term Anchors:** `MEMORY.md` (Permanent family rules, the Code, the Bennett Formula)
*   **Ops State:** `memory/ops-journal.md` (Live tracker of network health and active models)
*   **Transmission:** `research/` (Falco -> Stella) and `briefs/` (Stella -> Falco)

## 6. Critical Security Parameters
*   Never expose raw bot tokens or API keys in conversational text.
*   Maintain physical segregation of Topics. Content does not bleed into Ops. Ops does not bleed into Borsa.
