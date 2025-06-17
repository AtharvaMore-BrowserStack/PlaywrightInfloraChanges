import { defineConfig, devices } from "@playwright/test";
require("dotenv").config();

const desktopViewport = { width: 1600, height: 1200 };
export default defineConfig({
  testDir: './tests/italy',
  testMatch: '**/*.ts',

  use: {
    actionTimeout: 15 * 1000,
    navigationTimeout: 45 * 1000,
    trace: "on",
    screenshot: "only-on-failure",
    video: "on",
    launchOptions: {
      slowMo: 1000,
    },
  },
  timeout: 240 * 1000,
  fullyParallel: true,
  expect: {
    timeout: 45000,
    toHaveScreenshot: {
      threshold: 0.25,
      maxDiffPixelRatio: 0.5,
      maxDiffPixels: 100,
    },
    toMatchSnapshot: {
      threshold: 0.25,
      maxDiffPixelRatio: 0.5,
      maxDiffPixels: 100,
    },
  },
  forbidOnly: !!process.env.CI,
  workers: 6,
  reporter: [
    ["html", { open: "always" }],
    ["list"],
    ["junit", { outputFile: "test-results/results.xml" }],
  ],
  outputDir: "./test-results",
  preserveOutput: "always",

  projects: [
    {
      name: "chromium",
      use: {
        ...devices["Desktop Chrome"],
        viewport: desktopViewport,
      },
    },
  ],
});
