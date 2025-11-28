import { defineConfig } from 'checkly'

const config = defineConfig({
  projectName: 'Playwright Example No Files',
  logicalId: 'playwright-example-no-files',
  repoUrl: 'https://github.com/pilimartinez/playwright-example-no-files',
  checks: {
    playwrightConfigPath: './playwright.config.ts',
    playwrightChecks: [
      { name: 'Playwright Tests', logicalId: 'playwright-tests' }
    ],
  },
})

export default config
