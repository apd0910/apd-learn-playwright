/* Assignment Details: 
Task: 
    Your task is to launch two separate browser instances using Playwright: 
    1. Load Red Bus in an Edge browser instance and verify the page title and URL. 
    2. Load Flipkart in a Firefox browser instance and verify the page title and URL. 
Preconditions: 
    1. Use Playwright to launch Edge and Firefox. 
    2. Create two separate browser instances. 
    3. Use the following URLs: 

o Red Bus: https://www.redbus.in 
o Flipkart: https://www.flipkart.com 

Requirements: 
 Red Bus (Edge): 
    o Load the home page and print the page title and current URL. 
 Flipkart (Firefox): 
    o Load the home page and print the page title and current URL. 
Hints: 
     Use page.title() to retrieve the page title. 
     Use page.url() to retrieve the current page URL. 
Expected Outcome: 
     Upon completion, you should be able to navigate two websites in two separate browser 
    instances (Edge and Firefox), retrieve page information, and print the page titles and 
    URLs */

import { chromium, firefox, test } from "@playwright/test";

test(`test to learn two separate browser contexts`, async() => {

    // Context 1
    const browser1 = await chromium.launch()
    const context1 = await browser1.newContext()
    const page1 = await context1.newPage()
    await page1.goto('https://www.redbus.in')

    //get URL
    const url1 = page1.url()
    console.log(`URL - ${url1}`)

    //get page title
    const title1 = await page1.title()
    console.log('Page Title : ' + title1)

    // Context 2

    const browser2 = await firefox.launch()
    const context2 = await browser2.newContext()
    const page2 = await context2.newPage()
    await page2.goto('https://www.flipkart.com')

    //get URL
    const url2 = page2.url()
    console.log(`URL - ${url2}`)

    //get page title
    let title2 = await page2.title()
    console.log('Page Title : ' + title2)

    // close both browser instances
    await browser1.close()
    await browser2.close()

})