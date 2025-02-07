// @ts-check
import { test, expect } from '@playwright/test';

test('has title', async ({ page }) => {
  await page.goto(process.env.BASE_URL || 'https://trunk-branching.web.app/');

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/Trunk Branching/);
});

test('click on 1st button', async ({ page }) => {
  await page.goto(process.env.BASE_URL || 'https://trunk-branching.web.app/');

  // Click the get started link.
  await page.locator("#click1").click();

  // Expects page to have a heading with the name of Installation.
  await expect(page.locator("div").first()).toHaveText('Click 1');
});

test('click on 2nd button', async ({ page }) => {
  await page.goto(process.env.BASE_URL || 'https://trunk-branching.web.app/');

  // Click the get started link.
  await page.locator("#click2").click();

  // Expects page to have a heading with the name of Installation.
  await expect(page.locator("div").first()).toHaveText('Click 2');
});

test('click on 3rd button', async ({ page }) => {
  await page.goto(process.env.BASE_URL || 'https://trunk-branching.web.app/');

  // Click the get started link.
  await page.locator("#click3").click();

  // Expects page to have a heading with the name of Installation.
  await expect(page.locator("div").first()).toHaveText('Click 3');
});