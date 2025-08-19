/* Assignment Details:
Create a TypeScript program that defines a function to compute the nth Fibonacci number using a
loop (iterative approach).
 
Assignment Requirements:
1. Implement a function named `fibonacci` that accepts an argument `n`, which is a non-negative
integer, and returns the nth Fibonacci number.
2. Use a loop to compute the Fibonacci number. Initialize two variables to store the first two
Fibonacci numbers and update these iteratively up to `n`.
3. Provide example calls to the `fibonacci` function with different integers to demonstrate the
function’s functionality */
// 1. Implement a function named `fibonacci` that accepts an argument `n`, which is a non-negative 
// integer, and returns the nth Fibonacci number. 
// 2. Use a loop to compute the Fibonacci number. Initialize two variables to store the first two 
// Fibonacci numbers and update these iteratively up to `n`. 
function fibonacciSequence(num) {
    if (num < 0) {
        throw new Error("Fibonacci sequence not possible for negative values");
    }
    var sequence = [];
    var prev = 0; // F(0)
    var curr = 1; // F(1)
    for (var i = 0; i <= num; i++) {
        sequence.push(prev);
        var next = prev + curr;
        prev = curr;
        curr = next;
    }
    return sequence;
}
// 3. Provide example calls to the `fibonacci` function with different integers to demonstrate the 
// function’s functionality
try {
    console.log("Fibinocci Sequence for 0 : ".concat(fibonacciSequence(0)));
    console.log("Fibinocci Sequence for 1 : ".concat(fibonacciSequence(1)));
    console.log("Fibinocci Sequence for 2 : ".concat(fibonacciSequence(2)));
    console.log("Fibinocci Sequence for 10 : ".concat(fibonacciSequence(10)));
    console.log("Fibinocci Sequence for -10 : ".concat(fibonacciSequence(-10)));
}
catch (error) {
    console.log("Error Occcured : ".concat(error.message));
}
