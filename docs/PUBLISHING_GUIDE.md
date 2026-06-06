# Vital Athletic Recovery — Weekly Blog Publishing Guide

A short, repeatable workflow for publishing one real post per week.

## The system at a glance

```
New Website workspace/
├── index.html                          ← homepage
├── blog.html                           ← blog index (the post list)
├── sitemap.xml                         ← search engine index
├── blog/                               ← all individual blog posts live here
│   ├── post-template.html              ← copy this for every new post
│   └── cold-plunge-first-three-minutes.html   ← example: a real published post
└── PUBLISHING_GUIDE.md                 ← this file
```

Every published post is its own HTML file inside the `blog/` folder. The blog index page (`blog.html`) is what visitors land on; each entry on that page is a link to one of those individual post files.

## The weekly workflow (six steps)

Once you have a draft written (or you describe it to Claude and have Claude write it), the publishing flow takes about ten minutes.

### 1. Pick the post's slug

The slug is the part of the URL after `/blog/`. Keep it short, descriptive, and lowercase, with hyphens between words.

| Title | Good slug | Bad slug |
|---|---|---|
| The first three minutes in a cold plunge | `cold-plunge-first-three-minutes` | `the-first-three-minutes-in-a-cold-plunge-at-vital-athletic-recovery` |
| Why the Finnish were right about saunas | `finnish-sauna-science` | `Finnish_Sauna_Why_Theyre_Right.html` |
| Reformer for people who don't stretch | `reformer-for-non-stretchers` | `RPS101.html` |

### 2. Copy the template

Start from `blog/post-template.html`. Save the copy as `blog/your-slug.html`.

### 3. Fill in every `[[ EDIT THIS ]]` marker

The template has bracketed markers everywhere a value needs to change. Walk top to bottom — none of them are optional. The main fields:

- **Title** — short, declarative, specific. Italicize the punch word with `<em>...</em>`.
- **Slug** — appears in three places: the file name, the canonical URL, and the JSON-LD `mainEntityOfPage`.
- **Description** — one or two sentences. Roughly 155 characters. This is what shows up in Google results and AI search.
- **Date** — today's date in both human format (`May 21, 2026`) and ISO format (`2026-05-21`) where requested.
- **Category** — pick one: **Recovery**, **Movement**, **Science**, **Member Stories**, **Studio Notes**.
- **Read time** — count words ÷ 250, round to nearest minute. A 1,200-word post is ~5 minutes.
- **Hero image URL** — full `https://...` link to the image. Use a real photo from your studio when possible.
- **Word count** — ballpark integer in the JSON-LD.

### 4. Write the body

Inside the `<div class="post-body">` block. The template supports:

- **Paragraphs** — wrap each one in `<p>...</p>`.
- **Section headings** — `<h2>Section name</h2>` for the main beats of the post.
- **Subheadings** — `<h3>Sub-section</h3>` when you need finer structure.
- **Bold for emphasis** — `<strong>word or phrase</strong>`. Use sparingly — two or three per section, no more.
- **Italics** — `<em>word</em>` for tone or technical terms.
- **Pull quotes** — wrap a single distilled sentence in `<blockquote><p>...</p></blockquote>`. One per post is plenty.
- **Lists** — `<ul><li>...</li></ul>` for bullets, `<ol>` for numbered.
- **Links** — `<a href="https://...">text</a>`. External links get `target="_blank" rel="noopener"`.
- **Inline image** — `<figure><img src="..." alt="..." /><figcaption>Caption.</figcaption></figure>`.

### 5. Add the post to the index

Open `blog.html` and find the `<main class="posts">` block. Copy any existing `<a href="#" class="post">...</a>` block and paste it at the top (newest first). Update:

- The `href` to `blog/your-slug.html`
- The category, date, and read time in the `<div class="post-meta">`
- The `<h2>` title (plain text — no `<em>` tags here, the index uses cleaner type)
- The `<p>` excerpt (one or two sentences — usually a tightened version of the post's lede)

### 6. Add the post to the sitemap

Open `sitemap.xml` and append a new `<url>` block at the bottom (before `</urlset>`):

```xml
<url>
  <loc>https://www.vitalathleticrecovery.com/blog/your-slug.html</loc>
  <lastmod>2026-05-21</lastmod>
  <changefreq>monthly</changefreq>
  <priority>0.7</priority>
</url>
```

Save, upload all the changed files to your web host, and the post is live.

## The writing rhythm

You don't need to write every week from scratch. Most studios publish on a **3-1-1** cadence:

- **3 evergreen posts** that teach (modality science, how-to, FAQ-style explainers). These never go stale and pull in long-tail SEO traffic for years.
- **1 member story** every fourth week. Short. One quote, one transformation, one specific detail.
- **1 studio note** roughly once a month. A new modality, a class change, a community win.

The example post in the system (`cold-plunge-first-three-minutes.html`) is an evergreen. Use it as the calibration for length, voice, and structure.

## Voice principles (the short version)

- **One idea per post.** Don't bury two articles in one piece.
- **Concrete over abstract.** "The first ten seconds are the loudest" beats "the initial phase is the most challenging."
- **Plain language for the science.** A member should be able to repeat your explanation to a friend an hour later.
- **A pull quote per post.** It gives the eye a place to rest and gives social media a clip to share.
- **Always close with a CTA.** Either the day pass or the Founder membership — match it to where the reader's curiosity is.

## When you want help

Tell Claude the topic and the angle. Claude will write the post, drop it into the `blog/` folder, update the index, and update the sitemap — usually in one pass.

Examples of useful asks:
- "Write a 700-word post about traditional sauna vs. infrared, evergreen, ready to publish."
- "Draft a member story: a Lakewood mom who came in for cold plunge and stayed for the sleep effects."
- "Publish my draft." (Then paste the text. Claude formats and files it.)

## Quality checklist before going live

Before uploading a new post, verify:

- [ ] Title appears in browser tab when you open the file locally
- [ ] Hero image loads (or hero block deleted if no image)
- [ ] No `[[ EDIT THIS ]]` markers left in the file
- [ ] All internal links work (the "Back to all posts" link, the CTA card)
- [ ] Post shows up at the top of `blog.html` with correct date and excerpt
- [ ] Post URL added to `sitemap.xml`
- [ ] Submit the updated sitemap to Google Search Console (one time per update)

That's the whole loop. One post, six steps, ten minutes.
