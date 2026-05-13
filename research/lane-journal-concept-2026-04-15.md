# Architecture Update: The Lane Journals
**Date:** 2026-04-15
**Origin:** Lung Nesto (Captain)
**Status:** PROPOSED (3-Day Rollout)

## The Problem
Telegram Topics are isolated. When a lane "wakes up" the next day, it suffers from amnesia unless explicitly fed its history, which costs too many tokens if we use raw chat transcripts.

## The Solution: "The Lane Journal"
A companion memory file for each operational topic. It acts as a "note to our younger selves."
It is NOT a chat transcript. It is the skeleton of decisions, actions, and current state.

### The Four Journals
1. `memory/borsa-journal.md` (Topic 1)
2. `memory/content-journal.md` (Topic 2)
3. `memory/askstella-journal.md` (Topic 3)
4. `memory/ops-journal.md` (Topic 4)

### The Mechanics
1. **End of Exchange (Closeout):** The responsible agent writes a short bulleted update to the lane's journal.
   - *Format:* Date | Decisions Made | Current State | Pending Actions.
2. **Wake Up (Initiation):** The first action an agent takes when engaging in a Topic the next day is to `read` its specific Lane Journal to understand where it left off.

## 3-Day Rollout Plan
- **Day 1 (Today):** Create the four blank journal files. Establish the entry format.
- **Day 2:** Live test. Run normal operations in the lanes. Execute the "Closeout" write to the journals at the end of the shift.
- **Day 3:** Wake up test. Agents read the journals first thing. If successful, officially amend the `OPERATIONS_MANUAL.md` to include Lane Journals as mandatory protocol.
