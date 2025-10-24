# CRM Dashboard
[![Angular](https://img.shields.io/badge/Angular-18.2.0-DD0031?logo=angular&logoColor=white)](https://angular.io/)
[![Nx](https://img.shields.io/badge/Nx-20.0.3-000000?logo=nx&logoColor=white)](https://nx.dev/)
[![NgRx](https://img.shields.io/badge/NgRx-18.1.1-EC2E2F?logo=ngrx&logoColor=white)](https://ngrx.io/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.5.2-3178C6?logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![TailwindCSS](https://img.shields.io/badge/TailwindCSS-3.4.14-06B6D4?logo=tailwindcss&logoColor=white)](https://tailwindcss.com/)
[![RxJS](https://img.shields.io/badge/RxJS-7.8.0-B7178C?logo=reactivex&logoColor=white)](https://rxjs.dev/)
[![ESLint](https://img.shields.io/badge/ESLint-8.57.0-4B32C3?logo=eslint&logoColor=white)](https://eslint.org/)
[![Prettier](https://img.shields.io/badge/Prettier-2.6.2-F7B93E?logo=prettier&logoColor=black)](https://prettier.io/)
[![Jest](https://img.shields.io/badge/Jest-29.7.0-C21325?logo=jest&logoColor=white)](https://jestjs.io/)
[![Husky](https://img.shields.io/badge/Husky-8.0.0-000000?logo=husky&logoColor=white)](https://typicode.github.io/husky)
[![License: MIT](https://img.shields.io/badge/License-MIT-green.svg)](LICENSE)

This project was created using **Angular 18** and incorporates the latest Angular features, including:

- **Input signals** for optimized reactivity
- **Standalone components** to simplify module dependency management
- `inject()` for efficient **dependency injection**

🔗 **Live Demo:** [https://crm-dashboard-sigma.vercel.app/customers](https://crm-dashboard-sigma.vercel.app/customers)

## Architecture

Our architecture follows a **feature module** approach with **lazy loading** for enhanced modularity and performance. All shared components are standalone, combining the advantages of feature modules and standalone components, which streamline development and reduce dependencies.

This project demonstrates the use of Nx libraries. The **shared module** is implemented as an Nx library

Additionally, the styling follows a **mobile-first** approach to ensure optimal responsiveness across devices.

## State Management

For state handling, we use **NgRx**. Although services could handle state management for a project of this size, NgRx was implemented to showcase a single, immutable app state that simplifies component communication. This setup is beneficial for scaling and maintaining a clear, unified state across the app.

## Performance

To optimize performance, all components use `ChangeDetectionStrategy.OnPush`, minimizing unnecessary change detection cycles and improving rendering efficiency.

## Api

For the API, I'm using **json-server**, which serves static data at the URL `crm-dashboard-api.vercel.app`.

All sorting, pagination, and filtering of data are handled by a mock frontend service for demonstration purposes. A short delay is also added to simulate loading and display a global spinner, giving the user a clear loading experience.

## Extra

- Please review the section **"Pre-commit Hook"** to understand the coding standards we follow. Additional rules and best practices are enforced with **ESLint**, which you can reference in the ESLint configuration file for specific rules used to eliminate code smells.

- For continuous integration, we use **GitHub Actions** to automate unit tests. For further details, see the **"GitHub Actions for Unit Tests"** section.

- There are a few enhancements planned for future releases. For more information, check the **"Pending Tasks"** section.


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

To run tests in the entire project, use:

```sh
npx nx run-many --target=test --all
```

To create a production bundle:

```sh
npx nx build crm-dashboard
```

To run lint checks in the entire project

```sh
npx nx run-many --target=lint --all
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

-Figma: https://www.figma.com/design/7kOhiSVhUSjLYOtNn1UfRn/CRM-Dashboard-Customers-List--Community-?t=kgjiV4EBYARHTDt0-0

## Pending Tasks

Here’s a list of pending tasks and features to implement:

- [ ] Add 'Angular Testing Library' in the app, and start to create test with this library.
- [ ] Add test coverage report.
- [ ] Add real Backend with express using NX monorepo.
- [ ] Add e2e with Cypress.
- [ ] Add Icomoon project to handle all the icons.
