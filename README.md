# CrmDashboard

## Libraries

    - Nx 20
    - Angular 18
    - Tailwind
    - Eslint
    - Jest
    - Prettier
    - Husky
    - Lint staged

## Run tasks

To run the dev server for your app, use:

```sh
npx nx serve crm-dashboard
```

To create a production bundle:

```sh
npx nx build crm-dashboard
```

To run lint checks

```sh
npx nx lint
```

To run prettier format

```sh
npx nx format:check
```

### Pre-commit Hook

This project uses **Husky** along with **lint-staged**, **ESLint**, and **Prettier** to ensure code quality before committing.

- **Husky** is configured to run on pre-commit, executing checks for linting and formatting.
- **lint-staged** ensures that only the files that have been staged (modified and added to the commit) are checked.
- **ESLint** runs to catch any potential JavaScript/TypeScript code issues.
- **Prettier** ensures consistent code formatting.

#### How it works:

1. When you run `git commit`, Husky triggers the pre-commit hook.
2. `lint-staged` runs ESLint and Prettier on all staged files.
3. If any errors are found by ESLint or if files are not formatted according to Prettier's rules, the commit will fail, and you will need to fix the issues before committing.

This ensures that the codebase stays clean and consistent.
