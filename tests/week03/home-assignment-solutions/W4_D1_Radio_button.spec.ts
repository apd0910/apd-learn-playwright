/* Assignment Details: 
Write a Playwright script to automate the interaction with radio buttons on the LeafGround 
"Radio" page. The tasks will include checking default selections, enabling selections, and 
validating group exclusive selections. 
 
Assignment Requirements: 
1. Navigate to https://leafground.com/radio.xhtml 
2. Identify and assert the default selected radio button. 
3. Click your most favorite browser and assert that the browser is enabled. 
4. Click one of the cities. 
5. Select the age group. Assert the default selected button */

import { test, expect } from "@playwright/test";   

test(`Test to learn Radio Button`, async({page}) => {

    // 1. Navigate to https://leafground.com/radio.xhtml 
    await page.goto('https://leafground.com/radio.xhtml')

    // 2. Identify and assert the default selected radio button.
    const defaultSelectedRadioButton = ['Option3', '21-40 Years']
    const defaultSelected = await page.locator(`//div[@class='layout-main-content']//div[@class='grid ui-fluid']//input[@checked='checked']`).all();
    defaultSelected.forEach(element => {
        //verify the default selected radio buttons names are part of the given array
        element.getAttribute('value').then(value => {
            console.log(`Default selected radio button value: ${value}`)
            expect(defaultSelectedRadioButton).toContain(value)
        })
    })

    // // 3. Click your most favorite browser and assert that the browser is enabled.
    const fav_browser = 'Chrome'
    await page.locator(`//h5[text()='Your most favorite browser']/following-sibling::div//label[text()='${fav_browser}']`).click()
    const browserSelected = page.locator(`//h5[text()='Your most favorite browser']/following-sibling::div//label[text()='${fav_browser}']/preceding-sibling::div/div[contains(@class, 'ui-radiobutton-box')]`)
    expect(await browserSelected.isEnabled()).toBeTruthy()

    // // 4. Click one of the cities.
    const city = 'Chennai'
    await page.locator(`//h5[text()='UnSelectable']/following-sibling::div//label[text()='${city}']`).click()
    const citySelected = page.locator(`//h5[text()='UnSelectable']/following-sibling::div//label[text()='${city}']/preceding-sibling::div/div[contains(@class, 'ui-radiobutton-box')]`)
    expect(await citySelected.isEnabled()).toBeTruthy()

    // // 5. Select the age group. Assert the default selected button.
    const age = '1-20 Years'
    await page.locator(`//h5[text()='Select the age group (only if not selected)']/following-sibling::div//label[text()='${age}']`).click()
    const ageSelected = page.locator(`//h5[text()='Select the age group (only if not selected)']/following-sibling::div//label[text()='${age}']/preceding-sibling::div/div[contains(@class, 'ui-radiobutton-box')]`)
    expect(await ageSelected.isEnabled()).toBeTruthy()
})