# Cypress

## Usage

### Running

Run using GUI: `yarn test:cypress`

Run headless: `test:cypress:headless`

### Linting

Lint: `lint:cypress`

Fix lint: `lint:cypress:fix`

## Design design decisions

- Cypress TypeScript definitions are isolated to avoid Jest and Cypress type conflicts: separate tsconfig.json used for Cypress (see https://docs.cypress.io/guides/tooling/typescript-support#Clashing-types-with-Jest)