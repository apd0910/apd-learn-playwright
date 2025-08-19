/* Assignment Details: 
Your task is to interact with the web elements present inside iframes 
 
Precondition: 
- Launch Chromium in non-headless mode 
- Use required fixtures 
- Navigate to https://leafground.com/frame.xhtml 
 
Requirements: 
- Interact with the Click Me button inside frame 
- Assert the text changed after clicking the button 
- Get the total count of frames present in the page 
- Interact with the Click Me button present inside the nested frames 
- Assert the text changed after clicking the button */

import { expect, test } from "@playwright/test";

test(`Learn iframes`,async ({page}) => {

    // Navigate to https://leafground.com/frame.xhtml 
    const url : string = `https://leafground.com/frame.xhtml`
    await page.goto(url)
    
    // Interact with the Click Me button inside frame 
    // Assert the text changed after clicking the button 
    const frame = page.frameLocator(`iframe[src='default.xhtml']`)
    const clickMeBtnInsideFrame = frame.locator(`#Click`)
    expect(clickMeBtnInsideFrame).toHaveText('Click Me')
    await clickMeBtnInsideFrame.click()
    expect(clickMeBtnInsideFrame).toHaveText('Hurray! You Clicked Me.')    

    //Get the total count of frames present in the page 
    const frames = page.frames()
    const framesCount = frames.length
    console.log(`Number of Frames : ${framesCount}`)
    expect(framesCount).toEqual(5)

    // Interact with the Click Me button present inside the nested frames 
    // Assert the text changed after clicking the button
    const outerFrame = page.frameLocator(`iframe[src='page.xhtml']`)
    const innerFrame = outerFrame.frameLocator(`iframe[src='framebutton.xhtml']`)
    const clickMeBtnInnerFrame = innerFrame.locator(`#Click`)
    expect(clickMeBtnInnerFrame).toHaveText('Click Me')
    await clickMeBtnInnerFrame.click()
    expect(clickMeBtnInnerFrame).toHaveText('Hurray! You Clicked Me.')  

})