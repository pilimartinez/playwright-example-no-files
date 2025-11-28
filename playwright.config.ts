import { defineConfig, devices } from '@playwright/test'

export default defineConfig({
  testDir: './testsFile',
  fullyParallel: true,
  use: {
    baseURL: "https://www.checklyhq.com",
    trace: 'on',
    video: 'on',
  },
  projects: [
    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'] },
    },
  ],
})
