# Jae Stylez SEO audit (iamjaestylez.com)

Source-level audit of the Next.js/Wix build. Live crawl, GSC and GA4 data were not available in this session, so traffic numbers are not included.

## Why traffic is low

| # | Issue | Impact | Status |
|---|-------|--------|--------|
| 1 | Blog posts rendered in the browser at one URL (`/blog-details?slug=`). Google gets no post text, no unique title, no unique URL. Posts also missing from sitemap. | Critical: every blog post invisible to search | Fixed: one static page per post at `/blog/<slug>/` with BlogPosting + breadcrumb schema; old URL redirects |
| 2 | Blog index and home "Latest posts" loaded by JS, so no post links in HTML | High: no internal links to posts | Fixed: seeded at build time |
| 3 | No city/service-area pages. Only "Stafford" is targeted; Sugar Land, Missouri City, Richmond, SW Houston queries have nothing to rank | High | Added 4 pages under `/areas/` + footer links |
| 4 | No canonical tags on most pages; no Open Graph/Twitter tags | Medium | Fixed on every page via `pageMeta()` |
| 5 | Weak titles: "Hair Styles", "Pricing", "Blog", "Contact" | Medium (CTR) | Rewritten |
| 6 | Home FAQ had no FAQPage schema; breadcrumb schema used relative URLs; landing pages had none | Medium (rich results, AI search) | Fixed |
| 7 | `/pricing` and service price tables load via JS from Wix | Medium: prices not crawlable | Open |
| 8 | Product pages (`/product-details?slug=`) are one JS-rendered URL | Medium: no product rankings | Open |
| 9 | Hero/most images are `<img>` without width/height; five CSS files + Font Awesome + Bootstrap 4 render-blocking | Medium (CWV/LCP) | Open |

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
