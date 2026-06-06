# Deploying to GitHub + Cloudflare Pages

A one-time setup. After this is wired up, every change you push to GitHub will rebuild the live site automatically.

## Part 1 — Upload to GitHub (one time, ~10 minutes)

### Step 1. Create the repo

1. Sign in at [github.com](https://github.com).
2. Click the **+** icon in the top-right → **New repository**.
3. Name it `vital-athletic-recovery-dal-01-website` (or `var-website` — your call; keep it short).
4. Set it to **Public** (required for free Cloudflare Pages tier; private also works on paid plans).
5. **Do not** check "Add a README" — we already have one.
6. Click **Create repository**.

### Step 2. Upload the files

On the new empty repo page, you'll see a link near the top that says **"uploading an existing file"** — click it.

Then drag-and-drop these items from your `New Website workspace` folder into the browser:

✅ **Drag these in:**

- `index.html`
- `blog.html`
- `sitemap.xml`
- `robots.txt`
- `llms.txt`
- `README.md`
- `.gitignore`
- `PUBLISHING_GUIDE.md`
- `DEPLOY.md`
- The entire `assets/` folder
- The entire `blog/` folder

❌ **Do NOT drag these in** (they're internal — keep them in OneDrive only):

- `Updated VAR LOGO/` folder (design source files)
- `VAR_Staff_Guide_Modality_Benefits.pdf` (internal staff training)

### Step 3. Commit

At the bottom of the upload page:

- **Commit message:** `Initial site upload`
- Leave the radio set to **Commit directly to the `main` branch**
- Click **Commit changes**

GitHub will take 30–60 seconds to process. When it's done, you'll see all the files listed on the repo home page.

---

## Part 2 — Wire up Cloudflare Pages (one time, ~5 minutes)

### Step 1. Create a Cloudflare account (if you don't have one)

Sign up at [cloudflare.com](https://cloudflare.com). Free.

### Step 2. Create the Pages project

1. Inside Cloudflare Dashboard → **Workers & Pages** in the left sidebar.
2. Click **Create application** → **Pages** tab → **Connect to Git**.
3. Authorize Cloudflare to access your GitHub. Select the `vital-athletic-recovery-dal-01-website` repo.
4. **Set up builds and deployments:**
   - **Project name:** `vital-athletic-recovery-dal-01-website` (this becomes part of the temporary URL, e.g. `vital-athletic-recovery-dal-01-website.pages.dev`)
   - **Production branch:** `main`
   - **Framework preset:** **None**
   - **Build command:** *(leave empty)*
   - **Build output directory:** `/` *(just a forward slash)*
5. Click **Save and Deploy**.

Cloudflare builds the site in ~30 seconds. When done, you'll see a green checkmark and a URL like `vital-athletic-recovery-dal-01-website.pages.dev` — that's your live site.

### Step 3. Point your Wix-hosted domain at Cloudflare Pages

Your domain `vitalathleticrecovery.com` is currently managed by Wix. You don't need to transfer the domain — just update the DNS records inside Wix to point at Cloudflare Pages. The Wix-hosted site will stop responding once DNS switches over, so the new Cloudflare site takes over the domain seamlessly.

#### A. Get the CNAME target from Cloudflare

1. In your Cloudflare Pages project (`vital-athletic-recovery-dal-01-website`) → **Custom domains** tab.
2. Click **Set up a custom domain**.
3. Enter `www.vitalathleticrecovery.com` and click **Continue**.
4. Cloudflare displays a CNAME target — something like `vital-athletic-recovery-dal-01-website.pages.dev`. **Copy this exact value** — you'll paste it into Wix.
5. Leave this Cloudflare page open. It will say "Verifying" — that's fine; we'll come back after the Wix step.

#### B. Update DNS inside Wix

1. Sign in at [wix.com](https://www.wix.com).
2. Go to **Settings → Domains**.
3. Find `vitalathleticrecovery.com` in the list and click **Manage**.
4. Click **Advanced** → **DNS Records** (or "Edit DNS").
5. **Edit the existing `www` CNAME record** (or add one if there isn't one):
   - **Host:** `www`
   - **Points to:** *(paste the Cloudflare CNAME target from Step A)*
   - **TTL:** `1 hour` (or default)
   - Save.
6. **Handle the apex `vitalathleticrecovery.com`** (the version without `www`):
   - Wix doesn't let you point the apex at a CNAME directly. Two ways forward:
     - **Easiest:** In Wix Domains → set up domain forwarding so `vitalathleticrecovery.com` redirects to `www.vitalathleticrecovery.com`. Wix handles this with a built-in redirect tool.
     - **Alternative:** If Wix offers an "ANAME" or "ALIAS" record type, use that pointing to `vital-athletic-recovery-dal-01-website.pages.dev`.
7. **Remove or disable the existing Wix A records** for the domain — those are what currently route traffic to the Wix-hosted site. Once they're gone, the Cloudflare CNAME takes over.

#### C. Verify

1. Return to the Cloudflare Pages **Custom domains** tab.
2. Cloudflare automatically polls DNS every few minutes. The status will flip from "Verifying" to "Active" once the CNAME propagates.
3. DNS changes inside Wix usually propagate in 15–60 minutes. Occasionally up to a few hours.
4. Once active, visit `www.vitalathleticrecovery.com` in an incognito window — you should see the new site.

#### Heads up: cutover timing

The moment you change the `www` CNAME in Wix, traffic starts flowing to Cloudflare Pages. There's no separate "switch live" button — DNS is the switch. Recommended sequence:

1. Get the Cloudflare Pages site fully built and tested on the temporary `.pages.dev` URL first.
2. When you're ready to go live, update Wix DNS.
3. The old Wix-hosted site stays at `editor.wix.com` (you can still log into it), but it stops serving traffic at the public domain.

If you want to keep both sites running side-by-side for a few days as a comparison, you can leave the domain on Wix and just share the `.pages.dev` URL with a few people for a soft-launch period. Switch DNS only when you're confident.

---

## Updating the site after launch

Any time you (or Claude) edit a file in this workspace:

1. Open the GitHub repo in your browser.
2. Navigate to the file you changed (e.g. `index.html`).
3. Click the pencil icon (top-right of the file view) → paste the new content, or
4. Use the **Add file → Upload files** option to replace files via drag-drop.
5. Commit the change.
6. Cloudflare Pages detects the push and rebuilds automatically. The live site updates in ~30 seconds.

For bigger updates (multiple files at once), the easiest path is to delete the existing files in the repo and re-upload the new versions. GitHub's web UI tolerates this fine.

---

## A note on OneDrive

The workspace folder lives inside OneDrive, which is fine. You're using GitHub's web UI to upload — that doesn't involve `git` running locally, so OneDrive's sync engine and git won't fight each other. Everything stays clean.

If you ever want to switch to GitHub Desktop or the command line later, the recommended move is to clone the repo to a folder *outside* OneDrive (e.g. `C:\Users\mattx\Projects\var-website\`).
