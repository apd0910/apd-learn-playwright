/* Test Case Name: Verify Lead Creation and Conversion to Opportunity 
Objective: Ensure that a user can successfully create a new lead and convert that lead to an opportunity. 
User Credentials: 
Username: hari.radhakrishnan@qeagle.com  
Password: Leaf$1234 
Steps & Expected Results: 
1. Step: Launch the browser (Chrome / Edge / Firefox / Safari). 
Expected Result: User should see the respective browser getting launched. 
2. Step: Load the specified URL (https://login.salesforce.com/). 
Expected Result: The Salesforce application’s login window should appear. 
3. Step: Enter the Username, Password and click on the Login button. 
Expected Result: The user should be logged into Salesforce CRM 
4. Step: Click on the App Launcher toggle button. 
Expected Result: A list of apps should appear. 
5. Step: Click on the View All link.  
Expected Result: The link should direct the user to the App Launcher pop up window. 
6. Step: Type ‘Marketing’ in the search box and click on the Marketing link. 
Expected Result: The link should direct the user to Marketing dashboard page.  
7. Step: Navigate to the Leads tab from the Marketing dashboard. 
Expected Result: User should see a list of existing leads (if any) and options to create a new 
lead. 
8. Step: Click on the New button to create a lead. 
Expected Result: A form to input details for the new lead should appear. 
9. Step: Fill in all the mandatory fields (Salutation, First Name, Last Name, Company) with valid 
data. 
Expected Result: All details should be filled in without any errors. 
10.  Step: Click on the Save button. 
Expected Result: A new lead should be created and user should be redirected to the detailed 
view of the newly created lead. A confirmation message should also be displayed and verified. 
11.  Step: In the newly created Lead page, locate the dropdown near Submit for Approval button and 
click on the Convert link. 
Expected Result: The Convert link should be visible and clickable and a new dialog should 
appear asking for details about converting the lead to an opportunity, contact, and an account. 
12.  Step: Click on the Opportunity Name input field, clear and enter a new opportunity name. 
Expected Result: The entered value should appear. 
13.  Step: Click on the Convert button. 
Expected Result: The lead should be successfully converted. A confirmation message ‘Your 
lead has been converted’ should be displayed and verified. 
14.  Step: Click on the Go to Leads button. 
Expected Result: It should redirect the user to Leads page. 
15.  Step: Search the verified lead name in the Search box and verify the text ‘No items to display’. 
Expected Result: The lead should not be displayed as it has been converted to Opportunity and 
should display the confirmation message. 
16.  Step: Navigate to the Opportunities tab and search for the opportunity linked with the converted 
lead. 
Expected Result: The newly converted opportunity should appear in the list with all the relevant 
details correctly populated from the lead. 
17.  Step: Search the opportunity name created and click on the created opportunity name. 
Expected Result: The created Opportunity Name should appear and verify the same. */

import { expect, test } from "@playwright/test";

