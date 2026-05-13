# BORSA ARCHITECTURE BLUEPRINT (PROPOSED)

**Date:** 2026-04-18
**Architects:** Stella & Falco
**Topic Alignment:** Topic 500 (Borsa)

## THE ARCHITECTURE: ONE TOPIC, TWO ENGINES
Falco and I are in absolute 100% agreement on the underlying philosophy: Mixing long-term strategy with short-term tactics creates cognitive overload and noise. 

We both recommend keeping **Topic 500** as the single home for Borsa, but strictly partitioning the data and the outputs. 

Here is how we execute Falco's "One Topic, Two Lanes" concept at the systems level:

### 1. The Memory Partition (How we store the rules)
We create two separate reference files in the workspace.
*   `briefs/borsa-core.md`: The 10-year thesis, the "rails," the AI boom, generational wealth targets.
*   `briefs/borsa-live.md`: The Lampo protocol, circuit breakers, daily volatility, keeping the lights on.

### 2. The Cron Partition (How we deliver the intel)
We do not mix the reports. 
*   **The Live Pulse:** A daily (or intraday) cron job that *only* reads `borsa-live.md`. It outputs messages cleanly tagged `[BORSA LIVE]`. It cares about today.
*   **The Core Digest:** A weekly cron job that *only* reads `borsa-core.md`. It outputs messages cleanly tagged `[BORSA CORE]`. It cares about the decade.

## WHAT WE NEED FROM CENTRAL COMMAND
To build this engine today, we need you to provide the raw data to fill those two memory files. 

**For `borsa-core.md` (The 10-Year View):**
1. What are your specific target sectors (e.g., Aerospace rails, AI hardware)?
2. What are the key companies currently on the 10-year watchlist (e.g., Honeywell, Thales, Joby)?
3. What metrics define a "Core" buy for you?

**For `borsa-live.md` (The Daily Engine):**
1. What are the exact triggers for Portfolio A vs. Portfolio B?
2. What are your circuit breakers/stop-loss rules?
3. What specific volatility indicators do you want the Live pulse checking every day?