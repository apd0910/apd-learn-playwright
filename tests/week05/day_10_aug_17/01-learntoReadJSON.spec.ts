import { test  } from "@playwright/test";
import credentials from "../../../Data/login.json"

test.describe.serial(`Login tests in serial mode`,async () => {
    
for(let data of credentials){

    test(`Learn to read data from JSON ${data.TCaseId}`,async ({page}) => {
    
    await page.goto(`http://leaftaps.com/opentaps/control/main`);

    await page.locator(`#username`).fill(data.Username);
    await page.locator(`#password`).fill(data.Password); 

    await page.locator(`.decorativeSubmit`).click()
})

}

})
//Internally:

/* First Iteration :
----------------------
test(`Learn to read data from JSON`,async ({page}) => {
    
    await page.goto(`http://leaftaps.com/opentaps/control/main`);

    await page.locator(`#username`).fill(data[0].Username);
    await page.locator(`#password`).fill(data[0].Password); 

    await page.locator(`.decorativeSubmit`).click() 
    
    Second Iteration:
    ------------------
    
    test(`Learn to read data from JSON`,async ({page}) => {
    
    await page.goto(`http://leaftaps.com/opentaps/control/main`);

    await page.locator(`#username`).fill(data[0].Username);
    await page.locator(`#password`).fill(data[0].Password); 

    await page.locator(`.decorativeSubmit`).click()*/