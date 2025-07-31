/* Assignment Details:  
Given a string s consisting of words and spaces, return the length of the last word in the string. 
Example 1: 
Input: s = "Hello World" 
Output: 5 
Explanation: The last word is "World" with length 5. 
Example 2:  
Input: s = "   fly me   to   the moon  " 
Output: 4 
Explanation: The last word is "moon" with length 4. 
Example 3:  
Write a function to check if two strings are anagrams. 
 Input: isAnagram('listen', 'silent') 
 Output: true 
 Input: isAnagram('hello', 'world')  
 Output: false 
 Explanation: An anagram is when you mix up the letters of a word to make a new one, using all the letters. 
 
Assignment Requirements:  
Example:1 
1. Split the string into an array of words. 
2. Find the last word in the array. 
3. Calculate the length of this word. 
 
Example:2 
1. Trim the String 
2. Split the String into Words 
3. Identify the Last Word 
4. Calculate the Length of the Last Word 
5. Return the length

Example:3 
1. Remove spaces and convert all letters to the same case 
2. Sort the Characters 
3. Compare Sorted Strings 
4. Return the Result */

// find last word length of a string
function findLastWordLength(str) {
    console.log(`Find the length of the last word in the given string: ${str}`)
    let strArr = str.trim().split(' ')
    return strArr[strArr.length - 1].length
}
console.log(findLastWordLength("Hello World"))
console.log(findLastWordLength("   fly me   to   the moon  "))

// check anagram
function isStringsAnagram(str1, str2) {
    console.log(`Check anagram for these 2 string : ${str1} and ${str2}`)
    str1 = str1.trim().toLowerCase().split('').sort().join('')
    str2 = str2.trim().toLowerCase().split('').sort().join('')
    return str1 === str2
}
console.log(isStringsAnagram('listen', 'silent'))
console.log(isStringsAnagram('hello', 'world'))
