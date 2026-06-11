"""
trustpilot-reviews-scraper — Python example.

    pip install apify-client
    export APIFY_TOKEN=...        # https://console.apify.com/account/integrations
    python run.py

Docs: https://apify.com/bovi/trustpilot-reviews-scraper
"""
import os
from apify_client import ApifyClient

client = ApifyClient(os.environ["APIFY_TOKEN"])

run_input = {   'domains': ['amazon.com'],
    'maxReviews': 100,
    'stars': ['1', '2'],
    'language': 'all',
    'dateRange': 'all',
    'sort': 'recency',
    'proxyConfiguration': {'useApifyProxy': True, 'apifyProxyGroups': ['RESIDENTIAL']}}

run = client.actor("bovi/trustpilot-reviews-scraper").call(run_input=run_input)

for item in client.dataset(run["defaultDatasetId"]).iterate_items():
    print(item)
