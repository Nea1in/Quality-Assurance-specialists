import { test, expect } from '@playwright/test';

test('navigate from Services to EPAM Client Work', async ({ page }) => {
  await page.goto('https://www.epam.com/');

  await page.locator('button.hamburger-menu__button').click();
  await page.getByRole('link', { name: 'Services', exact: true }).first().click();

  await page.getByRole('link', { name: 'Explore Our Client Work', exact: true }).click();

  await expect(page.getByRole('heading', { name: 'Client Work', exact: true })).toBeVisible();
});
