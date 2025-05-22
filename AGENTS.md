# AGENT Guidance

This repository contains a small Next.js application using the App Router and Tailwind CSS. Components are written in TypeScript under the `components/` directory and pages live under `app/`.

## Conventions
- Use TypeScript for all React components.
- Keep components in the `components/` folder. Shared UI primitives live under `components/ui`.
- Pages and layouts should be placed in the `app/` directory following Next.js routing conventions.
- Use the utility `cn` from `components/ui.tsx` to compose Tailwind CSS class names.

## Development
- Install dependencies with `npm install` (requires network access).
- Run the development server with `npm run dev`.
- Build for production using `npm run build`.

No automated tests are configured. If you add new dependencies, update `package.json` accordingly.
