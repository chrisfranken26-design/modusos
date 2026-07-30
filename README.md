# Modus OS

This repository contains the foundation scaffold for Modus OS — a production-grade restaurant operating system.

Project foundation includes:
- Next.js (App Router) with TypeScript (strict mode)
- Tailwind CSS
- Supabase client scaffold
- ESLint + Prettier
- pnpm as package manager
- Dockerfile + docker-compose for local development
- GitHub Actions CI configured to run on pull requests (install, lint, typecheck, build)
- Path alias @/* configured in tsconfig

Getting started

1. Install dependencies
   - pnpm install

2. Create local environment file
   - cp .env.example .env.local
   - Fill in NEXT_PUBLIC_SUPABASE_URL and NEXT_PUBLIC_SUPABASE_ANON_KEY

3. Run locally
   - pnpm dev

Docker (optional)

1. Build and run with docker-compose
   - docker compose up --build

CI

This repository expects the following repository secrets to be set for CI to run correctly:
- NEXT_PUBLIC_SUPABASE_URL
- NEXT_PUBLIC_SUPABASE_ANON_KEY
- SUPABASE_SERVICE_ROLE_KEY

Architecture overview

The repository is organized for modular, enterprise-scale development. Key folders:
- app/ — Next.js App Router routes and route groups. Feature modules will live under route groups like app/(dashboard)/, app/(inventory)/, etc.
- components/ — Reusable UI components and primitives. Components should be small, documented, and composable.
- components/ui — UI utilities and integration points for shadcn/ui-style components.
- lib/ — Platform libraries (supabase client, api helpers, validators).
- styles/ — Tailwind globals and design tokens.

Contribution guidelines

- Create a branch for each change using the naming convention feature/<scope>-<short-description> or fix/<short-description>.
- Open a pull request targeting main (or the appropriate release branch). CI will run on PRs.
- Keep commits focused and atomic. Use conventional commits where possible.

Planned modules (to be added in separate feature PRs):
- Dashboard, Labor, Scheduling, Inventory, Purchasing, Recipes, Production, CRM, Reporting, Payroll, Administration

Next steps

- Add repository secrets for Supabase
- Configure shadcn/ui components and generate the component library (optional)
- Add integration tests and end-to-end tests in a following PR

