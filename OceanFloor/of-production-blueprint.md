# OCEANFLOOR: PRODUCTION BLUEPRINT
**Status:** Active — Falco & Lung Nesto collaborating
**Last Updated:** 2026-04-21

---

## 🎬 THE MASTER VIDEO ARCHITECTURE

### Full Episode: 240 seconds (4 minutes)
### Short-Form Cut: 45 seconds (built-in cut point — not an edit, an architectural decision)

---

### [00:00–00:03] — SEGMENT 1: CINEMATIC INTRO
**Duration:** 3 seconds
**Format:** Real Foto Sestito underwater photo — full screen, no narrator visible
**Treatment:** Ken Burns zoom effect (slow push in or pull out) or ambient ocean sound only
**Purpose:** The scroll stopper. Silent and purely visual. Arrests the thumb before the brain engages.
**Production note:** This segment is a pure image/video scene — NO avatar. To be built in HeyGen as an image-only scene or added in post-production if HeyGen does not support avatar-free scenes.

---

### [00:03–00:15] — SEGMENT 2: THE HOOK
**Duration:** 12 seconds
**Format:** OceanFloor Narrator (avatar visible) + Foto Sestito underwater background
**Voice:** Lung Nesto
**Script style:** One punchy, provocative opening line. Delivered to camera. No context yet — just the hook.
**Example:** *"What if I told you the future of the internet is buried in the mud... right now."*
**Purpose:** Lock them in with the voice and the question before they can leave.

---

### [00:15–00:45] — SEGMENT 3: THE QUESTION
**Duration:** 30 seconds
**Format:** Narrator + supporting images/text overlays
**Script style:** The provocative question fully posed. One key stat delivered as on-screen text.
**Purpose:** Complete the Transport phase (Bennett Formula). They are emotionally invested before the 45-second mark.

**⚡ 45-SECOND CUT POINT — SHORT-FORM VERSION ENDS HERE**
- Short-form outro added: *"Follow for the full story."*
- Delivered as TikTok / Instagram Reels / YouTube Shorts
- This is NOT a separate edit — it is designed into the architecture from the first word

---

### [00:45–02:30] — SEGMENT 4: THE STORY
**Duration:** 105 seconds
**Format:** Core content, multiple scenes, background images rotating
**Script style:** The Anchor phase (Bennett Formula). Dense, fast-paced, information-rich.
**Key stats appear as bold on-screen text overlays**
**Purpose:** Deliver the surprising facts, the story, the context. This is the "Interesting Stories in Between" zone.

---

### [02:30–03:45] — SEGMENT 5: THE TWIST / CLIMAX
**Duration:** 75 seconds
**Format:** Most dramatic beat of the episode
**Script style:** The revelation that reframes everything the viewer just learned.
**Purpose:** The Prepared phase (Bennett Formula). They leave changed, not just entertained.

---

### [03:45–04:00] — SEGMENT 6: CREDITS + AMMUNITION
**Duration:** 15 seconds
**Format:** Clean Delta Force / OceanFloor branding
**Script style:** *"Are you ready?"* — Lung Nesto voice
**Elements:** OceanFloor logo, channel name, subscribe/follow CTA
**Purpose:** Brand lock. Every episode ends the same way.

---

## 🎨 VISUAL LANGUAGE

- **Color palette:** Deep blues (ocean), cold whites (tech/data), warning reds (danger/heat), strategic yellows
- **Pacing:** Fast cuts. No dead air. Information density over cinematic lingering.
- **Text overlays:** Key stats as bold on-screen graphics (numbers, percentages, depths, dates)
- **Avatar position:** OceanFloor Narrator placed to one side — background image fills the frame around them

---

## 🎤 THE BENNETT FORMULA (Applied to OF)

| Phase | OF Application |
|-------|---------------|
| **Transport** | 3-sec underwater visual + Lung Nesto opening line |
| **Anchor** | The big question + surprising fact |
| **Prepared** | The twist that reframes reality — they leave knowing something most people don't |

*"Don't just make them curious. Make them PREPARED."*

---

## 🏭 PRODUCTION PIPELINE (TO BE CONFIRMED)

### Key Questions Still Open:
1. Does HeyGen have an image-only scene mode (no avatar) for the 3-sec intro?
2. Credit cost per scene type — need Captain's screenshot of Studio credit display
3. Build as one multi-scene HeyGen project OR separate renders stitched in post?

### Confirmed Assets:
- **Avatar:** OceanFloor Narrator (ID: `edc6edbda89b40c3800bffaa165e9509`)
- **Voice:** Lung Nesto (ID: `8f2beb87d08c4f9f92264dbe5148787e`)
- **Media folder:** "Ocean floor opening 3-5 sec" (63 underwater images from Foto Sestito)
- **Folder ID:** `6d1e0cfdf9d44fce8c66ea7ced75a477`
- **HeyGen API:** Live and tested

### Tested and Learned:
- HeyGen avatar always appears in frame — it is placed OVER the background image, not replaced by it
- "Voice only over image" is not available in standard API flow — avatar is always the anchor
- Both Synthesia and HeyGen work the same way on this
- 3-sec pure-image intro will likely need to be handled in post OR via a creative workaround

---

## 📺 EPISODE 1: THE SERVER THAT SANK ON PURPOSE
**Full production script:** `of-script-1-video-prompts.md`
**Asset:** Microsoft Project Natick
**Status:** Script complete, ready to produce
**Captain tested:** Yes (HeyGen AI Studio test completed)

### 45-Second Cut Script (to be written):
- Beat 1 (0:00–0:03): Underwater cinematic intro
- Beat 2 (0:03–0:15): *"What if I told you the future of the internet isn't in space or a desert warehouse — it's in the mud."*
- Beat 3 (0:15–0:45): *"Right now, 117 feet below the North Sea, there's a machine that's 8 times more reliable than any computer on land. So how did a steel tank of 864 servers outperform the greatest data centres on Earth?"* → CTA: *"Follow for the full story."*

---

## 🗂️ FILE STRUCTURE

```
OceanFloor/
├── of-strategic-blueprint.md      ← Identity, origin, monetization goal
├── of-production-blueprint.md     ← This file — production architecture
└── episodes/
    └── ep1-server-that-sank/
        └── of-script-1-video-prompts.md   ← Full script (currently in workspace root)
```

---

*Falco & Lung Nesto — Partners in Filmmaking*
*🦅 Delta Force Production*
