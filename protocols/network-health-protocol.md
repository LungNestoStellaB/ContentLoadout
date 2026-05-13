# Network Health Protocol

**Owner:** Falco (Ops/Pit Wall)  
**Purpose:** Verify external connectivity and API health before critical operations  
**Frequency:** On-demand or before major deployments

---

## Check Sequence

### 1. Gateway Connectivity
```bash
curl -s -o /dev/null -w "%{http_code}" https://api.openai.com/v1/models --max-time 5
```

**Expected:** 200 or 401 (reachable, auth required)  
**Red Flag:** Timeout, connection refused, or 5xx errors

### 2. DNS Resolution
```bash
nslookup google.com && nslookup github.com
```

**Expected:** Both resolve successfully  
**Red Flag:** NXDOMAIN or timeout

### 3. OpenClaw Gateway Status
```
gateway(action=config.get)
```

**Check:**
- Gateway responding
- No error states in config fetch
- Plugins loaded correctly

### 4. Model Provider Health
```
session_status(sessionKey="current")
```

**Check:**
- Current model responding
- No rate limit warnings
- Token budget healthy

---

## Condition Codes

- **🟢 GREEN:** All endpoints reachable, DNS clean, gateway responding
- **🟡 YELLOW:** Intermittent timeouts or elevated latency (>2s)
- **🔴 RED:** DNS failure, gateway unresponsive, or model provider down

---

## Output Format

```
🟢 NETWORK HEALTHY

Connectivity:
- OpenAI API: Reachable
- DNS: Clean
- Gateway: Responding
- Model: Active (gemini-3.1-pro)

All lanes open.
```

---

**Use Case:** Run before launching multi-agent operations or when external API calls are critical to the task.
