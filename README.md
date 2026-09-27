# ClawChampion Official Website

This folder contains the static website for **ClawChampion**.

## What’s included

- `index.html` home, app links and FAQ
- `how-it-works.html` and `real-vs-virtual.html` product explanations
- `real-machines.mp4` recorded product footage; `hero.mp4` is a compatibility copy of the same verified clip so old media links no longer point to the previous non-product casino segment (the original remains recoverable from Git history)
- `privacy.html` is the dated website privacy policy; `terms.html` is the dated website terms page
- `legal.css` styles the public legal pages
- `robots.txt` and `sitemap.xml`
- Root-level logo and screenshots

## Open content review

The general manager confirmed on 2026-09-26 that earlier versions shipped physical prizes but current gameplay no longer does, and that current GP cannot be exchanged for cash or physical prizes. On 2026-09-27 the general manager authorized replacement of the website Privacy/Terms templates. These new pages are website-scoped, use a fixed revision date, and do not replace the separate privacy policy linked from the App stores or the App's in-App service agreement. The store-linked policy still discusses shipping addresses and needs a separate current-App data-flow check and update. The in-App service-agreement URL `https://dwz-prod.clawchampion.com/explain/0.html` did not resolve on the checked Android build 2.0.32; fixing the website Terms alone does not repair that App link. Do not infer older-order fulfillment or other reward rules from these pages.

## Deploy options

### Option A — Cloudflare Pages (recommended)

1. Create a GitHub repo and upload these files.
2. Cloudflare Dashboard → **Workers & Pages** → **Create** → Pages.
3. Connect the repo, set **Framework preset: None**, and deploy.
4. Add custom domains: `clawchampion.com` and `www.clawchampion.com`.
5. Set redirect rule to use `www` as canonical if needed.

### Option B — Any static hosting

This is pure static HTML/CSS/JS — it can be hosted anywhere.
