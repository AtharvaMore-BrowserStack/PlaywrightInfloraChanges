import { test, expect } from "@playwright/test";


test.describe("Test Google", () => {
  test("Open Google page", async ({ page }) => {
    await test.step("Open Google page", async () => {
      await page.goto("https://www.google.com");
    });
  });

  test("Open Interflora", async ({ page }) => {
    await test.step("Open Google page", async () => {
      await page.goto("https://www.interflora.fr/");
      await page.screenshot({ path: "screenshot.png" });
    });
  });
});

/*
npx browserstack-node-sdk playwright test tests/italy/IT-legalInfo.spec.ts --project=chromium
*/
