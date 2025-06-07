import { test, expect } from "@playwright/test";

test("main page has title", async ({ page }) => {
  await page.goto("/");

  await expect(page.locator("main")).toHaveText("Test title");
});
