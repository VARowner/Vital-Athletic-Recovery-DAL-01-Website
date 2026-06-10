# June 2026 — Open Classes social posts

Two brand-matched Instagram + Meta posts to drive class bookings, both using the same studio photo (`yoga-studio.jpg`).

## Files

**Photos:**
- `yoga-studio.jpg` — backlit VA logo + bolster mats (used by Post 1A and 1B)
- `pilates-studio.jpg` — Reformer studio with magic rings on the wall + backlit VA logo (used by Post 2)

**Post designs:**
- `post-1-general.html` — **"Move with intention."** square 1080×1080 (evergreen, yoga photo)
- `post-1-general-portrait.html` — **"Move with intention."** portrait 1080×1350 (evergreen, recommended)
- `post-1-stillopen.html` — **"Spots still open."** square 1080×1080 (urgency / mid-week, yoga photo)
- `post-1-stillopen-portrait.html` — **"Spots still open."** portrait 1080×1350 (urgency, recommended)
- `post-2-reformer.html` — **"Precision over performance."** square 1080×1080 (Reformer focus, Pilates photo)
- `post-2-reformer-portrait.html` — **"Precision over performance."** portrait 1080×1350 (Reformer, recommended)
- `post-3-yoga.html` — **"Re-pattern the breath."** square 1080×1080 (Yoga focus, yoga photo)
- `post-3-yoga-portrait.html` — **"Re-pattern the breath."** portrait 1080×1350 (Yoga, recommended)

**Copy + docs:**
- `captions.md` — Instagram + Meta captions, hashtag bank, schedule notes
- `README.md` — this file

## Posting cadence (suggested 4-post rotation)

- **Monday:** Post 1A — "Move with intention" (evergreen, sets the week's tone)
- **Tuesday:** Post 2 — "Precision over performance" (Reformer-specific)
- **Wednesday:** Post 3 — "Re-pattern the breath" (Yoga-specific)
- **Thursday:** Post 1B — "Spots still open" (urgency, fills remaining seats)
- Repeat next week with fresh photos if you have them

## Exporting an HTML post to a PNG image (for actual posting)

Each `.html` file is designed at its exact post dimensions — Instagram's standard square (1080 × 1080) or portrait (1080 × 1350).

### Method A — Chrome DevTools (recommended, ~30 sec per post)

1. Open the `.html` file in Chrome (double-click it, or drag into a Chrome tab).
2. Press **F12** → click the **device toolbar icon** (top-left of the DevTools panel) or press **Ctrl+Shift+M**.
3. In the bar that appears at the top of the page, set:
   - **Responsive** dropdown
   - Width: `1080`
   - Height: `1080` (square) or `1350` (portrait)
   - DPR (device pixel ratio): `1`
4. The page now renders at exactly the target size.
5. Click the **three-dot menu** at the top of the DevTools strip → **Capture screenshot**.
6. PNG saves to your Downloads folder.

### Method B — Online HTML-to-image converter

1. Go to https://www.htmlcsstoimage.com (free tier, 50 images/month) or https://htmltopng.com
2. Paste the HTML file content (include the `yoga-studio.jpg` reference — you may need to upload it separately or convert it to base64).
3. Set output size to 1080 × 1080 or 1080 × 1350.
4. Download PNG.

### Method C — Browser screenshot extension

1. Install **GoFullPage** (Chrome extension, free).
2. Open the HTML in Chrome at 100% zoom on a screen that fits the post wide.
3. Click the extension → captures the whole page.

## Posting workflow

1. Export PNG using Method A.
2. Open Instagram (or Facebook Meta Business Suite).
3. Create new post → upload the PNG.
4. Paste the matching caption from `captions.md`.
5. Add 8–12 hashtags from the bank.
6. Post.

## Notes

- All posts route to `vitalathleticrecovery.com` — the home page Classes section embeds the live GymMaster schedule, so v