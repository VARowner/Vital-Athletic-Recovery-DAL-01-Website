# Vital Athletic Recovery — Website

The marketing site for [Vital Athletic Recovery](https://www.vitalathleticrecovery.com), an East Dallas recovery and movement studio.

Static HTML/CSS/JS — no build step, no framework. Drop it on any static host and it works.

## Structure

```
.
├── index.html                   ← main landing page (memberships, modalities, classes, FAQ, visit)
├── blog.html                    ← blog index
├── blog/
│   ├── post-template.html       ← copy this for new posts
│   └── cold-plunge-first-three-minutes.html
├── assets/                      ← logos and promo imagery
│   ├── var-logo-horizontal-light.png
│   ├── var-logo-horizontal.png
│   ├── var-logo-stacked.png
│   └── promo-7-days-reset.jpg
├── sitemap.xml                  ← for search engines
├── robots.txt
├── llms.txt                     ← for AI search crawlers
└── PUBLISHING_GUIDE.md          ← how to publish a new blog post
```

## What's wired up

- **GymMaster booking** — every CTA routes to the correct GymMaster product or signup page. URLs are mapped in the script block at the bottom of `index.html`.
- **Live class schedule** — the Classes section embeds the GymMaster public class calendar as an iframe.
- **7-Days-for-$59 popup** — surfaces 8 seconds after every page load, routes to the 7-day-pass product in GymMaster.
- **JSON-LD structured data** — HealthClub, LocalBusiness, FAQPage, BreadcrumbList, Product, Service. Pre-built for Google rich results.
- **Mobile menu** — hamburger drawer below 900px; full-screen-friendly down to 375px.

## Publishing a blog post

See `PUBLISHING_GUIDE.md` — six-step weekly workflow:

1. Pick a slug
2. Copy `blog/post-template.html` to `blog/your-slug.html`
3. Fill in every `[[ EDIT THIS ]]` marker
4. Write the body
5. Add the post to `blog.html`
6. Add the post URL to `sitemap.xml`

## Rotating the popup offer

In `index.html`, find the `SPECIALS MODAL` block near the bottom:

1. Swap the hero image at `assets/promo-7-days-reset.jpg` (or replace the `src` with a new file path)
2. Edit the headline, sub-copy, and the "What's included" pills
3. Update the `href` on `<a id="specialClaim">` with the new GymMaster product URL

## Studio info

- 718 N. Buckner Blvd, Suite 416, Dallas, TX 75218
- (214) 308-2123
- East Dallas — Casa Linda / Casa View / Lakewood / White Rock Lake / Lake Highlands

## Hosting

This site is designed for **Cloudflare Pages**:

1. Connect this GitHub repo to Cloudflare Pages
2. Build command: *(leave blank — no build needed)*
3. Build output directory: `/`
4. Point your custom domain at the Cloudflare Pages URL

Every push to `main` will re-deploy automatically. Netlify, Vercel, and GitHub Pages will all work with the same settings.
