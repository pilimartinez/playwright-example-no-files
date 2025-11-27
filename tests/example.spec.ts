import { test, expect } from '@playwright/test'

test('example test - Checkly homepage Edited', async ({ page }) => {
  await page.goto('https://welcome.checklyhq.com')
  const companyLogo = page.getByAltText(/logo/i)
  await expect(companyLogo).toBeVisible()
})
