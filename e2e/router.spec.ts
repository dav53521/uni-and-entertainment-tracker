import {test, expect} from '@playwright/test'

test('Does home page exist', async ({ page }) => {
    await page.goto('http://localhost:3000/');

    await expect(page.getByText("Welcome to My Uni and Entertainment Tracker")).toBeVisible();

    await page.getByTestId("Home-Link").click();

    await expect(page.getByText("Welcome to My Uni and Entertainment Tracker")).toBeVisible();
});