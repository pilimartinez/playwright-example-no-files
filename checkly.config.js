const { defineConfig } = require('checkly')

const config = defineConfig({
  projectName: 'Playwright Example No Files',
  logicalId: 'playwright-example-no-files',
  repoUrl: 'https://github.com/pilimartinez/playwright-example-no-files',
  checks: {
    playwrightConfigPath: './playwright.config.js',
    playwrightChecks: [
      { name: 'Playwright Tests', logicalId: 'playwright-tests' }
    ],
  },
})

module.exports = config
