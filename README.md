# Crystal Kizor — Stage 1 Assessment

A responsive personal-brand landing page for Crystal Kizor, built for the Web Developer Stage 1 assessment.

## Stack

- React 19
- Vite
- Tailwind CSS 4
- TypeScript
- Lucide React

## Experience

The landing page treats Crystal as the umbrella brand and presents Studio COKA as the centre of the practice, with ELEvated, The Effective Architect, speaking, AKO Alliance, Alive and Free, and Crystal's research/writing as connected paths rather than equal business cards.

The supplied imagery is used as temporary visual studies, consistent with the assessment brief. Public destinations from the provided content model are reused; no unsupported achievements, testimonials, statistics, or invented project claims are introduced.

## Routes

- `/` — main landing page
- `/notes` — assessment design, AI product, and analytics notes

## Run locally

```bash
npm install
npm run dev
```

The Vite development server uses port `8080` by project convention.

## Validate

```bash
npm run typecheck
npm run lint
npm run build
```

## Assessment notes

The AI concept is **Studio Notes**, a retrieval-augmented study companion for The Effective Architect. The analytics response focuses on intent, pathway clicks, enquiry funnel performance, device differences, and Core Web Vitals.

The detailed responses are kept in `src/content/assessment.ts` and surfaced at `/notes`.

## Deployment

Deploy as a standard Vite static site. Run the production build locally before publishing the `dist` directory or connecting the repository to a static hosting provider.

## GitHub Pages deployment

This Vite project is configured for the repository project site at `https://niy42.github.io/Crystal/`.
The `base` option in `vite.config.ts` is set to `/Crystal/`, and public media references use `import.meta.env.BASE_URL` so they resolve correctly when the app is hosted under that path.