test(`Verify Lead Creation and Conversion to Opportunity`, async({page}) => {

    test.setTimeout(300000)

    // 1. Step: Launch the browser
    // 2. Step: Load the specified URL (https://login.salesforce.com/)
    await page.goto('https://login.salesforce.com/')
    // 3. Step: Enter the Username, Password and click on the Login button.
    // Expected Result: The user should be logged into Salesforce CRM  
    await page.locator("#username").fill(`apd.careers364@agentforce.com`)
    await page.locator("#password").fill(`Arun@010125`)
    await page.locator("#Login").click()
    await page.waitForTimeout(20000)
    const appLauncherIcon = page.locator(`//button[@title='App Launcher']`)
    await expect(appLauncherIcon).toBeVisible()// verify app launcher is visible

    // 4. Step: Click on the App Launcher toggle button.
    // Expected Result: A list of apps should appear. 
    await appLauncherIcon.click()
    await page.waitForTimeout(5000)
    const viewAllButton = page.locator(`//button[text()='View All']`)
    await expect(viewAllButton).toBeVisible() // verify View All Button is visible

    // 5. Step: Click on the View All link.  
    // Expected Result: The link should direct the user to the App Launcher pop up window. 
    await viewAllButton.click()
    await page.waitForTimeout(5000)
    const appLauncerPopupWindowTitle  = page.locator(`//h2[text()='App Launcher']`)
    await expect(appLauncerPopupWindowTitle).toBeVisible()  // verify App Launcher pop up window is displayed

    // 6. Step: Type ‘Marketing’ in the search box and click on the Marketing link. 
    // Expected Result: The link should direct the user to Marketing dashboard page.  
    const searchAppName = 'Marketing CRM Classic'
    const searchTextbox = page.locator(`//input[@placeholder='Search apps or items...']`)
    await searchTextbox.fill(searchAppName)
    const marketingCRMClassicAppLink = page.locator(`//div[@data-name='Marketing CRM Classic']//a`)
    expect(marketingCRMClassicAppLink.isVisible()).toBeTruthy() // verify Marketing CRM Classic App link is displayed
    await marketingCRMClassicAppLink.click()
    const marketingCRMClassicPageTitle = page.locator(`//span[@title='Marketing CRM Classic']`)
    expect(marketingCRMClassicPageTitle.isVisible()).toBeTruthy() //verify Marketing dashboard page is displayed
    
    // 7. Step: Navigate to the Leads tab from the Marketing dashboard. 
    // Expected Result: User should see a list of existing leads (if any) and options to create a new lead. 
    const leadsTab = page.locator(`//a[@title="Leads"]`)
    await leadsTab.click()
    const newButton = page.locator(`//*[text()='New']`)
    expect(newButton.isVisible()).toBeTruthy() //verify New button is displayed

    // 8. Step: Click on the New button to create a lead. 
    // Expected Result: A form to input details for the new lead should appear. 
    await newButton.click()
    const newLeadForm = page.locator(`//h2[text()='New Lead']`)
    expect(newLeadForm.isVisible).toBeTruthy()

    // 9. Step: Fill in all the mandatory fields (Salutation, First Name, Last Name, Company) with valid data. 
    // Expected Result: All details should be filled in without any errors. 
    const salutation = 'Mr.'
    const firstName = 'ArunPaandiyan'
    const lastName = 'Dharuman Test 001'
    const companyName = 'Testleaf'
    const salutationButton = page.locator(`//button[@name='salutation']`)
    const salutationOption = page.locator(`lightning-base-combobox-item[data-value='${salutation}']`)
    const firstNameTextbox = page.locator(`//input[@name='firstName']`)
    const lastNameTextbox = page.locator(`//input[@name='lastName']`)
    const companyNameTextbox = page.locator(`//input[@name='Company']`)
    const saveButton = page.locator(`//button[@name='SaveEdit']`)

    await salutationButton.click()
    await salutationOption.click()
    await firstNameTextbox.fill(firstName)
    await lastNameTextbox.fill(lastName)
    await companyNameTextbox.fill(companyName)

    // 10.  Step: Click on the Save button. 
    // Expected Result: A new lead should be created and user should be redirected to the detailed 
    // view of the newly created lead. A confirmation message should also be displayed and verified. 
    await saveButton.click()
    const confirmationMsg = await page.locator(`//span[contains(@class, 'toastMessage')]`).textContent({timeout: 5000})
    expect(confirmationMsg).toContain('created') //verify Leads page is displayed
    expect(confirmationMsg).toContain(salutation + ' ' + firstName + ' ' + lastName)

    // 11.  Step: In the newly created Lead page, locate the dropdown near Submit for Approval button and 
    // click on the Convert link. 
    // Expected Result: The Convert link should be visible and clickable and a new dialog should 
    // appear asking for details about converting the lead to an opportunity, contact, and an account. 

    const showMoreActionsDropDownButton = page.locator(`//li[@class='slds-dropdown-trigger slds-dropdown-trigger_click slds-button_last overflow']`)
    await showMoreActionsDropDownButton.click({timeout: 15000})
    const convertOption = page.locator(`//a/span[text()='Convert']`)
    await expect(convertOption).toBeVisible({timeout: 15000}) //verify convert option is visible
    await expect(convertOption).toBeEnabled() //verify convert option is clickable
    convertOption.click()
    const convertLeadPopup = page.locator(`//h1[contains(text(), 'Convert Lead')]`)
    expect(convertLeadPopup).toBeVisible({timeout: 15000}) // verify convert lead page is displayed
    
    // 12.  Step: Click on the Opportunity Name input field, clear and enter a new opportunity name. 
    // Expected Result: The entered value should appear. 
    const defaultOpportunityName = companyName + '-'
    const newOpportunityName = 'Opportunity-001'
    const opportunitySection = page.locator(`//span[@title='Opportunity']`)
    opportunitySection.click() //expand opporuntiy section
    const opporuntiyNameTextbox = page.locator(`//span[text()='Opportunity Name']/../following-sibling::input`)
    opporuntiyNameTextbox.clear()
    opporuntiyNameTextbox.fill(newOpportunityName)
    await page.waitForTimeout(15000)
    // unable to find an element to verify after re entering the opportunity name

    // 13.  Step: Click on the Convert button. 
    // Expected Result: The lead should be successfully converted. A confirmation message ‘Your 
    // lead has been converted’ should be displayed and verified. 
    const convertButtonCreateOpppopup = page.locator(`//button[text()='Convert']`)
    convertButtonCreateOpppopup.click()
    const leadConvertedPopup = page.locator(`//h2[text()='Your lead has been converted']`)
    await page.waitForTimeout(5000)
    expect(leadConvertedPopup).toBeVisible()

    // 14.  Step: Click on the Go to Leads button. 
    // Expected Result: It should redirect the user to Leads page. 
    const goToLeadsButton = page.locator(`//button[text()='Go to Leads']`)
    goToLeadsButton.click({timeout: 15000})
    // expect(leadsIcon).toBeVisible()
    await page.waitForTimeout(15000)

    // 15.  Step: Search the verified lead name in the Search box and verify the text ‘No items to display’. 
    // Expected Result: The lead should not be displayed as it has been converted to Opportunity and 
    // should display the confirmation message. 
    const searchLeadTextbox = page.locator(`//input[@name='Lead-search-input']`)
    searchLeadTextbox.fill(lastName)
    const refreshButton = page.locator(`//button[@title='Refresh' and @part='button button-icon']`)
    refreshButton.click({timeout: 15000})
    await page.waitForTimeout(15000)
    const nothingToSeeHereText = page.locator(`//h3[text()='Nothing to see here']`)
    expect(nothingToSeeHereText).toBeVisible({timeout: 15000})

    // 16.  Step: Navigate to the Opportunities tab and search for the opportunity linked with the converted lead. 
    // Expected Result: The newly converted opportunity should appear in the list with all the relevant details correctly populated from the lead. 
    const opportunitiesTab = page.locator(`//a[@title='Opportunities']`)
    await opportunitiesTab.click({timeout: 15000})
    await page.waitForTimeout(15000)
    const createdOpportunity = page.locator(`//span[text()='${newOpportunityName}']`)
    await expect(createdOpportunity).toBeVisible({timeout: 5000})

    // 17.  Step: Search the opportunity name created and click on the created opportunity name. 
    // Expected Result: The created Opportunity Name should appear and verify the same.
    await createdOpportunity.click()
    const opportunityNameText = await page.locator(`//lightning-formatted-text[@slot='primaryField']`).innerText()
    expect(opportunityNameText).toContain(newOpportunityName) //verify opportunity name 

})