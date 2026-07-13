# June 2026 — Instructor social posts

Eight instructors × two variants × two dimensions = **32 posts** (8 included in this folder plus the Adrienne reference set). Format mirrors the website instructor card so the social presence and the site feel like the same brand.

## Roster

| Instructor | Modality | Files |
|------------|----------|-------|
| Adrienne Barrett | Reformer · Strength & Recovery | 4 |
| Cass C. | Reformer · Pre/Postnatal · Rehab | 4 |
| Emma Evans | Reformer · Alignment & Stability | 4 |
| Sarah Carlberg | Reformer · Strength & Flow | 4 |
| Shay Gastellum | Reformer · Strength & Performance | 4 |
| Julia Anderson | Reformer · Alignment & Precision | 4 |
| Christopher Jackson | Yoga · Breath & Presence | 4 |
| Joseph Maul | Yoga · Meditation · MindBody | 4 |
| Keera Ketterman | Vinyasa · Restorative · Deep Stretch | 4 |

## File naming

```
post-{firstname}-{variant}-{size}.html
```

Where:
- `{variant}` = `intro` (meet the instructor) or `spots` (urgent "few seats left")
- `{size}` = `portrait` (1080×1350, Instagram feed-native) or `vertical` (1080×1920, TikTok/Reels-native)

So `post-cass-spots-vertical.html` is the urgent spots-open variant of Cass's post in TikTok dimensions.

## Variants

### Intro post — "Meet the instructor"
- Thin standard card border
- "—— MEET YOUR INSTRUCTOR ——" page eyebrow with bronze accents
- Bio paragraph (their story, not a credential dump)
- CTA: "Book her class →"

### Spots-open post — "Few seats left this week"
- 2px bronze accent card border (urgency signal)
- Pulsing bronze "FEW SPOTS LEFT · THIS WEEK" pill above the card
- Big serif action callout: "Spots open with [Name] this week."
- Short subline with what their class is and an urgency line
- 2px bronze URL-strip top-border
- CTA: "Reserve now →"

Both variants use the **same webpage card layout** — square instructor photo, serif name, bronze mono title, ix-creds with top-border separator. Same DNA as the live `instructors.html` page.

## Sizes

- **Portrait 1080 × 1350** — Instagram feed posts (4:5 aspect, the IG-native size). Also acceptable for Reels covers.
- **Vertical 1080 × 1920** — TikTok video covers and Instagram Stories/Reels full-screen (9:16). Will get black bars on IG feed posts — use the portrait for feed.

## How to export an HTML post to a PNG image

Each HTML file renders at the exact target dimensions. To get a PNG you can upload:

### Method A — Chrome DevTools (recommended, ~30 sec per post)

1. Open the HTML file in Chrome (double-click or drag into a Chrome tab).
2. Press **F12** → click the **device-toolbar icon** in the top-left of DevTools (or `Ctrl+Shift+M`).
3. In the bar at the top of the page, set:
   - Dropdown: **Responsive**
   - Width: `1080`
   - Height: `1350` (portrait) or `1920` (vertical)
   - DPR: `1`
4. The page now renders at exactly the target size.
5. Click the **three-dot menu** at the top of the DevTools strip → **Capture screenshot**.
6. PNG saves to your Downloads folder.

### Method B — Chrome extension

Install **GoFullPage** (free). With the HTML loaded at 100% zoom on a screen that fits the post, click the extension → captures whole page as a PNG.

### Method C — Online HTML-to-image

[htmlcsstoimage.com](https://www.htmlcsstoimage.com) or [htmltopng.com](https://htmltopng.com). You'll need to upload the instructor photo separately or convert it to base64.

## Posting workflow

1. Export the PNG using Method A.
2. Open Instagram / TikTok / Facebook.
3. Create new post → upload the PNG.
4. Copy the matching caption from `captions.md`.
5. Add 8–12 hashtags from the bank at the bottom of `captions.md`.
6. Post.

## Posting cadence

Suggested 14-day rotation gets you through every instructor twice — see the bottom of `captions.md` for the day-by-day plan. Rough rule: one intro per weekday, spots-open on weekends as needed to fill the schedule.

## Notes

- All posts link to **vitalathleticrecovery.com** in the URL strip. The full instructor page is at `/instructors.html` — drive traffic there for prospects to discover other teachers.
- Bios are pulled from the live `instructors.html` page. If you update a bio on the site, update the matching post HTML too so they stay in sync.
- The Adrienne files (`post-adrienne-*`) are the source templates the others were generated from. Edit her first if you want a global design change, then re-run the generator script.
