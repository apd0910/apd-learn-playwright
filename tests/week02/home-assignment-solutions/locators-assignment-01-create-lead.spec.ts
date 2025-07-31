/* Assignment: 1 Create Lead 
1. Login to https://login.salesforce.com 
2. Click on toggle menu button from the left corner 
3. Click view All and click Sales from App Launcher 
4. Click on Leads tab  
5. Click on New button 
6. Select Salutation dropdown 
7. Enter the Last Name 
8. Enter the Company Name  
9. Click Save and Verify Leads name created */

import { expect, test } from "@playwright/test";

test(`Test to verify create lead flow`, async({page}) => {

    test.setTimeout(60_000);
    
    // 1. Login to https://login.salesforce.com 
    await page.goto('https://login.salesforce.com/?locale=in')

    await page.locator('#username').fill('ravindran.ramdas@testleaf.com');
    await page.locator("#password").fill(`RaviSalesTest#1432`)
    await page.locator("#Login").click()
    await page.waitForLoadState('load'); 
    
    // 2. Click on toggle menu button from the left corner 
    await page.locator("button[title='App Launcher']").click()

    // 3. Click view All and click Sales from App Launcher 
    await page.locator("button[aria-label='View All Applications']").click()
    await page.locator("div[data-name='Sales']").click()
    await page.waitForLoadState('load'); 

    // 4. Click on Leads tab  
    await page.locator("a[title='Leads']").click();
    await page.waitForLoadState('load'); 

    // 5. Click on New button 
    await page.locator("a[title='New']").click()
    await page.waitForLoadState('load'); 

    // 6. Select Salutation dropdown 
    let salutation = 'Mr.'
    await page.locator("button[name='salutation']").click() 
    await page.locator(`lightning-base-combobox-item[data-value='${salutation}']`).click();

    // 7. Enter the Last Name 
    let lastName = 'lastName_apd_test'
    await page.locator("input[name='lastName']").fill(lastName.trim())

    // 8. Enter the Company Name
    let companyName = 'TestLeaf'  
    await page.locator("input[name='Company']").fill(companyName.trim())

    // 9. Click Save and Verify Leads name created
    await page.locator("button[name='SaveEdit']").click()
    let expectedName = salutation + ' ' + lastName
    let actualName = await page.locator("lightning-formatted-name[slot='primaryField']").innerText()
    expect(actualName).toBe(expectedName)

})