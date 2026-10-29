const HOST = 'clashjiedianlab.com';
const KEY = '332c5c76083c4205a44597c2a7dcda19';
const KEY_LOCATION = `https://${HOST}/${KEY}.txt`;
const SITEMAP_URL = `https://${HOST}/sitemap.xml`;

async function fetchUrlsFromSitemap() {
  console.log(`Fetching sitemap from ${SITEMAP_URL}...`);
  const res = await fetch(SITEMAP_URL);
  if (!res.ok) {
    throw new Error(`Failed to fetch sitemap: ${res.status} ${res.statusText}`);
  }
  const xml = await res.text();
  const matches = [...xml.matchAll(/<loc>(https:\/\/[^<]+)<\/loc>/g)];
  const urls = matches.map((m) => m[1]);
  return [...new Set(urls)];
}

async function submitToIndexNow(endpoint, payload) {
  console.log(`Submitting ${payload.urlList.length} URLs to ${endpoint}...`);
  try {
    const res = await fetch(endpoint, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json; charset=utf-8',
      },
      body: JSON.stringify(payload),
    });

    const status = res.status;
    const body = await res.text();
    console.log(`[${endpoint}] Response status: ${status} ${res.statusText}`);
    if (status === 200 || status === 202) {
      console.log(`[${endpoint}] Success!`);
    } else {
      console.warn(`[${endpoint}] Response body:`, body || '(empty)');
    }
    return { endpoint, status, body };
  } catch (err) {
    console.error(`[${endpoint}] Error submitting:`, err.message);
    return { endpoint, status: 0, error: err.message };
  }
}

async function main() {
  console.log(`IndexNow Key: ${KEY}`);
  console.log(`Key Location: ${KEY_LOCATION}`);

  const urls = await fetchUrlsFromSitemap();
  console.log(`Found ${urls.length} URLs to submit.`);

  const payload = {
    host: HOST,
    key: KEY,
    keyLocation: KEY_LOCATION,
    urlList: urls,
  };

  const endpoints = [
    'https://api.indexnow.org/indexnow',
    'https://www.bing.com/indexnow',
  ];

  for (const endpoint of endpoints) {
    await submitToIndexNow(endpoint, payload);
  }

  console.log('\nIndexNow submission finished.');
}

main().catch((err) => {
  console.error('Fatal error:', err);
  process.exit(1);
});
