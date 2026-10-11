# Sourci

Sourci is a polished, local-first sourcing-management MVP. It brings a product brief, supplier comparison, landed-cost view, sample approval, production timeline, QC plan, and shipping record into one responsive Next.js workspace.

## Run locally

```bash
npm install
npm run dev
```

Open `http://localhost:3000`. Use `npm run build` to create a production build.

## Deployment

This repository is connected to the **sourci** Vercel project. Pushes to `main` automatically create a production deployment. In Vercel, confirm the project root is this repository root and the framework preset is Next.js.

## Notes

The MVP uses seeded mock data and browser-local UI state only: no authentication, backend, or database is required.
