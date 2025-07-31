/* Assignment Requirements: 

- Create a Promise named `conditionalPromise` that resolves with the message 
`"Resolved successfully"` if a random number is greater than 0.5, and rejects with the 
message `"Rejected"` otherwise.  
[Hint: Use Math.random()] 
- Use the `conditionalPromise` created to log the resolved or rejected value to the 
console using `.then` and `.catch` */

let conditionalPromise = new Promise((resolve, reject) => {
    let number = Math.random()
    console.log(`Number : ${number}`)
    if (number > 0.5) resolve("Resolved successfully")
    else reject("Rejected")
})

conditionalPromise.then(message=>{
    console.log(message);   
}).catch(error=>{
    console.log(error); 
})


/* Assignment Steps:  
Create a function called fetchDataFromDatabase() that returns a Promise.  
• Inside the function, use setTimeout() to simulate a delay of 3 seconds.  
• Use a simple condition like const data = true to simulate whether data is available.  
• If data is true, resolve the Promise with the message "Data fetched successfully!".  
 If data is false, reject the Promise with the message "Data not found!".  
Call the function fetchDataFromDatabase() and handle the Promise:  
o Use .then() to print "Data fetched successfully!" if the 
Promise is resolved. o  Use .catch() to print "Data not found!" if 
the Promise is rejected.  
  
What Happens:  
• The message "Fetching data from database..." is printed immediately.   After 3 
seconds, either:  
o "Data fetched successfully!" (if data is found) or o "Data not 
found!" (if data is not found) */


let fetchDataFromDatabase = new Promise((resolve, reject) => {
    console.log("Fetching data from database...")
    setTimeout(() => {
        const data = false
        console.log(`Data Fetch Status : ${data}`)
        if (data) resolve("Data fetched successfully!")
        else reject("Data not found!")
    }, 3000);
})

fetchDataFromDatabase.then(message=>{
    console.log(message);   
}).catch(error=>{
    console.log(error); 
})