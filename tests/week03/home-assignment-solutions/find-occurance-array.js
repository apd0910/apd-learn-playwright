/* Classroom Assignment: Arrays in JS 
 
Learning Objective:  
Learn how to count the occurrences of a specific element in an array using JavaScript. 
 
Expected Completion Time:  
Best Case: 10 minutes  
Average Case: 15 minutes  
 
Assignment Details:  
Find the number of occurrences. 
Given the array, const nums = [2,4,5,2,1,2]; 
if const k = 2, then output >> 3 
 
Assignment Requirements:  
1. Initialize count to 0. 
2. Loop through the array `nums`. 
3. If the element equals `k`, increment count. 
4. Return the count of `k` in `nums`. 
 
Hints to Solve:  
Loop through the array and compare the k with the array index value and if matches, increase the count  */

//solution 1
function findOccurrenceInArray(nums, k) {
    console.log(`Finding occurrences of ${k} in the array: ${nums}`)
    let count = 0; // Step 1: Initialize count to 0

    // Step 2: Loop through the array nums
    for (let i = 0; i < nums.length; i++) {
        // Step 3: If the element equals k, increment count
        if (nums[i] === k) count++
    }

    // Step 4: Return the count of k in nums
    return count;
}

//solution 2 using split
function findOccurrenceInArrayUsingSplit(nums, k) {
  console.log(`Finding occurrences of ${k} in the array using Split(): ${nums}`)
  console.log(nums.join('').split(k)) // print the split array
  return nums.join('').split(k).length - 1 // Using join and split to count occurrences
}

console.log(findOccurrenceInArray([2, 4, 5, 2, 1, 2], 2)) // Output: 3
console.log(findOccurrenceInArray([1, 2, 3, 4, 5], 6)) // Output: 0

console.log(findOccurrenceInArrayUsingSplit([2, 4, 5, 2, 1], 2)) // Output: 3
console.log(findOccurrenceInArrayUsingSplit([1, 2, 3, 4, 5], 6)) // Output: 0