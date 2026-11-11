# Saleor exploration notes

Manual exploration of https://demo.saleor.io before automating. Sessions of about 45 minutes, one area each, with DevTools → Network open to watch the GraphQL calls.

## Feature map

| Area | What it does | Risk (H/M/L) | Why risky |
|---|---|---|---|
| Browse / search / filters / sort | | | |
| Product page / variants / stock | | | |
| Cart | | | |
| Checkout (address, shipping, discounts, totals, tax) | | | |
| Account (sign up, login, orders, reset) | | | |

## Test ideas

| Idea | Area | Priority (H/M/L) | UI / API / hybrid |
|---|---|---|---|
| | | | |

## Possible bugs

<!-- For each: steps to reproduce, expected, actual, browser, screenshot -->

## Test data needed

- Products with variants:
- Discount / voucher codes:
- Test card (only one shown by the demo):

## Hard to automate

<!-- pop-ups, emails, payment pages, etc. -->

## Observations so far

- Homepage has two nested `<nav aria-label="Main">` elements. Screen readers announce two "Main" landmarks. Possible accessibility issue, to check with the axe scan in Step 3.
