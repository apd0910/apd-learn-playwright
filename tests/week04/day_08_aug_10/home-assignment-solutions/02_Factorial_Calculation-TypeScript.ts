/* Assignment Details: 
Create a TypeScript program that defines a function to compute the factorial of a given non-
negative integer using a loop (iterative approach). 
 
Assignment Requirements: 
1. Write a function named `factorial` that accepts an argument `n`, which is a non-negative integer, 
and returns its factorial. 
2. Include a check to ensure that the factorial is not computed for negative numbers. If a negative 
number is passed, the function should throw an error. 
3. Use a loop to compute the factorial. Initialize a result variable and multiply it by each integer 
from 2 up to `n`. 
4. Include example calls to the `factorial` function with different integers to demonstrate the 
function’s functionality. Include at least one example where an error is thrown due to a negative 
input */

// 1. Write a function named `factorial` that accepts an argument `n`, which is a non-negative integer, 
// and returns its factorial. 
// 2. Include a check to ensure that the factorial is not computed for negative numbers. If a negative 
// number is passed, the function should throw an error. 
// 3. Use a loop to compute the factorial. Initialize a result variable and multiply it by each integer 
// from 2 up to `n`. 
function factorial(num : number) : number {
    if (num < 0) {
        throw new Error("Factorial is not defined for negative numbers")
    } 
    let factorial : number = 1
    for(let n = 2; n <= num; n++) {
        factorial = factorial * n
    }
    return factorial
}


// 4. Include example calls to the `factorial` function with different integers to demonstrate the 
// function’s functionality. Include at least one example where an error is thrown due to a negative 
// input
try {
    console.log(`Factoial of 0 : ${factorial(0)}`)
    console.log(`Factoial of 1 : ${factorial(1)}`)
    console.log(`Factoial of 2 : ${factorial(2)}`)
    console.log(`Factoial of 3 : ${factorial(3)}`)
    console.log(`Factoial of 5 : ${factorial(5)}`)
    console.log(`Factoial of -5 : ${factorial(-5)}`)
} catch(error) {
    console.log(`Error Occured : ${(error as Error).message}`)
}