# BORSA LANE JOURNAL
**Last Updated:** 2026-04-29 12:55 UTC  
**Owner:** Stella (strategy), Falco (data/tracking)

---

## Current Operational State

### Strategy 1: Post-Hostility Alpha (Simulation)
**Status:** PREPARING DEPLOYMENT 
**Platform:** Alpaca (Reset/Cleared)
**Thesis:** Peace Dividend / Market Return
**Capital Allocation:** $10,000 USD
**Objective:** Enter early in simulation. Absorb the "wrong time" drawdown on paper to map the exact bottoming/recovery curve before going live.
- **Triggers for Environment:** VIX retreating (< 15), WTI Crude cooling, Gold dropping back.
- **Offense (Recovery Gap targets):** SPY (Core exposure), JETS (Travel/Airlines), XLY (Consumer Discretionary).
- **Defense (The Buffer):** JEPI / JEPQ (Defensive yield to anchor volatility).

### Strategy 2: Post-Hostility Beta (Simulation)
**Status:** PREPARING DEPLOYMENT
**Platform:** Interactive Brokers (Reset/Cleared)
**Thesis:** The Good Times Trap (Stress Test)
**Capital Allocation:** $10,000 USD
**Objective:** A deliberate stress-test of recovery mechanics. Parallel early entry to track telemetry and friction until confirmed improvement signals the switch to live capital execution.
- **Phase 1 (The Setup):** Deploy into high-beta, high-momentum, pro-cyclical targets when market conditions look pristine.
- **Phase 2 (The Trouble):** Monitor the cyclical turn. Watch the drawdown occur within predefined risk parameters.
- **Phase 3 (The Extraction):** The core test. Slowly rotate, manage the bleeding, and claw back capital using targeted transitions.

### Risk Parameters & Extraction Math (UPDATED: 2026-04-29)
*Borsa Topic Agent: The Captain has locked the risk parameters below. You are ordered to stress-test these constraints against both portfolios immediately.*

**Global Rules (Applies to both $10,000 Portfolios):**
- **Strategy:** Low-risk global swing trading (holding days to a few weeks).
- **Position Count:** 12 to 20 positions total. (Start conservative: 8-10. Scale to 15+ when consistent).
- **Diversification:** Maximum 2-3 positions per region/sector (e.g., US Tech, AU Resources, Asia Exporters, EU Indices).
- **Capital Deployment:** Allowed to be 80–100% invested across the global board.
- **Risk Per Trade:** 0.5% – 2.0% of total capital (Max $50 - $200 loss per trade on $10k).
- **Total Portfolio Risk:** Hard cap at 6–8% total risk across all open swings.
- **Reward:Risk Ratio:** Mandatory minimum 1:2.
- **Execution Cost:** Must use $0-low commission routing with fractional shares. Avoid high minimum-lot markets.

**Operational Doctrine:**
- **Goal:** Calm compounding. Target 1–2% account growth per month net.
- **Routine:** 30–60 min evening review (check stops, log new setups). Not screen-time heavy.
- **Golden Rule:** Risk first, size second. Define the exact stop-loss BEFORE entry.

## Falco's Audit Notes (2026-04-29)
The Captain provided the starting math constraints. Below is my initial read on how they map to our specific tactical plays, noting where we may need to stretch the doctrine:

1.  **Position Count & Earned Entries:**
    *   The 12-20 position count is a *long-term vision*, not a forced quota. 
    *   **The Golden Rule of Entry:** We do not force trades. No gut feelings. Data only. Every position must *earn* its place in the portfolio based on the triggers. If only 3 targets earn their place tomorrow, we deploy 3. We will not artificially inflate the position count with unnecessary tranches or filler targets.

2.  **Risk Per Trade (0.5% - 2.0% | Max $200 loss):**
    *   This is the critical anchor. In Portfolio B (The Trap), if we buy high-beta, the price swings will be violent. A tight dollar-loss constraint means our position sizing must be *very* small to avoid getting stopped out by normal market noise before the "trouble" phase actually hits. I will calculate exact position sizes based on ATR (Average True Range) of the chosen targets to ensure the stop-loss survives the noise.

3.  **Total Portfolio Risk (6% - 8% | Max $800 total at risk):**
    *   **Portfolio A (Peace Dividend):** We hold strict to the 6-8% global cap. This is an operational simulation of capital deployment; capital preservation is paramount.
    *   **Portfolio B (The Trap) - MODIFIED FOR MISSION:** The Captain has authorized loosening the risk cap to serve the tactical objective. We will expand Portfolio B's Total Portfolio Risk cap to **15% ($1,500 at risk)**. 
    *   **The Trap Mechanics:** We *want* to map the friction of a deep drawdown. At -8% portfolio drawdown, Phase 2 (The Trouble) is officially acknowledged. The zone between -8% and -15% is where we execute Phase 3 (The Extraction), forcing ourselves to claw back capital under pressure. If we hit -15%, it is a hard abort and the extraction failed.

I will finalize the target list and calculate the exact sizing and stop placement against these parameters for Ops tomorrow.

---

## Last Action
**2026-04-29 14:49 UTC:** Captain issued strict execution order: Close out ALL legacy positions on Alpaca. Captain will manually execute the IBKR close-outs. Alpaca execution to be passed to Lupo.