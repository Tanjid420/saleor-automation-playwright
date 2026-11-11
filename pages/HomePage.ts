import { type Locator, type Page } from '@playwright/test';

export class HomePage {
  readonly page: Page;
  readonly heroHeading: Locator;
  readonly mainNav: Locator;
  readonly logoLink: Locator;
  readonly productLinks: Locator;

  constructor(page: Page) {
    this.page = page;
    this.heroHeading = page.getByRole('heading', { level: 1 });
    // The store has two nested <nav aria-label="Main">, so take the outer one
    this.mainNav = page.getByRole('navigation', { name: 'Main' }).first();
    this.logoLink = page.getByRole('link', { name: 'Homepage' });
    this.productLinks = page.locator('a[href*="/products/"]');
  }

  async goto() {
    await this.page.goto('/en/default');
  }
}
