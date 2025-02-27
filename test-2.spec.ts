import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://qa.neamb.com/');
  await expect(page.getByRole('link', { name: 'Benefits & Discounts' })).toBeVisible();
});