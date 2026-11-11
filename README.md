# saleor-automation-playwright

[![CI](https://github.com/Tanjid420/saleor-automation-playwright/actions/workflows/ci.yml/badge.svg)](https://github.com/Tanjid420/saleor-automation-playwright/actions/workflows/ci.yml)
[![Test report](https://img.shields.io/badge/report-live-0e7c86)](https://tanjid420.github.io/saleor-automation-playwright/)

End-to-end tests for [Saleor](https://github.com/saleor/saleor), an open-source e-commerce platform, run against its public demo store at [demo.saleor.io](https://demo.saleor.io).

Built with **Playwright + TypeScript**, using the Page Object Model and custom fixtures. Tests run on Chromium, Firefox and WebKit in GitHub Actions on every push, every pull request and every night.

📊 **Live test report:** https://tanjid420.github.io/saleor-automation-playwright/

## What's covered

| Area | Tests | Status |
|---|---|---|
| Smoke (homepage, navigation, products) | 1 | ✅ |
| UI: search, filters, variants, cart, discounts, checkout, account | – | planned |
| GraphQL API | – | planned |
| Hybrid (build cart by API → verify in UI) | – | planned |
| Accessibility (axe) | – | planned |

## Project structure

```
pages/        Page Objects: one class per page, tests call their methods
fixtures/     Shared setup handed to each test (page objects, API client)
data/         Test-data factories
tests/
  ui/         Browser tests
  api/        GraphQL API tests
  hybrid/     API setup + UI checks
bugs/         One file per bug found: steps, expected, actual, issue link
docs/         Exploration notes and test planning
```

## Run locally

Needs Node.js 20 or later.

```bash
npm ci                          # install exact dependency versions
npx playwright install --with-deps   # install browsers (Linux may need sudo)

npm test                        # all tests, all browsers
npm run test:smoke              # only @smoke tests
npm run test:chromium           # one browser
npx playwright test --ui        # interactive UI mode
npm run report                  # open the last HTML report

npm run check                   # lint + type-check
```

Point the tests at another Saleor storefront with `BASE_URL=https://... npm test`.

## CI

`.github/workflows/ci.yml`: **lint + type-check → tests on 3 browsers → HTML report → GitHub Pages**.
On failure, a trace, video and screenshot are kept for each failed test.

## Bugs found

None filed yet. Each bug will be listed here with a link to its GitHub issue.

## Testing etiquette

Tests run against a public demo, so they run at most once a night, never load-test the site, and never use real payment details.
