// @ts-check
import { test, expect } from '@playwright/test';

test.beforeEach(async ({ page }) => {
  const baseURL = process.env.BASE_URL || 'https://trunk-branching.web.app/';
  console.log(`Navigating to: ${baseURL}`); // Logs the URL being used
  await page.goto(baseURL);
});

test('has title', async ({ page }) => {
  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/Trunk Branching/);
});

test('click on 1st button', async ({ page }) => {
  await page.locator("#click1").click();
  await expect(page.locator("div").first()).toHaveText('Click 1');
});

test('click on 2nd button', async ({ page }) => {
  await page.locator("#click2").click();
  await expect(page.locator("div").first()).toHaveText('Click 2');
});

test('click on 3rd button', async ({ page }) => {
  await page.locator("#click3").click();
  await expect(page.locator("div").first()).toHaveText('Click 3');
});
