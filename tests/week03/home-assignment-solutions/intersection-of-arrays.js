/* Assignment Requirements: 
1. Write a function named `intersection` that accepts two arguments, `arr1` and `arr2`, which are 
arrays of numbers, and returns an array of their intersection. 
2. Ensure no duplicate elements in the resulting array. If an element appears in both `arr1` and 
`arr2`, it should appear only once in the result. 
3. Use a loop to find common elements. Iterate through each element of `arr1` and check if it is 
present in `arr2` and not already included in the result array. 
4. Include example calls to the `intersection` function with different arrays to demonstrate the 
function’s functionality. Include examples with no common elements, all elements common, and 
typical cases. 
 
Expected Outcome: 
Upon completion, you should be able to: 
- Understand the concept of arrays and loops in JavaScript. 
- Demonstrate the calculation of intersection for various array inputs, handling both typical and 
edge cases. */

function arr_intersection(arr1, arr2) {
    console.log(`Finding intersection of arrays: ${arr1} and ${arr2}`);

    let result = []; // Step 1: Initialize an empty array to store the intersection

    if (arr1.length === 0 || arr2.length === 0) {
        console.log("One or both arrays are empty, returning an empty intersection.");
        return result; // If either array is empty, return an empty array
    }

    if (arr1.length !== arr2.length) {
        console.log("Arrays are not of the same length, but we can still find intersection.");
        [arr1, arr2] = arr1.length < arr2.length ? [arr1, arr2] : [arr2, arr1]; // Ensure arr1 is the smaller array
    }

    // Step 2: Loop through each element in arr1
    for (let i = 0; i < arr1.length; i++) {
        // Step 3: Check if the current element is in arr2 and not already in result
        if (arr2.includes(arr1[i]) && !result.includes(arr1[i])) {
            result.push(arr1[i]); // Step 4: Add the element to result if it's common
        }
    }

    return result; // Return the resulting intersection array
}

console.log(arr_intersection([1, 2, 3], [2, 3, 4])); // Output: [2, 3]
console.log(arr_intersection([1, 2, 3], [4, 5, 6])); // Output: []