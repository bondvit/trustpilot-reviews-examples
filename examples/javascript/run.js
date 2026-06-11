/**
 * trustpilot-reviews-scraper — JavaScript example.
 *
 *   npm install apify-client
 *   export APIFY_TOKEN=...        # https://console.apify.com/account/integrations
 *   node run.js
 *
 * Docs: https://apify.com/bovi/trustpilot-reviews-scraper
 */
import { ApifyClient } from 'apify-client';

const client = new ApifyClient({ token: process.env.APIFY_TOKEN });

const input = {
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
};

const run = await client.actor('bovi/trustpilot-reviews-scraper').call(input);
const { items } = await client.dataset(run.defaultDatasetId).listItems();
for (const item of items) console.log(item);
