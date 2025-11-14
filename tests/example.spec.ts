import { test, expect } from '@playwright/test'

test('example test - Checkly homepage', async ({ page }) => {
  await page.goto('https://www.checklyhq.com')
  await expect(page).toHaveTitle(/Checkly/)
  await expect(page.locator('h1')).toBeVisible()
})
