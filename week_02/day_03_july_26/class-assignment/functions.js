/* Assignment Requirements:  
Task 1: Function Declaration  
Create a function named `userProfile` that takes a `name` as a parameter and logs “Hello, 
<name>!" to the console.  

Task 2: Arrow Function  
Create an arrow function named `double` that takes a number as a parameter and returns 
double its value.  

Task 3: Anonymous Function  
Use an anonymous function with `setTimeout` to log `"This message is delayed by 2 seconds"` 
after 2 seconds.  

Task 4: Callback Function  
Create a function named `getUserData` that takes a callback function as a parameter. Inside 
`getUserData`, simulate fetching data with `setTimeout` and then call the callback function with 
that should print “Call Back Function” after 3 seconds.  
Call the `getUserData` function and log message using the callback function. */


let profile = function userProfile(name) {
    console.log(`Hello ${name}!`)
}

let double = (number) => { console.log(`Doubling of number : ${number} = ` + (number * 2))}
double(5)

setTimeout(() => {
    console.log("This message is delayed by 2 seconds")
}, 2000);

function getUserData(name, callback) {
    setTimeout(() => {
        console.log("Fetching Data in 3 seconds")
    }, 3000);
    callback(name)
}
getUserData('Arun', profile)