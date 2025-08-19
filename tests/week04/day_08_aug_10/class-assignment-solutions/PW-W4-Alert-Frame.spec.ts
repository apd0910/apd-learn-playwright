/* Assignment Details:  
Automate interactions with frames, trigger alerts, and verify the displayed text based on 
actions using Playwright on the given application.  
 
Preconditions:  
- Use page fixture  
- Load the URL (https://www.w3schools.com/js/tryit.asp?filename=tryjs_confirm)  
 
Assignment Requirements:  
- Click Try it.  
- Get the message, type and accept the alert.  
- Retrieve the text “You pressed OK!” and verify it.  
 
Hints to Solve:  
- Use event listener page.on and page.frameLocator to perform the required actions.  
- Use the appropriate method of Alert to accept the alert.  
- Assert the text after handling the Alert */

import { expect, test } from "@playwright/test";

test(`Learn Alerts`,async ({page}) => {

    // Use page fixture  
    // Load the URL (https://www.w3schools.com/js/tryit.asp?filename=tryjs_confirm) 
    const url : string = `https://www.w3schools.com/js/tryit.asp?filename=tryjs_confirm`
    await page.goto(url)

    // Get the message, type and accept the alert. 
    page.on(`dialog`, async(alert) => {
        console.log(`Alert Msg : ` + alert.message())
        console.log(`Alert Type : ` + alert.type())
        alert.accept()
    })

    // Click Try it.  
    const frame = page.frameLocator(`iframe[id='iframeResult']`)
    const tryItButton = frame.locator(`//button[text()='Try it']`)
    await tryItButton.click()

    // Retrieve the text “You pressed OK!” and verify it.  
    const alertActionMsg = frame.locator(`#demo`)
    expect(alertActionMsg).toHaveText(`You pressed OK!`)

})