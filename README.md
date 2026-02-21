# ClawChampion Official Website (Static Template)

This folder is a ready-to-deploy static website for **ClawChampion**.

## What’s included

- `index.html` landing page (Download / Features / Community / Company / FAQ)
- `/download/` smart download page (auto-detect Android/iOS)
- `privacy.html` and `terms.html` (templates)
- `robots.txt` and `sitemap.xml`
- `assets/` logo + screenshots

## Customize (must-do)

1. Replace placeholder social links (YouTube/TikTok/X/Facebook) in `index.html`
2. If you want an embedded Discord widget:
   - Enable “Server Widget” in Discord server settings
   - Replace the placeholder with the official `iframe` snippet

## Deploy options

### Option A — Cloudflare Pages (recommended)

1. Create a GitHub repo and upload these files.
2. Cloudflare Dashboard → **Workers & Pages** → **Create** → Pages.
3. Connect the repo, set **Framework preset: None**, and deploy.
4. Add custom domains: `clawchampion.com` and `www.clawchampion.com`.
5. Set redirect rule to use `www` as canonical if needed.

### Option B — Any static hosting

This is pure static HTML/CSS/JS — it can be hosted anywhere.

