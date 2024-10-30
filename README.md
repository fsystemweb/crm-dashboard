# CRM Dashboard

## Libraries

    - Node v20
    - Nx v20
    - Ngrx
    - Angular v18
    - Tailwind
    - Eslint
    - Jest
    - Prettier
    - Husky
    - Lint staged
    - JsonServer (Mock API)

    This project was created using Node v20

## Run tasks

Install project locally, use:

```sh
npm i
```

To start local app, with Angular server and Mock API, use:

```sh
npm run start
```

To run only the dev server for Angular, use:

```sh
npx nx serve crm-dashboard
```

To start only the json-server(API-mock), use:

```sh
npm run jsonserver
```

To run tests, use:

```sh
npx nx test
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

## Pre-commit Hook

This project uses **Husky** along with **lint-staged**, **ESLint**, and **Prettier** to ensure code quality before committing.

- **Husky** is configured to run on pre-commit, executing checks for linting and formatting.
- **lint-staged** ensures that only the files that have been staged (modified and added to the commit) are checked.
- **ESLint** runs to catch any potential JavaScript/TypeScript code issues.
- **Prettier** ensures consistent code formatting.

### How it works:

1. When you run `git commit`, Husky triggers the pre-commit hook.
2. `lint-staged` runs ESLint and Prettier on all staged files.
3. If any errors are found by ESLint or if files are not formatted according to Prettier's rules, the commit will fail, and you will need to fix the issues before committing.

This ensures that the codebase stays clean and consistent.

## GitHub Actions for Unit Tests

This project uses GitHub Actions to run unit tests automatically before merging pull requests.

### Workflow Overview

The workflow is located in `.github/workflows/run-tests.yml` and runs when you create a pull request to the `main` branch. Here’s what it does:

1. **Checkout Code**: Retrieves the code from the repository.
2. **Set up Node.js**: Installs the specified version of Node.js.
3. **Install Dependencies**: Runs `npm install` to set up project dependencies.
4. **Run Unit Tests**: Executes all unit tests using:
   ```bash
   npx nx test --all --watch=false --bail
   ```

## Design

-Figma: https://www.figma.com/design/x37vTidKs6RttTOckuXCib/CRM-Dashboard-Customers-List-(Community)?t=mpBkgaJxeI75i3i8-0

## Pending Tasks

Here’s a list of pending tasks and features to implement:

- [x] Add mock Api.
- [x] Add Ngrx.
- [x] Add Pagination.
- [x] Add Sort mock functionality.
- [ ] Add Filter mock functionality.
- [ ] Add spinner.
- [ ] Add Interceptor error handler.
- [ ] Add sidebar icon chevron.
- [ ] Add stat piper miles separator.
- [ ] Add Fix mobile view.
- [ ] Update readme file.
- [ ] Add 'Angular Testing Library' in the app, and start to create test with this library.
- [ ] Add test coverage report.
- [ ] Add real Backend with express using NX monorepo.
- [ ] Add e2e with Cypress.
