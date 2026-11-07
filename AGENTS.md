# AGENTS.md

CRM Dashboard: an Angular 18 customers dashboard in an Nx workspace, using NgRx and a json-server mock API.

## Commands
- Install: `npm ci --legacy-peer-deps` (what CI uses; lockfile is `package-lock.json`)
- Dev server: `npm run start` (alias `npm run dev`, runs `nx serve`)
- Build: `npx nx build crm-dashboard`
- Test (all projects): `npx nx run-many --target=test --all --watch=false`
- Lint: `npx nx run-many --target=lint --all`
- Format check: `npx nx format:check`

## Conventions
- Stack: Angular 18.2, Nx 20.0.3, NgRx 18, TypeScript 5.5, Tailwind 3.4, SCSS, Jest 29, ESLint 8, Prettier 2.
- Structure:
  - `src/app/core`: core module, services, models
  - `src/app/features`: lazy-loaded features (customers, dashboard, help, income, product, promote)
  - `src/app/state`: NgRx root state and entities
  - `libs/shared`: Nx library with shared standalone components, pipes, models and state
  - `src/environments`: environment files (API base URL)
  - `mock-api/db.json`: mock data
- Shared components are standalone; use input signals and `inject()` for DI.
- All components use `ChangeDetectionStrategy.OnPush`.
- Mobile-first styling.
- A Husky pre-commit hook runs lint-staged (ESLint fix plus Prettier format), so fix lint and format errors before committing.
- CI (`.github/workflows/run-tests.yml`) runs the unit tests on pull requests to `main`.

## Boundaries
- Always: add or update tests with every behavior change; run lint and format before committing.
- Ask first: adding a dependency, changing the API base URL or the NgRx state shape.
- Never: skip the pre-commit hook, commit secrets or read .env files.
