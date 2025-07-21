/* Declare a global variable and shadow it inside a function using both `var` and `let` to see how they behave 
differently when printed. */

/* Assignment Requirements:   
1. Declare a const name as browserName (global)  
2. Assign value as Chrome  
3. Create a function by name getBrowserName  
4. Create if condition inside function to check if browser is chrome, then  
5. Declare a local variable (browserName) and print that variable inside function (outside block) 
6. Call that function from the javascript */

const browserName = "Chrome"

function getBrowserName(browserName) {
    if (browserName === "Chrome") {
        var browserName = "Edge"
    }
    console.log("Inside function : Browser Name : " + browserName)
}

getBrowserName("Chrome")
console.log("Outside function / Global : Browser Name : " + browserName)