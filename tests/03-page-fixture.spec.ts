import { chromium, test } from "@playwright/test";

test(`launch browser using fixtures test`, async({page}) => {

    await page.goto('https://www.amazon.in/')

    //get URL
    const url = page.url()
    console.log(`URL - ${url}`)
})