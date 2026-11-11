import { test, expect } from '../../fixtures';

test.describe('Smoke', () => {
  // Catches: store down, broken deploy, or a homepage that renders without content
  test('homepage loads with heading, navigation and products @smoke', async ({ homePage, page }) => {
    await homePage.goto();

    await expect(page).toHaveTitle(/Saleor Store/);
    await expect(homePage.heroHeading).toBeVisible();
    await expect(homePage.mainNav).toBeVisible();
    await expect(homePage.logoLink).toBeVisible();
    // Product links come from the API, so this also confirms the store is talking to its backend
    await expect(homePage.productLinks.first()).toBeVisible();
  });
});
