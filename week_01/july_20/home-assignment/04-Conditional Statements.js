/* Assignment Details:  
Create and call two JavaScript functions: `launchBrowser` with `if-else` for browser launch messages, and 
`runTests` with `switch` for test type messages. 
 
Assignment Requirements:  
Create two functions : launchBrowser, runTests where, 
    a) launchBrowser need to take input as browserName (string) and do not return any 
        - use if-else (chrome or otherwise) 
        - Print the value 
    b) runTests need to take input as testType (string) and do not return any  
        - use switch case (smoke, sanity, regression, default (smoke)) 
        - Print the values 
Call that function from the javascript */

function launchBrowser(browserName) {
    if (browserName === "chrome")
        console.log("Browser Name : chrome")
    else console.log("Browser Name : otherwise")
}

function runTests(testType) {
    switch(testType) {
        case "smoke":
            console.log("Test Type : Smoke")
            break
        case "sanity":
            console.log("Test Type : sanity")
            break
        case "regression":
            console.log("Test Type : regression")
            break
        default:
            console.log("Default Test Type : Smoke")
    }
}

launchBrowser('chrome')
launchBrowser('firefox')
runTests('sanity')
runTests('smoke')
runTests('regression')
runTests('default')