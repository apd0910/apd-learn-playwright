/* Assignment: 3 Create Individuals 
Test Steps:  
1. Login to https://login.salesforce.com 
2. Click on the toggle menu button from the left corner 
3. Click View All and click Individuals from App Launcher 
4. Click on the Dropdown icon in the Individuals tab 
5. Click on New Individual 
6. Enter the Last Name 
7. Click save and verify Individuals Name 
 */

import { expect, test } from "@playwright/test";

test(`Test to create individuals`, async({page}) => {

    test.setTimeout(60_000);
    
    // 1. Login to https://login.salesforce.com 
    await page.goto('https://login.salesforce.com/?locale=in')

    await page.locator('#username').fill('ravindran.ramdas@testleaf.com');
    await page.locator("#password").fill(`RaviSalesTest#1432`)
    await page.locator("#Login").click()
    await page.waitForLoadState('load'); 
    
    // 2. Click on the toggle menu button from the left corner 
    await page.locator("button[title='App Launcher']").click()
    await page.waitForLoadState('load'); 

    // 3. Click View All and click Individuals from App Launcher 
    await page.locator("button[aria-label='View All Applications']").click()
    await page.waitForLoadState('load'); 

    page.locator("a[data-label='Individuals']").scrollIntoViewIfNeeded
    await page.locator("a[data-label='Individuals']").click()
    await page.waitForLoadState('load'); 

    // 4. Click on the Dropdown icon in the Individuals tab 
    await page.locator("//a[contains(@title, 'Individuals')]/following-sibling::one-app-nav-bar-item-dropdown//a[@role='button']").click()
    await page.waitForLoadState('load');

    // 5. Click on New Individual 
    await page.locator("//span[text()='New Individual']").click()
    await page.waitForLoadState('load');

    // 6. Enter the Last Name 
    let individualLastName = 'ind last name 002'
    await page.locator("input[placeholder='Last Name']").fill(individualLastName)

    // 7. Click save and verify Individuals Name 
    await page.locator("//span[text()='Save']").click()

    let actualName = await page.locator("//div[text()='Individual']/following-sibling::div/span").innerText()
    expect(actualName).toBe(individualLastName)
})