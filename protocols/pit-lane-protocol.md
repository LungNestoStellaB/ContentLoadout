# Pit Lane Protocol - System Health & Deployment Readiness

**Owner:** Falco (Ops/Pit Wall)  
**Purpose:** Pre-deployment telemetry check before sub-agent dispatch  
**Frequency:** On-demand (before Engineering/Recon deployment)

---

## Check Sequence

### 1. System Telemetry
```bash
uptime && echo '---' && free -h && echo '---' && top -bn1 | head -n 10
```

**Metrics:**
- **CPU Load Average:** <10 = Green | 10-20 = Yellow | >20 = Red
- **Memory Available:** >2Gi = Green | 1-2Gi = Yellow | <1Gi = Red
- **Active Tasks:** Check sub-agent count

### 2. Active Sub-Agents
```
subagents(action=list)
```

**Thresholds:**
- 0-2 active = Green
- 3-4 active = Yellow (consider queuing)
- 5+ active = Red (abort/wait)

---

## Condition Codes

- **🟢 GREEN (PUSH):** All systems nominal. Deploy immediately.
- **🟡 YELLOW (SAFETY CAR):** Elevated load or multiple tasks running. Wait or queue.
- **🟣 RED (BOX/ABORT):** System under strain. Do not deploy. Investigate first.

---

## Output Format

```
🟢 PUSH

Telemetry:
- CPU Load: X.XX (Status)
- Memory: X.XGi Available
- Active Tasks: N Sub-agents

Track is clear. Green for deployment.
```

---

**Final Call:** Ops advises. Lung Nesto or Falco decides.
