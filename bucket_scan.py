import argparse, json, sys, re, os
from datetime import datetime, timedelta
from collections import defaultdict
import requests
from bs4 import BeautifulSoup

HEADERS = {"User-Agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36"}
TICKER_RE = re.compile(r'\$([A-Z]{1,5})\b|\b([A-Z]{2,5})\b')
COMMON_WORDS = {
    "THE", "AND", "FOR", "ARE", "BUT", "NOT", "YOU", "ALL", "CAN",
    "HER", "WAS", "ONE", "OUR", "OUT", "DAY", "GET", "HAS", "HIM",
    "HIS", "HOW", "ITS", "MAY", "NEW", "NOW", "OLD", "SEE", "WAY",
    "WHO", "DID", "GOT", "LET", "SAY", "SHE", "TOO", "USE", "CEO",
    "GDP", "IPO", "SEC", "ETF", "NYSE", "DOW", "USD", "TOP", "BIG",
    "LOW", "HIGH", "RISE", "FALL", "DROP", "JUMP", "SELL", "BUY",
    "SAYS", "JUST", "MOST", "THAN", "MORE", "BEEN", "WILL", "INTO",
    "YEAR", "SOME", "THEM", "THAN", "ONLY", "COME", "OVER", "ALSO",
    "BACK", "WHEN", "WITH", "FROM", "THIS", "THAT", "WHAT", "HAVE",
    "BEEN", "SAID", "EACH", "MAKE", "LIKE", "LONG", "LOOK", "MANY",
    "NEXT", "LAST", "OPEN", "PART", "TAKE", "MADE", "LIVE", "EVER",
}

def extract_tickers(text, filter_list=None):
    matches = TICKER_RE.findall(text)
    tickers = set()
    for m in matches:
        t = m[0] or m[1]
        if t and t not in COMMON_WORDS and len(t) >= 2:
            if filter_list and t.upper() not in [f.upper() for f in filter_list]:
                continue
            tickers.add(t.upper())
    return list(tickers)

def calc_impact(item):
    score = 0
    text = (item.get("title", "") + " " + item.get("summary", "")).lower()
    if any(kw in text for kw in ["merger", "acquisition", "takeover", "acquire", "buyout", "bid for"]):
        score += 5
    if any(kw in text for kw in ["insider buy", "insider purchas", "ceo buy", "director buy", "officer buy"]):
        score += 4
    elif any(kw in text for kw in ["insider sell", "insider dispos"]):
        score += 3
    if any(kw in text for kw in ["upgrade", "downgrade", "price target", "initiate", "overweight", "outperform"]):
        score += 3
    if any(kw in text for kw in ["hearing that", "sources say", "rumor", "rumour", "reportedly", "in talks"]):
        score += 2
    if any(kw in text for kw in ["sec investigat", "sec fil", "13d", "13f", "schedule 13"]):
        score += 2
    return min(score, 10) or 1

def categorize(item):
    text = (item.get("title", "") + " " + item.get("summary", "")).lower()
    if any(kw in text for kw in ["merger", "acquisition", "takeover", "acquire", "buyout"]): return "🏢 M&A"
    if any(kw in text for kw in ["insider", "director buy", "ceo buy", "officer"]): return "👔 Insider"
    if any(kw in text for kw in ["upgrade", "downgrade", "price target", "analyst"]): return "📊 Analyst"
    if any(kw in text for kw in ["hearing", "sources say", "rumor", "rumour"]): return "🐦 Whisper"
    if any(kw in text for kw in ["sec", "investigation", "filing"]): return "⚖️ SEC"
    return "📰 News"

def scan_google(tickers=None):
    items = []
    queries = ["stock rumor", "merger acquisition", "insider trade", "analyst upgrade"]
    if tickers:
        queries = [f"{t} stock {q}" for t in tickers for q in ["rumor", "news", "analyst", "insider"]]
    
    seen = set()
    for q in queries[:20]: # Limit queries
        try:
            url = f"https://news.google.com/rss/search?q={q.replace(' ', '+')}&hl=en-US&gl=US&ceid=US:en"
            r = requests.get(url, timeout=10, headers=HEADERS)
            if not r.ok: continue
            soup = BeautifulSoup(r.text, "xml")
            for entry in soup.find_all("item")[:5]:
                t_text = entry.find("title").get_text()
                if t_text in seen: continue
                seen.add(t_text)
                found = extract_tickers(t_text, filter_list=tickers)
                if tickers and not found: continue
                items.append({
                    "title": t_text,
                    "tickers": found if found else extract_tickers(t_text),
                    "source": entry.find("source").get_text() if entry.find("source") else "Google News",
                    "date": entry.find("pubDate").get_text() if entry.find("pubDate") else "",
                    "category": categorize({"title": t_text}),
                    "impact": calc_impact({"title": t_text})
                })
        except: pass
    return items

def main():
    parser = argparse.ArgumentParser()
    parser.add_argument("--tickers", nargs="+")
    args = parser.parse_args()
    
    print(f"🦅 Lampo Scan: {', '.join(args.tickers) if args.tickers else 'Global'}")
    results = scan_google(args.tickers)
    
    if not results:
        print("No significant signals detected for the selected bucket.")
        return

    results.sort(key=lambda x: x['impact'], reverse=True)
    for i, item in enumerate(results[:10], 1):
        t_str = ", ".join(item['tickers'])
        print(f"\n{i}. {item['category']} (Impact: {item['impact']}/10) - ${t_str}")
        print(f"   {item['title']}")
        print(f"   Source: {item['source']} | {item['date']}")

if __name__ == "__main__":
    main()
