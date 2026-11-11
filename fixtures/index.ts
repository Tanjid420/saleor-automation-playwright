import { test as base } from '@playwright/test';
import { HomePage } from '../pages/HomePage';

// Page objects are handed to each test as fixtures, so tests never build them by hand
type Pages = {
  homePage: HomePage;
};

export const test = base.extend<Pages>({
  homePage: async ({ page }, use) => {
    await use(new HomePage(page));
  },
});

export { expect } from '@playwright/test';
