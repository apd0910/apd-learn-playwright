/* Create a JavaScript function that determines if a number is positive, negative, or zero and returns a 
corresponding string indicating the type. */

function determineNumberType(number) {
    let numberType
    if (number > 0) numberType = "positive"
    else if (number < 0) numberType = "negative"
    else numberType = "zero"
    return numberType
}

console.log(determineNumberType(1))
console.log(determineNumberType(0))
console.log(determineNumberType(-1))