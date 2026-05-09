# simenguttormsen.com

Personal site. Astro + TypeScript, statically rendered, deployed via GitHub Actions to GitHub Pages.

## Stack

- **Astro** — `.astro` files compile to plain HTML; zero JS at runtime
- **TypeScript** — content lives in typed data files (`src/data/`)
- **Plain CSS** — single `src/styles/main.css`, system fonts

## Project layout

```
.
├── astro.config.mjs
├── tsconfig.json
├── package.json
├── src/
│   ├── layouts/
│   │   └── Site.astro          # shared shell: <head>, header, footer
│   ├── pages/
│   │   ├── index.astro         # /
│   │   ├── research.astro      # /research
│   │   └── career.astro        # /career
│   ├── data/
│   │   ├── site.ts             # name, email, social links, nav config
│   │   ├── papers.ts           # typed Paper[] — abstracts, status, links
│   │   └── projects.ts         # typed Project[] — VAULT, NovaSpeed, PlateMates
│   └── styles/
│       └── main.css
├── public/                     # copied as-is to build root
│   ├── CNAME                   # GitHub Pages custom domain
│   ├── assets/headshot.png
│   ├── papers/                 # paper PDFs
│   └── cv/                     # CV PDF
└── .github/workflows/deploy.yml  # CI: build + deploy on push to main
```

## Develop

```bash
npm install
npm run dev          # http://localhost:4321 with hot reload
```

## Build

```bash
npm run build        # outputs to ./dist
npm run preview      # serve the production build
```

## Add a paper

Edit `src/data/papers.ts` — append an object to the `papers` array. Optional fields auto-resolve in the template.

```ts
{
  title: '...',
  authorship: 'Sole author',
  status: 'Under review at <em>Journal Name</em>, 2026',
  abstract: '...',
  pdf: '/papers/filename.pdf',     // drop the file in public/papers/
  ssrn: 'https://...',             // optional
}
```

## Add a project

Edit `src/data/projects.ts` — same idea.

## Deploy

Pushes to `main` trigger `.github/workflows/deploy.yml`, which runs `npm ci && npm run build` and publishes the `dist/` directory to GitHub Pages. Make sure the repo's Settings → Pages source is set to **GitHub Actions**.

## Adding a blog (later)

When you're ready, install `@astrojs/mdx`, create `src/content/posts/`, define a content collection in `src/content/config.ts`, and add `src/pages/posts/[...slug].astro` + `src/pages/posts/index.astro`. About an hour of work.
