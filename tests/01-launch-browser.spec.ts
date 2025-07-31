import { chromium, test } from "@playwright/test";

test(`launch browser manually test`, async() => {

    // by default headless : true -> to change update playwright.config.ts in use{} section
    // update playwright.config.ts file (projects{} section) to config the browsers that needs to be tested
    const browser = await chromium.launch()
    const context = await browser.newContext()
    const page = await context.newPage()
    await page.goto('https://www.amazon.in/')

    //get URL
    const url = page.url()
    console.log(`URL - ${url}`)
})