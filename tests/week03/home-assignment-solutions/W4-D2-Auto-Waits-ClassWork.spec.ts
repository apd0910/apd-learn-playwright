/* Assignment Details: 
Create an assignment on implementing various wait strategies in Playwright to handle element 
visibility, invisibility, clickability, and text changes efficiently. 
 
Assignment Requirements: 
1. Navigate to https://leafground.com/waits.xhtml 
2. Wait for an element to become visible before interacting with it. 
3. Wait for an element to disappear from the page. 
4. Wait for an element to become clickable. 
5. Check for text changes within an element and respond accordingly. 
6. Assert the various actions performed on the page.  */


import { test, expect } from "@playwright/test";

test(`Test to learn auto waits`, async({page}) => {

    // 1. Navigate to https://leafground.com/waits.xhtml 
    await page.goto('https://leafground.com/waits.xhtml')

    //2. Wait for an element to become visible before interacting with it. 
    await page.locator(`//h5[text()='Wait for Visibility (1 - 10 Sec)']/following-sibling::div//button`).click()
    const visibleElement = page.locator(`//span[text()='I am here']`);
    await expect(visibleElement).toBeVisible({ timeout: 10000 })

    //3. Wait for an element to disappear from the page. 
    await page.locator(`//h5[text()='Wait for Invisibility (1 - 10 Sec)']/following-sibling::div//span[text()='Click']`).click()
    const invisibleElement = page.locator(`//span[text()='I am about to hide']`)
    await expect(invisibleElement).toBeHidden({ timeout: 10000 })

    //4. Wait for an element to become clickable.
    expect(page.locator("//span[text()='Click First Button']").isVisible).toBeTruthy()
    expect(page.locator("//span[text()='Click First Button']").isEnabled).toBeTruthy()

    //5. Check for text changes within an element and respond accordingly.
    const textChangeElement = page.locator(`//h5[text()='Wait for Text Change (1 - 10 Sec)']/following-sibling::div//span[not(contains(text(), 'Click')) and contains(@class, 'ui-button-text')]`)
    await expect(textChangeElement).toHaveText('I am going to change!')
    await page.locator(`//h5[text()='Wait for Text Change (1 - 10 Sec)']/following-sibling::div//span[text()='Click']`).click()
    await expect(textChangeElement).toHaveText('Did you notice?', { timeout: 10000 })
})