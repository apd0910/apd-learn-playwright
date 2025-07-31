/* Assignment: 2 Edit Lead 
http://leaftaps.com/opentaps/control/main    
1. Launch the browser 
2. Enter the username 
3. Enter the password 
4. Click Login 
5. Click CRM/SFA link 
6. Click Leads link 
7. Click on Create Lead 
8. Enter company name 
9. Enter first name 
10.Enter last name 
11.Click on Create Lead button   
12.Click Edit 
13.Change the company name 
14.Click Update */

import { expect, test } from "@playwright/test";

test(`Test to edit lead`, async({page}) => {

    test.setTimeout(60_000);
    // 1. Launch the browser 
    await page.goto('http://leaftaps.com/opentaps/control/main ')

    // 2. Enter the username 
    await page.locator("#username").fill("DemoSalesManager")

    // 3. Enter the password 
    await page.locator("#password").fill("crmsfa")

    // 4. Click Login 
    await page.locator(".decorativeSubmit").click()
    await page.waitForLoadState('load'); 

    // 5. Click CRM/SFA link 
    await page.locator("#label").click()
    await page.waitForLoadState('load'); 

    // 6. Click Leads link 
    await page.locator("//a[text()='Leads']").click()
    await page.waitForLoadState('load')
    
    // 7. Click on Create Lead 
    await page.locator("//a[text()='Create Lead']").click()
    await page.waitForLoadState('load')

    let oldCompanyName = "testleaf_old"
    let newCompanyName = "testleaf_new"
    let firstName = 'firstName_apd_test_01'
    let lastName = 'lastName_apd_test_01'

    // 8. Enter company name 
    await page.locator("#createLeadForm_companyName").fill(oldCompanyName)

    // 9. Enter first name 
    await page.locator("#createLeadForm_firstName").fill(firstName)

    // 10.Enter last name 
    await page.locator("#createLeadForm_lastName").fill(lastName)

    // 11.Click on Create Lead button   
    await page.locator(".smallSubmit").click()
    await page.waitForLoadState('load')

    let currentCompanyName = page.locator("#viewLead_companyName_sp").innerText()
    expect((await currentCompanyName).toString().trim().split(" ")[0]).toContain(oldCompanyName)

    // 12.Click Edit 
    await page.locator("//a[text()='Edit']").click()
    await page.waitForLoadState('load')

    // 13.Change the company name 
    await page.locator("#updateLeadForm_companyName").fill(newCompanyName)

    // 14.Click Update
    await page.locator(".smallSubmit[value='Update']").click()

    currentCompanyName = page.locator("#viewLead_companyName_sp").innerText()
    expect((await currentCompanyName).toString().trim().split(" ")[0]).toContain(newCompanyName)

})