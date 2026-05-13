# Protocol Execution Commands

**Owner:** Falco (Operations)  
**Purpose:** Quick reference for running Delta Force operational protocols

---

## 🎯 Command Shortcuts

When Lung Nesto requests a protocol check, use these exact sequences:

### **"All Systems"** - Full Pre-Flight Check
Run all three protocols in sequence and deliver combined status report.

**Sequence:**
1. Pit Lane Protocol
2. Network Health Protocol  
3. Lane Bleed Protocol

**Output:** Combined status card with overall assessment (🟢🟢🟢 or 🟢🟢🟡 or 🔴)

---

### **"Pit Lane"** - System Telemetry Only
```bash
uptime && echo '---' && free -h && echo '---' && df -h /home/ubuntu/.openclaw/workspace
```
```
subagents(action=list)
```

**Output:** 🟢 PUSH | 🟡 SAFETY CAR | 🔴 BOX

---

### **"Network Health"** - Connectivity Check Only
```bash
curl -s -o /dev/null -w "%{http_code}\n" https://api.openai.com/v1/models --max-time 5
```
```
session_status(sessionKey="current")
```

**Output:** 🟢 NETWORK HEALTHY | 🟡 DEGRADED | 🔴 DOWN

---

### **"Lane Bleed"** - Context Isolation Check Only
```
sessions_list(activeMinutes=60, limit=10)
subagents(action=list)
```
**Manual Check:**
- Current domain?
- MEMORY.md loaded in shared context? (BAD if yes)
- Any cognitive interference from previous tasks?

**Output:** 🟢 CLEAN | 🟡 MINOR BLEED | 🔴 CONTAMINATED

---

## 📋 Response Format

### Single Protocol Request
```
🟢 [STATUS]

[Protocol Name]:
- [Key Metric 1]
- [Key Metric 2]
- [Key Metric 3]

[Brief Recommendation]
```

### All Systems Request
```
🟢🟢🟢 ALL SYSTEMS GREEN

Pit Lane: 🟢 PUSH
Network Health: 🟢 HEALTHY
Lane Bleed: 🟢 CLEAN

[Brief Overall Assessment]
```

---

## 🚦 Decision Authority

**Ops advises. Lung Nesto decides.**

When Yellow or Red conditions appear, present the facts and recommendation, then wait for the call.

---

**Saved:** 2026-05-08  
**Your house, your rules, fratello.**
