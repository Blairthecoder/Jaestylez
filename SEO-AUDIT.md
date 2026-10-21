# Jae Stylez SEO audit (iamjaestylez.com)

Source-level audit of the Next.js/Wix build. Live crawl, GSC and GA4 data were not available in this session, so traffic numbers are not included.

## Search Console findings (last 3 months vs previous 3)

- 67 clicks / 2,046 impressions (up from 6 / 56). US only, 80% of clicks on mobile. Avg position ~11.
- Demand captured so far is mostly branded and product queries: "growth tonic", "lox box", "lox bundles", "crown gel", "alcohol free gel" (about 300 impressions, 0 clicks, positions 8 to 48). Product snippets already show (243 impressions).
- Non-brand local queries have almost no volume yet ("loctician near me" 9 impressions at position 44; "starter locs near me", "microloc installation near me", "silk press near me" each under 10). The site is not ranking for local intent at all.
- Biggest content win: "how often to retwist locs" cluster, 380+ impressions on one post and about 40 more across 25 query variants, 0 clicks, position 11 to 33.
- **Migration problem:** Google still indexes the old Wix URLs under `www`: `/book-online` (258 impressions), `/post/*`, `/product-page/*`, `/service-page/*`, `/stylez`, `/the-lox-box`, `/about-3`, `/about-jae`. No redirects existed, so these were 404ing or splitting signals with the new apex URLs.

### Done from this data

- 301 redirects in `netlify.toml`: `www` to apex, `/book-online`, `/post/*`, `/service-page/*`, `/product-page/*`, `/stylez`, `/the-lox-box`, `/marilyn-jae-cosmetics`, `/about-*`, `/let-s-connect`.
- Static product pages at `/shop/<slug>/` with Product schema (price, availability, brand), replacing the JS-only `/product-details?slug=`.

### Do next from this data

1. Edit product titles/descriptions in Wix to match searches: "Crown Control Alcohol-Free Styling Gel", "Growth Tonic Hair Growth Scalp Oil", "Lox Box Loc Care Bundle".
2. (Retwist landing page now has a one-line answer and FAQ titled "How often should you retwist locs?", using Jae's 4-6 / 6-10 week guidance. Still rewrite the Wix blog post.) Rewrite the retwist post to target "how often to retwist locs" in the title and first paragraph, add a short answer block at the top.
3. In Search Console: add the `www` property and request validation after deploy and watch Pages > Not found for old URLs.
4. Build local pages around Stafford and Sugar Land only after the Google Business Profile is optimized; GBP is where "near me" clicks will come from.

## Why traffic is low

| # | Issue | Impact | Status |
|---|-------|--------|--------|
| 1 | Blog posts rendered in the browser at one URL (`/blog-details?slug=`). Google gets no post text, no unique title, no unique URL. Posts also missing from sitemap. | Critical: every blog post invisible to search | Fixed: one static page per post at `/blog/<slug>/` with BlogPosting + breadcrumb schema; old URL redirects |
| 2 | Blog index and home "Latest posts" loaded by JS, so no post links in HTML | High: no internal links to posts | Fixed: seeded at build time |
| 3 | No city/service-area pages. Only "Stafford" is targeted; Sugar Land, Missouri City, Richmond, SW Houston queries have nothing to rank | High | Added 4 pages under `/areas/` + footer links |
| 4 | No canonical tags on most pages; no Open Graph/Twitter tags | Medium | Fixed on every page via `pageMeta()` |
| 5 | Weak titles: "Hair Styles", "Pricing", "Blog", "Contact" | Medium (CTR) | Rewritten |
| 6 | Home FAQ had no FAQPage schema; breadcrumb schema used relative URLs; landing pages had none | Medium (rich results, AI search) | Fixed |
| 7 | `/pricing` and service price tables load via JS from Wix | Medium: prices not crawlable | Fixed: services fetched at build time and seeded into every page; widgets still refresh live |
| 8 | Product pages (`/product-details?slug=`) are one JS-rendered URL | Medium: no product rankings | Fixed: `/shop/<slug>/` with Product schema and search-friendly titles for known products |
| 9 | Hero/most images are `<img>` without width/height; five CSS files + Font Awesome + Bootstrap 4 render-blocking | Medium (CWV/LCP) | Partly fixed: home hero preloaded, below-fold images lazy. CSS/icon-font trimming still open |

## Needs Jae / Blair (off-site, biggest lever for "near me" bookings)

- Google Business Profile: primary category "Loctician" plus hair salon, add services with prices, weekly photo posts, booking link pointing to `/services#book`, Q&A seeded.
- Review velocity: ask every client for a Google review (link in `site.googleReviewsUrl`); reply to all.
- Citations: Yelp, Apple Business Connect, Bing Places, StyleSeat/Booksy listing, Voyage Houston link (already earned).
- Submit `https://iamjaestylez.com/sitemap.xml` in Search Console; request indexing for the new `/blog/*` and `/areas/*` URLs.
- Instagram/TikTok bio link to the booking page with UTM tags.
- Area pages: add real local detail (client photos, neighborhoods served) before expecting them to rank.

## Next (not yet built)

1. Pre-render `/pricing` price tables at build time.
2. Static product pages at `/shop/<slug>/` with Product schema.
3. Blog calendar: 2 posts/month aimed at "loctician near me", "how much do locs cost in Houston", "starter locs vs instant locs", "retwist frequency".
4. Image dimensions + preload hero image; drop unused CSS/icon fonts.
5. Add `aggregateRating` schema once the Google review count and average are confirmed.
