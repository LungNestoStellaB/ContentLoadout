# Lane Bleed Protocol - Context Isolation & Task Separation

**Owner:** Falco (Ops/Pit Wall)  
**Purpose:** Prevent cross-contamination between sessions, sub-agents, and task domains  
**Frequency:** Before domain switches (Borsa ↔ Content ↔ Engineering) or when behavior feels "off"

---

## What is Lane Bleed?

**Lane Bleed** = Context from one domain leaking into another.

**Examples:**
- Borsa tactical thinking contaminating SA creative scripts
- Engineering sub-agent tasks interfering with main session focus
- Memory from one project polluting another
- Parallel tasks creating cognitive interference

---

## Check Sequence

### 1. Active Session Inventory
```
sessions_list(limit=10, activeMinutes=60)
```

**Look for:**
- Multiple active sessions in different domains
- Overlapping sub-agent tasks
- Stale sessions that should be closed

**Thresholds:**
- **Green:** 1-2 active sessions, clear separation
- **Yellow:** 3-4 active sessions, potential overlap
- **Red:** 5+ active or clear domain collision

### 2. Sub-Agent Task Audit
```
subagents(action=list)
```

**Look for:**
- Active sub-agents from unrelated prior tasks
- Zombie/stuck sub-agents
- Tasks that should have completed

**Thresholds:**
- **Green:** 0-1 active, all relevant to current task
- **Yellow:** 2-3 active, some unrelated
- **Red:** 4+ active or stuck tasks

### 3. Context Boundary Check (Manual)

**Questions:**
- What was the last major task?
- What is the current domain? (Borsa | Content | Engineering | FSCD)
- Am I still thinking about the previous task?
- Is my response style appropriate for this domain?

### 4. Memory File Audit
```bash
ls -lh memory/ | tail -n 5
```

**Look for:**
- Recent memory writes that might contaminate current context
- Cross-domain overlap in daily logs

---

## Condition Codes

- **🟢 CLEAN:** Clear domain separation, no active bleed
- **🟡 MINOR BLEED:** Some overlap, manageable with awareness
- **🔴 CONTAMINATED:** Significant cross-contamination, stop and clean

---

## Remediation Actions

### Yellow (Minor Bleed)
- Close unrelated sessions
- Kill completed/stuck sub-agents
- Explicitly state current domain before proceeding
- Mental reset: "Switching from [X] to [Y] mode"

### Red (Contaminated)
- **STOP.** Do not proceed.
- Kill all sub-agents: `subagents(action=kill, target=all)`
- Close non-essential sessions
- Explicitly state: "Resetting context to [Domain]"
- Wait for Lung Nesto confirmation before resuming

---

## Special Cases

### FSCD (For Something Completely Different)
When Lung Nesto signals **FSCD**, Lane Bleed Protocol is **suspended**. FSCD explicitly allows cross-domain thinking—it's intentional exploration, not contamination.

### Borsa ↔ Content Transitions
**High Risk Zone.** Borsa thinking (tactical, data-driven) can contaminate Content work (creative, narrative). Always run Lane Bleed Protocol when switching between these domains.

### Engineering/Recon Handoffs
Sub-agents deposit work to GitHub. Main session should **not** be actively tracking their internal process. If you find yourself mentally following Engineering's progress, that's Lane Bleed.

---

## Output Format

```
🟢 CLEAN

Lane Bleed Check:
- Active Sessions: 1 (Domain: Content)
- Sub-Agents: 0
- Context Boundary: SA Script Writing
- Memory State: Clean

No contamination detected. Proceed.
```

---

**Final Call:** Ops advises. Lung Nesto or Falco decides.
