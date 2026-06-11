# Trustpilot Reviews — examples

Runnable examples for the **[Trustpilot Reviews Scraper | from $2/1K](https://apify.com/bovi/trustpilot-reviews-scraper)** on Apify.

Scrape Trustpilot reviews for any business. Full fields: rating, title, text, author, country, verified, company reply + date, date of experience. Filter by stars (multi), language, date range. Derived: star % distribution, parse_confidence per record. Residential proxy required.

## What you get per record
`author` · `author_country` · `author_review_count` · `author_verified` · `business_domain` · `business_name` · `business_url` · `date_experience` · `date_published` · `language` · `likes` · `overall_rating` · `page_number` · `parse_confidence` · `rating` · `reply` · `reply_date` · `review_id` · `star_1_pct` · `star_2_pct` · `star_3_pct` · `star_4_pct` · `star_5_pct` · `text` · `title` · `total_reviews` · `url` · `verification_level` · `verified` · `warnings`

## Who uses this
- **Reputation / brand monitoring** — watch a competitor's or your own Trustpilot score and new reviews over time.
- **Voice-of-customer & CX research** — mine review text for recurring complaints and feature requests.
- **Lead-gen / sales intel** — a wave of 1-star reviews on a rival is a displacement opening.

## Quickstart
1. Get your Apify token: <https://console.apify.com/account/integrations>
2. Run a language example below. Both call the actor and print the results.

| Example | File |
|---|---|
| Python (`apify-client`) | [`examples/python/run.py`](examples/python/run.py) |
| JavaScript (`apify-client`) | [`examples/javascript/run.js`](examples/javascript/run.js) |
| Sample output (real records) | [`examples/sample_output.json`](examples/sample_output.json) |

## Example input
```json
{
  "domains": [
    "amazon.com"
  ],
  "maxReviews": 100,
  "stars": [
    "1",
    "2"
  ],
  "language": "all",
  "dateRange": "all",
  "sort": "recency",
  "proxyConfiguration": {
    "useApifyProxy": true,
    "apifyProxyGroups": [
      "RESIDENTIAL"
    ]
  }
}
```

## Links
- **Actor on Apify Store:** <https://apify.com/bovi/trustpilot-reviews-scraper>
- **Apify client docs:** [Python](https://docs.apify.com/api/client/python/) · [JavaScript](https://docs.apify.com/api/client/js/)

---
_MIT-licensed examples. The actor runs on the caller's Apify account (you pay platform compute + per-result)._
