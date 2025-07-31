/* Assignment: 4 Edit Individuals 
Test Steps: 
1. Login to https://login.salesforce.com 
2. Click on the toggle menu button from the left corner 
3. Click View All and click Individuals from App Launcher  
4. Click on the Individuals tab  
5. Search the Individuals last name 
6. Click on the Dropdown icon and Select Edit 
7. Select Salutation as 'Mr' 
8. Now enter the first name 
9. Click on Save and Verify the first name   */

import { expect, test } from "@playwright/test";

test(`Test to edit individuals`, async({page}) => {

    test.setTimeout(120_000);
    
    // 1. Login to https://login.salesforce.com 
    await page.goto('https://login.salesforce.com/?locale=in')

    await page.locator('#username').fill('ravindran.ramdas@testleaf.com');
    await page.locator("#password").fill(`RaviSalesTest#1432`)
    await page.locator("#Login").click()
    await page.waitForLoadState('load')
    
    // 2. Click on the toggle menu button from the left corner 
    await page.locator("button[title='App Launcher']").click()
    await page.waitForLoadState('load')

    // 3. Click View All and click Individuals from App Launcher 
    await page.locator("button[aria-label='View All Applications']").click()
    await page.waitForLoadState('load')

    page.locator("a[data-label='Individuals']").scrollIntoViewIfNeeded
    await page.locator("a[data-label='Individuals']").click()
    await page.waitForLoadState('load')

    // 4. Click on the Dropdown icon in the Individuals tab 
    await page.locator("//a[contains(@title,'Individuals')]").click()
    await page.waitForLoadState('load')

    // 5. Search the Individuals last name 
    let individualLastName = 'ind last name 002'
    await page.locator(".slds-input[name='Individual-search-input']").fill(individualLastName)
    await page.locator("button[name='refreshButton']").click()
    await page.waitForLoadState('load')

    // 6. Click on the Dropdown icon and Select Edit 
    await page.locator("//lst-list-view-row-level-action[@data-action-triggers='enter,space']//a").click()
    await page.locator("//li[@data-aura-class='uiMenuItem uiActionMenuItem']/a[@title='Edit']").click()

    // 7. Select Salutation as 'Mr' 
    let salutation = 'Mr.'
    await page.locator("(//a[@role='combobox'])[1]").click() 
    await page.locator(`a[title='${salutation}']`).click()

    // 8. Now enter the first name 
    let individualFirstName = 'ind first name 002'
    await page.locator("input[placeholder='First Name']").fill(individualFirstName)
    await page.locator("button[name='refreshButton']").click()


    // 9. Click on Save and Verify the first name
    await page.locator("button[title='Save']").click()
    let fullName = individualFirstName + ' ' + individualLastName
    await page.locator(".slds-input[name='Individual-search-input']").fill(individualLastName)
    await page.locator(`a[title='${fullName}']`).isVisible()

})