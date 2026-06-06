# Vital Athletic Recovery — Website

The marketing site for [Vital Athletic Recovery](https://www.vitalathleticrecovery.com), an East Dallas recovery and movement studio.

Static HTML/CSS/JS — no build step, no framework. Currently hosted on **GitHub Pages**, DNS managed at Wix.

## Structure

```
.
├── index.html                   ← home (hero video, amenities, memberships, classes, about, FAQ)
├── amenities.html               ← deep-dive on every modality and studio amenity
├── instructors.html             ← Reformer & Yoga instructor roster
├── blog.html                    ← blog index
├── blog/
│   ├── post-template.html       ← copy this for new posts
│   └── cold-plunge-first-three-minutes.html
├── assets/                      ← live-site imagery + the hero video
│   ├── var-logo-horizontal-light.png
│   ├── hero-flythrough.mp4
│   ├── hero-flythrough-poster.jpg
│   ├── promo-7-days-reset.jpg
│   └── instructors/             ← 7 instructor photos, 800×800 JPGs
├── sitemap.xml                  ← for search engines
├── robots.txt
├── llms.txt                     ← for AI search crawlers
├── .gitignore
├── README.md                    ← this file
├── docs/
│   ├── DEPLOY.md                ← deployment walkthrough
│   └── PUBLISHING_GUIDE.md      ← how to publish a new blog post
└── internal/                    ← NOT deployed to GitHub (excluded by .gitignore)
    ├── design-source/           ← logo source files, design crowd zips, unused logo PNGs
    └── staff-guide/             ← Staff modality guide PDF
```

## What's wired up

- **GymMaster booking** — every CTA routes to the right GymMaster product or signup. URLs are mapped in the script block at the bottom of `index.html`.
- **Live class schedule** — the Classes section embeds the GymMaster public class calendar.
- **7-Days-for-$59 popup** — surfaces 8 seconds after every page load, routes to the 7-day-pass product.
- **JSON-LD structured data** — HealthClub, LocalBusiness, FAQPage, BreadcrumbList, Product, Service entries.
- **Google Tag Manager** — `GTM-P73DQ4WR` installed on every page; configure GA4 (and any other tag) inside GTM.
- **Mobile menu** — hamburger drawer below 900px; the hero video is replaced with the poster image on phones.
- **Hidden instructor cards** — instructors without real photos are auto-hidden via CSS until a photo is dropped in.

## Updating the site

Edit any file in this workspace folder. Then push to GitHub via the web UI:

1. Open https://github.com/VARowner/Vital-Athletic-Recovery-DAL-01-Website
2. Click **Add file → Upload files** (or navigate to the file and use the pencil icon)
3. Drag in the changed file(s) → commit
4. GitHub Pages rebuilds in ~30-60 seconds

See `docs/DEPLOY.md` for the full deployment walkthrough.

## Publishing a blog post

See `docs/PUBLISHING_GUIDE.md` — six-step weekly workflow.

## Rotating the popup offer

In `index.html`, find the `SPECIALS MODAL` block near the bottom:

1. Swap the hero image at `assets/promo-7-days-reset.jpg` (or replace the `src`)
2. Edit the headline, sub-copy, and "What's included" pills
3. Update the `href` on `<a id="specialClaim">` with the new GymMaster product URL

## Adding new instructors

Drop a square JPG into `assets/instructors/firstname-lastname.jpg`. In `instructors.html`:

- Add an `<article class="ix-card">` with the photo, name, title, bio, and credentials
- Remove the `data-placeholder` attribute and the `<div class="ix-avatar">` (use `<img class="ix-photo">` instead)

## Studio info

- 718 N. Buckner Blvd, Suite 416, Dallas, TX 75218
- (214) 308-2123
- East Dallas — Casa Linda / Casa View / Lakewood / White Rock Lake / Lake Highlands

## Hosting

Currently on **GitHub Pages** with DNS at Wix:

- Repo: `VARowner/Vital-Athletic-Recovery-DAL-01-Website`
- GitHub Pages serves from `main` branch / root
- Custom domain: `www.vitalathleticrecovery.com`
- A records in Wix point apex to GitHub's IPs (`185.199.108-111.153`)
- CNAME `www` in Wix points to `varowner.github.io`
- HTTPS via Let's Encrypt (auto-provisioned by GitHub Pages)
