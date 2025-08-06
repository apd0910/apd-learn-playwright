/* Assignment Details: 
Develop a Playwright script to test interactions with checkboxes on the LeafGround "Checkbox" 
page, covering scenarios like multiple selections, checking default states, and handling disabled 
checkboxes. 
 
Assignment Requirements: 
1. Navigate to https://leafground.com/checkbox.xhtml 
2. Click on the "Basic Checkbox.” 
3. Click on the "Notification Checkbox." 
4. Verify that the expected message is displayed. 
5. Click on your favorite language (assuming it's related to checkboxes). 
6. Click on the "Tri-State Checkbox." 
7. Verify which tri-state option has been chosen. 
8. Click on the "Toggle Switch." 
9. Verify that the expected message is displayed. 
10. Verify if the Checkbox is disabled. 
11. Select multiple options on the page (details may be needed). 
12. Perform any additional actions or verifications required. 
13. Close the web browser when done */

import { test, expect } from "@playwright/test";
import { exec } from "child_process";

test(`Test to learn checkboxes`, async({page}) => {

    test.setTimeout(180000)

    // 1. Navigate to https://leafground.com/checkbox.xhtml 
    await page.goto('https://leafground.com/checkbox.xhtml')

    // 2. Click on the "Basic Checkbox."
    await page.locator(`//span[text()='Basic']/parent::div`).click()

    // // 3. Click on the "Notification Checkbox."
    // const notification =  page.locator(`//span[text()='Ajax']/preceding-sibling::div/span`)
    // expect(await notification.isVisible()).toBeTruthy()

    // // 4. Verify that the expected message is displayed.
    const notificationMessage = page.locator(`//span[text()='Checked']`)
    // expect(await notificationMessage.isVisible()).toBeTruthy()
    // await page.waitForTimeout(10000) // wait for the notification to disappear

    // 5. Click on your favorite language (assuming it's related to checkboxes).
    await page.locator(`//label[text()='Javascript']/preceding-sibling::div`).click()

    // 6. Click on the "Tri-State Checkbox."
    await page.locator(`//h5[text()='Tri State Checkbox']/following-sibling::div//div[contains(@class, 'ui-chkbox-box')]`).click()

    // 7. Verify which tri-state option has been chosen.
    const triStateCheckbox = page.locator(`//h5[text()='Tri State Checkbox']/following-sibling::div//span`)
    const state = await triStateCheckbox.getAttribute('class')
    expect(state).toContain('ui-chkbox-icon ui-c ui-icon ui-icon-check') // Assuming the class indicates checked state

    // 8. Click on the "Toggle Switch."
    await page.locator(`//h5[text()='Toggle Switch']/following-sibling::div//div[@class='ui-toggleswitch-slider']`).click()
    await page.waitForTimeout(5000)

    // 9. Verify that the expected message is displayed.
    expect(await notificationMessage.isVisible()).toBeTruthy()
     await page.waitForTimeout(10000) // wait for the notification to disappear

    // 10. Verify if the Checkbox is disabled.
    const disabledCheckbox = page.locator(`//span[text()='Disabled']/parent::div/div[contains(@class, 'ui-chkbox-box')]`)
    expect(disabledCheckbox.isDisabled()).toBeTruthy()

    // 11. Select multiple options on the page (details may be needed).
    await page.locator(`//ul[@data-label='Cities']`).click() // click the select multiple dropdown
    const checkboxes = await page.locator(`//li[contains(@class, 'ui-selectcheckboxmenu-unchecked')]/div/div[contains(@class, 'ui-chkbox-box')]`).all()
    let countCheckBoxSelected = 0
    for (let i = 0; i < checkboxes.length; i ++) {
        if (countCheckBoxSelected === 2) break
        await checkboxes[i].click()
        countCheckBoxSelected++
    }
    console.log(`Count of selected checkboxed - ${countCheckBoxSelected}`)
    await page.waitForTimeout(5000)
    const selectedCitiesCount = page.locator(`//li[contains(@class, 'ui-selectcheckboxmenu-token ui-state-active')]`)
    expect(await selectedCitiesCount.count() === countCheckBoxSelected).toBeTruthy()

})