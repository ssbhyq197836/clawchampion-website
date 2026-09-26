# ClawChampion Official Website

This folder contains the static website for **ClawChampion**.

## What’s included

- `index.html` home, app links and FAQ
- `how-it-works.html` and `real-vs-virtual.html` product explanations
- `real-machines.mp4` recorded product footage; `hero.mp4` retained as the previous source video
- `privacy.html` and `terms.html` are still public templates, not reviewed legal documents
- `robots.txt` and `sitemap.xml`
- Root-level logo and screenshots

## Open content review

The store-linked privacy policy discusses shipping information, while the previous homepage FAQ said that no physical shipping exists. That FAQ is removed pending a current product/legal decision. Do not publish a rewards or shipping answer from this repository until the app rules and policies agree. Replace the public Privacy/Terms templates with approved documents and fixed revision dates.

## Deploy options

### Option A — Cloudflare Pages (recommended)

1. Create a GitHub repo and upload these files.
2. Cloudflare Dashboard → **Workers & Pages** → **Create** → Pages.
3. Connect the repo, set **Framework preset: None**, and deploy.
4. Add custom domains: `clawchampion.com` and `www.clawchampion.com`.
5. Set redirect rule to use `www` as canonical if needed.

### Option B — Any static hosting

This is pure static HTML/CSS/JS — it can be hosted anywhere.
