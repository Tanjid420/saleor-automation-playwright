import js from '@eslint/js';
import tseslint from 'typescript-eslint';
import playwright from 'eslint-plugin-playwright';

export default tseslint.config(
  { ignores: ['node_modules/', 'playwright-report/', 'test-results/'] },
  js.configs.recommended,
  ...tseslint.configs.recommended,
  {
    files: ['tests/**/*.ts'],
    ...playwright.configs['flat/recommended'],
    rules: {
      ...playwright.configs['flat/recommended'].rules,
      // Hard waits make tests slow and flaky
      'playwright/no-wait-for-timeout': 'error',
      // A missing await on an assertion makes the test pass silently
      'playwright/missing-playwright-await': 'error',
      '@typescript-eslint/no-floating-promises': 'off',
    },
  },
);
