//reverse a string

function reverseString(str) {
    console.log(`Reverse the given String : ${str}`)
    let reveresedStr = ""
    for (let i = str.length - 1; i >= 0; i--) {
        reveresedStr += str[i]
    }
    return reveresedStr
}

console.log(reverseString("Playwright"))

//reverse a string - recursion

function reverseStringRecursion(str) {
    console.log(`Reverse the given String using recursion : ${str}`)
    if (str === "") return "";
    return reverseStringRecursion(str.slice(1)) + str[0]
}

console.log(reverseStringRecursion("Playwright"))


//reverse a string - use reverse()

function reverseStr(str) {
    console.log(`Reverse the given String using reverese() : ${str}`)
    return str.split('').reverse().join('')
}

console.log(reverseStr("Playwright"))