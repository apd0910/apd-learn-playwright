/* Assignment Details: 
Develop a Playwright script that interacts with and verifies the behavior of dropdowns. The script 
should handle tasks like validating the options available, checking correct selections, and 
asserting dynamic content loading based on selections. 
 
Assignment Requirements: 
1. Navigate to https://leafground.com/select.xhtml 
2. Select your favorite UI automation tool using the different select options 
3. Get the count and print of all the values 
4. Choose your preferred Country 
5. Confirm Cities belongs to Country is loaded 
6. Choose any three courses from the dropdown 
7. Choose a language and print all the values from the dropdown. 
8. Select 'Two' irrespective of the language chosen */

import { test, expect } from "@playwright/test";

test(`Test to learn Dropdown`, async({page}) => {

    // 1. Navigate to https://leafground.com/select.xhtml 
    await page.goto('https://leafground.com/select.xhtml')

    // 2. Select your favorite UI automation tool using the different select options
    // selecting 'Playwright' as an example
    await page.selectOption(`//h5[text()='Which is your favorite UI Automation tool?']/following-sibling::div//select`, { label: 'Playwright' });

    // 3. Get the count and print of all the values
    const toolsDropdown = page.locator(`//h5[text()='Which is your favorite UI Automation tool?']/following-sibling::div//select/option`);
    const toolsCount =await toolsDropdown.count();
    console.log(`No. of values in the Automation Tools dropdown ${toolsCount}`) // 13

    //print all the values in the automation tools dropdown
    for (let index = 0; index < toolsCount; index++) {
        console.log(await toolsDropdown.nth(index).innerText())// Print all the 13 values
    }

    // 4. Choose your preferred Country
    await page.locator(`//label[text()='Select Country']`).click()
    await page.locator(`//li[@data-label='India']`).click()

    
    // // 5. Confirm Cities belongs to Country is loaded
    await page.locator(`//label[text()='Select City']`).click()
    const expectedCities = ['Select City', 'Bengaluru', 'Chennai', 'Delhi']
    const actualCities = await page.locator(`//ul[contains(@id, 'city_items')]/li`).allInnerTexts()
    
    console.log(`Expected Cities: ${expectedCities}`) // Print expected cities
    console.log(`Actual Cities: ${actualCities}`) // Print all the cities
    expect(actualCities).toEqual(expectedCities) // Assert that the actual cities match the expected cities

    // expect(actualCities).toEqual(expectedCities)

    // // 6. Choose any three courses from the dropdown
    await page.locator(`//button[contains(@class, 'ui-autocomplete-dropdown')]`).click()
    await page.locator(`//li[text()='AWS']`).click()
    await page.waitForTimeout(1000)
    await page.locator(`//button[contains(@class, 'ui-autocomplete-dropdown')]`).click()
    await page.locator(`//li[text()='Appium']`).click()
    await page.waitForTimeout(1000)
    await page.locator(`//button[contains(@class, 'ui-autocomplete-dropdown')]`).click()
    await page.locator(`//li[text()='Playwright']`).click()

    // // 7. Choose a language and print all the values from the dropdown.
    await page.locator(`//label[contains(@id, 'lang_label')]`).click()
    const languages = await page.locator(`//ul[contains(@id, 'lang_items')]/li`).allTextContents()
    console.log(`Available languages: ${languages.join(', ').replace(/Select Language/g, '')}`) // Print all the languages
    await page.locator(`//li[text()='English']`).click() // select tamil as language

    // // 8. Select 'Two' irrespective of the language chosen
    const value = 'One'
    await page.locator(`//label[contains(@id, 'value_label')]`).click()
    await page.locator(`//li[text()='${value}']`).click()

    expect(await page.locator(`//label[contains(@id, 'value_label')]`).textContent()).toContain(value) // Verify the selection
    await page.waitForTimeout(2000) // wait for the dropdown to load
})