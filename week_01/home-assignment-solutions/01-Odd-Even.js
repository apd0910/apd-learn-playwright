/* Write a JavaScript function named `isOddOrEven` that takes an integer as input and 
returns `Odd` if the number is odd and `Even` if the number is even.  */

function isOddOrEven(number) {
    let numberType
    if ( number%2 === 0 ) numberType = "Even"
    else numberType = "Odd"
    return numberType
}

console.log(isOddOrEven(3))
console.log(isOddOrEven(4))