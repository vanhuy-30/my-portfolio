# Ly Van Huy — Portfolio

Bilingual (EN / VI) personal portfolio for Ly Van Huy, Software Engineer. Built to present experience, projects, and contact details for recruiters and hiring managers.

**Live stack:** Next.js 15 · React 19 · TypeScript · Tailwind CSS · Framer Motion · Cloudflare Workers (OpenNext)

## Features

- Light-first UI with dark mode and warm terracotta theme
- English / Vietnamese locale toggle
- Sections: Hero, About, Experience, Projects (case studies), Architecture, Skills, Contact
- Motion and interaction polish (scroll progress, reveals, case-study sheet)
- Deployed to Cloudflare Workers via `@opennextjs/cloudflare`

## Getting started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

| Script | Purpose |
| --- | --- |
| `npm run dev` | Local Next.js dev server (Turbopack) |
| `npm run build` | Production build for Cloudflare Workers (OpenNext) |
| `npm run start` | Serve a local Next.js production build |
| `npm run lint` | ESLint |
| `npm run preview` | Build + preview in the Workers runtime locally |
| `npm run deploy` | Build + deploy to Cloudflare Workers |

## Project structure

```
src/
  app/           # App Router (layout, page, robots, sitemap)
  components/    # UI, layout, sections, projects
  data/          # Profile, experience, projects, skills
  i18n/          # EN / VI copy
  lib/           # Theme, site helpers, links
public/          # Static assets (images, _headers)
wrangler.jsonc   # Cloudflare Worker config (includes `previews`)
open-next.config.ts
```

Content lives mainly under `src/data/` and `src/i18n/`. Update those files to change copy, projects, or contact links without restructuring the UI.

## Deploy (Cloudflare Workers)

This app uses OpenNext + Wrangler. Workers Builds expects a Wrangler config with a `previews` block for branch preview deploys.

```bash
# Local Workers preview
npm run preview

# Production deploy (requires Cloudflare auth)
npm run deploy
```

CI: connect the GitHub repo to a Worker in the Cloudflare dashboard. Build command should run `npm run build` (OpenNext). Preview/deploy uses Wrangler (`wrangler preview` / `wrangler deploy`).

## License

See [LICENSE](./LICENSE).
