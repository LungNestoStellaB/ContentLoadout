# FALCO MISSION: AskStella Recon #002
**Area:** Specialist vs. Foundation Decision Logic
**Label:** 🟡 CONTEXT
**Date:** 2026-04-11

## 1. Traits for a Specialist Agent
An ordinary buyer benefits most from a specialist agent when they:
*   **Have a singular, acute pain point:** Their need is highly specific, repeatable, and measurable (e.g., calendar tetris, coding, accounting, highly formatted copywriting).
*   **Need execution, not just conversation:** They want the agent to *do the work* directly inside their software via APIs, not just generate text they have to copy-paste.
*   **Value precision over flexibility:** They want guaranteed accuracy in one domain and don't care if the agent can't write a poem or tell a joke.

## 2. Traits for a Foundation Platform
An ordinary buyer benefits most from a broad foundation platform (ChatGPT, Claude, Gemini) when they:
*   **Have unpredictable daily needs:** They need to summarize a PDF on Monday, draft an email on Tuesday, and brainstorm a vacation on Wednesday.
*   **Need a sounding board:** They are looking for an intellectual sparring partner or a "smart friend" to bounce ideas off of.
*   **Value zero friction:** They want immediate, multi-device access (mobile app, voice mode, web) without setting up complex workflows or integrations.

## 3. The Tradeoffs
*   **Specialist:** Deep but brittle. Incredible at its designated job, but useless outside of it. Usually requires more initial setup and costs a premium for a narrow utility.
*   **Foundation:** Broad but shallow. Infinitely flexible, but requires the user to be a good "manager" (prompting, guiding, fact-checking). Will often confidently execute a task 80% well, leaving the last 20% to the human.

## 4. Common Mismatches to Avoid
*   **The "Overkill" Trap:** Recommending a $30/month specialized writing or marketing agent to a user who only writes casually. A foundation model with a good prompt is sufficient.
*   **The "Talk Isn't Execution" Trap:** Recommending a foundation model to a user who explicitly wants automated data entry or scheduling. The foundation model will *tell* them how to do it, but won't *do* it. This causes immediate frustration and churn.

## 5. Practical Decision Rule for AskStella Routing
**The "Specific Pain" Rule:**
*   **IF** the user names a specific task, workflow, or software they want to outsource (e.g., "I hate scheduling meetings," "I need help writing Python," "I want to automate my invoicing"), **ROUTE TO SPECIALIST**.
*   **IF** the user uses broad terms (e.g., "I want to be more productive," "I need help brainstorming," "I want to learn faster"), **ROUTE TO FOUNDATION**.