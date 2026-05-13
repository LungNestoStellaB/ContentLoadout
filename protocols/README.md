# Delta Force Operations - Protocol Summary

**Owner:** Falco (Operations/Pit Wall)  
**Last Updated:** 2026-05-08

---

## 🏁 The Three Protocols

Delta Force runs three mandatory pre-flight checks before major operations:

### 1. **Pit Lane Protocol** - System Health
**Purpose:** Check CPU, memory, disk, and active task load before sub-agent deployment  
**When:** Before spawning Engineering/Recon/Content sub-agents  
**Output:** 🟢 PUSH | 🟡 SAFETY CAR | 🔴 BOX  
**File:** `protocols/pit-lane-protocol.md`

**Quick Check:**
```bash
uptime && echo '---' && free -h && echo '---' && df -h /home/ubuntu/.openclaw/workspace
subagents(action=list)
```

---

### 2. **Network Health Protocol** - External Connectivity
**Purpose:** Verify external APIs, DNS, gateway, and model provider health  
**When:** Before major deployments or when external tools are critical  
**Output:** 🟢 NETWORK HEALTHY | 🟡 DEGRADED | 🔴 DOWN  
**File:** `protocols/network-health-protocol.md`

**Quick Check:**
```bash
curl -s -o /dev/null -w "%{http_code}\n" https://api.openai.com/v1/models --max-time 5
session_status(sessionKey="current")
```

---

### 3. **Lane Bleed Protocol** - Context Isolation
**Purpose:** Detect cross-contamination between sessions, sub-agents, and task domains  
**When:** Before domain switches (Borsa ↔ Content ↔ Engineering) or when behavior feels "off"  
**Output:** 🟢 CLEAN | 🟡 MINOR BLEED | 🔴 CONTAMINATED  
**File:** `protocols/lane-bleed-protocol.md`

**Quick Check:**
```bash
sessions_list(activeMinutes=60, limit=10)
subagents(action=list)
# Manual: What domain am I in? Is MEMORY.md loaded in a shared context?
```

---

## 🎯 When to Run Each Protocol

| Scenario | Pit Lane | Network Health | Lane Bleed |
|----------|----------|----------------|------------|
| Before sub-agent spawn | ✅ | Optional | ✅ |
| Before major deployment | ✅ | ✅ | Optional |
| Switching domains (Borsa → Content) | Optional | Optional | ✅ |
| System feels sluggish | ✅ | ✅ | Optional |
| Behavior feels "off" | Optional | Optional | ✅ |
| External API calls critical | Optional | ✅ | Optional |

---

## 🚦 Decision Matrix

### All Green (🟢🟢🟢)
**Action:** Full speed ahead. Deploy immediately.

### 2 Green, 1 Yellow (🟢🟢🟡)
**Action:** Proceed with awareness. Monitor the Yellow condition.

### 1+ Red (🔴)
**Action:** STOP. Investigate and remediate before proceeding.

---

## 🛠️ Quick Command Reference

**Run all three protocols:**
```bash
# Pit Lane
uptime && free -h && df -h /home/ubuntu/.openclaw/workspace
subagents(action=list)

# Network Health
curl -s -o /dev/null -w "%{http_code}\n" https://api.openai.com/v1/models --max-time 5
session_status(sessionKey="current")

# Lane Bleed
sessions_list(activeMinutes=60, limit=10)
subagents(action=list)
# Manual context check
```

---

## 📋 Protocol Ownership

- **Pit Lane:** Ops (Falco) advises, Lung Nesto or Falco decides
- **Network Health:** Ops (Falco) advises, Lung Nesto or Falco decides
- **Lane Bleed:** Ops (Falco) advises, Lung Nesto or Falco decides

**Final Authority:** Lung Nesto makes all final calls.

---

## 🔄 Protocol Evolution

These protocols are living documents. As Delta Force operations evolve, so will these checks. Update them as needed, but always maintain the three-pillar structure:

1. **System Health** (Pit Lane)
2. **External Connectivity** (Network Health)
3. **Context Isolation** (Lane Bleed)

---

**Your house, your rules, fratello.**
