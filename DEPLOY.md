# Deploying to GitHub + Cloudflare Pages

A one-time setup. After this is wired up, every change you push to GitHub will rebuild the live site automatically.

## Part 1 — Upload to GitHub (one time, ~10 minutes)

### Step 1. Create the repo

1. Sign in at [github.com](https://github.com).
2. Click the **+** icon in the top-right → **New repository**.
3. Name it `vital-athletic-recovery` (or `var-website` — your call; keep it short).
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
3. Authorize Cloudflare to access your GitHub. Select the `vital-athletic-recovery` repo.
4. **Set up builds and deployments:**
   - **Project name:** `vital-athletic-recovery` (this becomes part of the temporary URL, e.g. `vital-athletic-recovery.pages.dev`)
   - **Production branch:** `main`
   - **Framework preset:** **None**
   - **Build command:** *(leave empty)*
   - **Build output directory:** `/` *(just a forward slash)*
5. Click **Save and Deploy**.

Cloudflare builds the site in ~30 seconds. When done, you'll see a green checkmark and a URL like `vital-athletic-recovery.pages.dev` — that's your live site.

### Step 3. Point your custom domain at it

1. Inside the Cloudflare Pages project → **Custom domains** tab.
2. Click **Set up a custom domain**.
3. Enter `www.vitalathleticrecovery.com`.
4. Cloudflare gives you a CNAME record to set. If your domain is already on Cloudflare DNS, it's added automatically. If your domain is elsewhere (GoDaddy, Namecheap, etc.), copy the CNAME and paste it into that registrar's DNS settings.
5. Repeat for the apex `vitalathleticrecovery.com` (Cloudflare will configure a redirect from the apex to www).
6. DNS propagation usually completes in 5–60 minutes.

Once the domain is verified, every visitor to `vitalathleticrecovery.com` lands on the new site.

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
