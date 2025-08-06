/* Assignment Details: 
Create a script using Playwright to interact with buttons on the LeafGround "Button" page, 
asserting their properties and behaviors like visibility, disablement status, position, and color 
change on actions. 
 
Assignment Requirements: 
1. Navigate to https://leafground.com/button.xhtml 
2. Write a script to click the button and confirm a title change or any visible response. 
3. Assert the disabled state of a button. 
4. Click the Image button and click on any hidden button 
5. Check how many rounded buttons are present  */

import { test, expect } from "@playwright/test";

test(`Test to learn buttons`, async({page}) => {

    test.setTimeout(120_000)
 
    // 1. Navigate to https://leafground.com/button.xhtml 
    await page.goto('https://leafground.com/button.xhtml')

    // 2. Click the button and confirm a title change or any visible response.
    await page.locator(`//span[text()='Click']/parent::button`).click()
    await expect(page).toHaveTitle('Dashboard', { timeout: 20000 });


    //navigate back to the button page
    await page.goBack()
    expect(await page.title()).toBe('Button')

    // 3. Assert the disabled state of a button.
    const disabledButton = page.locator(`//span[text()='Disabled']/parent::button`)
    expect(await disabledButton.isDisabled()).toBeTruthy

    // 4. Click the Image button and click on any hidden button
    await page.locator(`//span[text()='Image']/parent::button`).click()
    const testleafImage = page.locator("//div[contains(@id, 'imagePanel')]")
    await testleafImage.isVisible({ timeout: 10000 })

    // 5. Check how many rounded buttons are present
    const roundedButtons = await page.locator(`//button[contains(@class, 'rounded')]`).count()
    console.log(`Number of rounded buttons: ${roundedButtons}`)
})