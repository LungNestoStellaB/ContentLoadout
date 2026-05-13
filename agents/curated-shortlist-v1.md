# MISSION 001: Curated Agent Shortlist (AskStella v1)

**Prepared by:** Falco (Recon)
**Date:** 2026-05-06
**Status:** DRAFT FOR REVIEW
**Target Audience:** Ordinary people (45-65+), non-technical, looking for high-value, low-friction entry points into AI.

---

## The Shortlist (7 Agents)

### 1. Perplexity AI
* **Category Fit:** Learning, Work
* **Value Proposition:** A smart search engine that reads the web for you and delivers one clear, cited answer instead of a confusing list of blue links and ads.
* **Why this over competitors:** It's the perfect replacement for Google for this demographic. It eliminates the friction of sifting through SEO spam when researching medical symptoms, travel plans, or history. It provides footnotes so users can trust the information.
* **Cost Structure:** Free to use; Pro version available for $20/mo.
* **Official Site:** [perplexity.ai](https://www.perplexity.ai)

### 2. Pi (by Inflection)
* **Category Fit:** Everyday Life, Learning
* **Value Proposition:** A compassionate, conversational AI designed to be a supportive listener, a sounding board, and a patient brainstorming partner.
* **Why this over competitors:** ChatGPT can feel intimidating and overly formal. Pi is designed for empathy—it asks you questions back and drives the conversation. It feels like a patient friend, making it the least intimidating introduction to AI possible.
* **Cost Structure:** Free.
* **Official Site:** [pi.ai](https://pi.ai)

### 3. Goblin.tools
* **Category Fit:** Organization, Everyday Life
* **Value Proposition:** A dead-simple "Magic ToDo" list that takes any overwhelming chore (like "clean the garage" or "plan a dinner party") and instantly breaks it down into tiny, manageable steps.
* **Why this over competitors:** Requires absolutely zero login or setup. No tech jargon. It solves a very specific human problem (overwhelm) instantly. It also includes tools to check if an email sounds angry, which is great for life admin.
* **Cost Structure:** Free on the web; mobile app is a $0.99 one-time purchase.
* **Official Site:** [goblin.tools](https://goblin.tools)

### 4. ChatGPT (OpenAI)
* **Category Fit:** Work, Everyday Life
* **Value Proposition:** The most famous, versatile all-around assistant that can draft emails, analyze photos, and hold incredibly lifelike voice conversations.
* **Why this over competitors:** Brand recognition makes it a must-have, but the real seller for the 45-65+ demographic is its Voice Mode on the mobile app. Talking to it while walking the dog or driving is a "magic" moment.
* **Cost Structure:** Highly capable free tier; Plus is $20/mo.
* **Official Site:** [chatgpt.com](https://chatgpt.com)

### 5. Claude (by Anthropic)
* **Category Fit:** Creativity, Work
* **Value Proposition:** The best writer in the AI world, generating text that sounds genuinely human, warm, and far less robotic than other bots.
* **Why this over competitors:** If a user needs to write a heartfelt letter, a difficult email, or summarize a very long document, Claude's output requires far less editing than ChatGPT's. It has a calmer, more refined "personality."
* **Cost Structure:** Free tier available; Pro is $20/mo.
* **Official Site:** [claude.ai](https://claude.ai)

### 6. Canva Magic Studio
* **Category Fit:** Creativity
* **Value Proposition:** Turns your text ideas into professional-looking images, flyers, and greeting cards without needing any design skills.
* **Why this over competitors:** Professional image generators (like Midjourney) require Discord and complex prompting, which is a massive barrier. Canva is already trusted by ordinary people, and its AI tools are point-and-click simple for community groups, church events, or family birthdays.
* **Cost Structure:** Free basic features; Pro is ~$15/mo.
* **Official Site:** [canva.com](https://www.canva.com)

### 7. Google Gemini
* **Category Fit:** Organization, Work
* **Value Proposition:** An assistant that connects directly to the Gmail, Google Docs, and Drive you already use to help find old emails, summarize itineraries, or draft replies.
* **Why this over competitors:** It offers the lowest friction for anyone already living in the Google ecosystem. Users don't have to copy-paste between windows; it lives where their data already is.
* **Cost Structure:** Free tier; Advanced (Google One AI Premium) is $20/mo.
* **Official Site:** [gemini.google.com](https://gemini.google.com)

---

## AskStella Routing Logic

**How Stella should guide users based on their submitted needs:**

*   **If the user is overwhelmed by life admin or chores:** ➡️ Route to **Goblin.tools**. (Low friction, immediate relief).
*   **If the user is lonely, anxious, or just wants to "try talking to AI" without a specific task:** ➡️ Route to **Pi**. (Conversational, safe, asks questions).
*   **If the user wants to research facts, travel, or news without Google's ads:** ➡️ Route to **Perplexity AI**. (Answers, not links).
*   **If the user needs to write something important, sensitive, or creative:** ➡️ Route to **Claude**. (Best human-like writing).
*   **If the user wants to generate an image or make a flyer/card:** ➡️ Route to **Canva Magic Studio**. (Visual, simple UX).
*   **If the user wants a general assistant to talk to via voice on their phone:** ➡️ Route to **ChatGPT**. (Best voice mode).
*   **If the user specifically asks for help managing their messy inbox or Google Docs:** ➡️ Route to **Google Gemini**. (Ecosystem integration).

