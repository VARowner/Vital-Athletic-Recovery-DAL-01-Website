# TV Slideshow — Instructor Lineup

Landscape 1920×1080 MP4 for the lobby TV. Loops the 9 instructors, each on screen ~8 seconds, with 1-second crossfades between them.

## The file

**`VAR-instructor-slideshow.mp4`** — 81 seconds, 22 MB, H.264 1080p / 30 fps. Works on any USB-capable TV, Roku, Apple TV, Chromecast, or laptop connected via HDMI.

## Load on a USB drive → plug into TV

1. Copy `VAR-instructor-slideshow.mp4` to the root of any FAT32 or exFAT USB drive.
2. Plug into the TV's USB port.
3. On the TV remote, switch input to **USB** (sometimes called Media Player or Home Screen → USB).
4. Select the video.
5. In the play menu, enable **Repeat All** (or **Loop**) so it replays continuously.
6. Optional: hide the TV's on-screen controls / info bar so nothing overlays the image.

The video ends on a fade back to Adrienne (slide 1), so when the TV loops it feels seamless.

## What's on each slide

| Order | Instructor | Modality |
|-------|-----------|----------|
| 1 | Adrienne Barrett | Reformer · Strength & Recovery |
| 2 | Cass C. | Reformer · Pre/Postnatal · Rehab |
| 3 | Sarah Carlberg | Reformer · Strength & Flow |
| 4 | Shay Gastellum | Reformer · Strength & Performance |
| 5 | Julia Anderson | Reformer · Alignment & Precision |
| 6 | Emma Evans | Reformer · Alignment & Stability |
| 7 | Joseph Maul | Yoga · Meditation · MindBody |
| 8 | Keera Ketterman | Vinyasa · Restorative · Deep Stretch |
| 9 | Christopher Jackson | Yoga · Breath & Presence |

## To update it (add / remove / edit an instructor)

The MP4 is baked from 9 PNG stills in `/frames/`. Each still is built from the layout designed in `layout-a-adrienne.html`.

To swap someone:

1. Update the instructor photo at `../../assets/instructors/{slug}.jpg` (600×600 or larger, headroom at top).
2. Open the matching `slide-XX-{slug}.html` and edit the name / title / bio if it changed.
3. Re-render the PNG in `/frames/` and re-encode the MP4 (Claude can do this end-to-end in one pass — just ask).

## Layouts

- `layout-a-adrienne.html` — **the layout in production.** Photo left, content right.
- `layout-b-adrienne.html` — alternate: full-bleed background with dark gradient overlay. Kept for reference.

## Design notes

- Palette: cream `#f4eeda` on ink `#0d0b08`, bronze `#b88a55` accents. Same as the site.
- Type: serif for names + bio (italic), mono for eyebrow / title / URL bar. Falls back to system fonts when rendered from the sandbox — visually consistent at TV distance.
- Photo crop: object-fit cover, top-quarter emphasis so heads sit in the upper third.
- URL bar always visible so anyone glancing over knows where to book.
