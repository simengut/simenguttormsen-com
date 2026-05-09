# simenguttormsen.com — source

Single-page personal site. Plain HTML + CSS, no build step, no JS.

## Files

```
index.html
styles.css
papers/        # drop your paper PDFs here (wshape-iv.pdf, iv-spillover.pdf)
cv/            # drop the CV PDF here (Simen_Guttormsen_CV.pdf)
assets/        # put a headshot here when you're ready, then update index.html
```

## Local preview

```bash
cd website
python3 -m http.server 8000
# open http://localhost:8000
```

## To-do before launch

- [ ] Add `assets/headshot.jpg` (or .webp), then replace the `<div class="photo-placeholder">` in `index.html` with `<img src="assets/headshot.jpg" alt="Simen Guttormsen">`.
- [ ] Drop `papers/wshape-iv.pdf` (the Quantitative Finance submission).
- [ ] Drop `papers/iv-spillover.pdf` (the JFM submission).
- [ ] Drop `cv/Simen_Guttormsen_CV.pdf`.
- [ ] Upload both papers to SSRN, then replace the `https://www.ssrn.com/` placeholder URLs in `index.html` with the real SSRN links and remove the `(forthcoming)` notes.
- [ ] If the brother attribution in the VAULT paragraph isn't accurate, edit the About line in `index.html`.

## Deploy

Cheapest path:

1. `git init && git add . && git commit -m "Initial site"`
2. Push to GitHub (`gh repo create simengut/simenguttormsen.com --public --source . --push`)
3. In Cloudflare Pages: Connect → simengut/simenguttormsen.com → Build command: *(none)* → Output directory: `/`.
4. Add custom domain `simenguttormsen.com` in Cloudflare Pages settings.
5. Update DNS (or transfer the domain to Cloudflare for at-cost renewal).

GitHub Pages works equally well — pick whichever you prefer.

## Editing later

Plain HTML by design — no framework lock-in. Add a paper:

```html
<article class="paper">
  <h3>Title of paper</h3>
  <p class="paper-meta">Status. Year.</p>
  <p class="paper-abstract">Abstract...</p>
  <p class="paper-links">
    <a href="papers/file.pdf">PDF</a>
    <span class="sep">·</span>
    <a href="https://ssrn.com/...">SSRN</a>
  </p>
</article>
```
