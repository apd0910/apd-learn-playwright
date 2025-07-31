function showAllStringMethods() {
  const str = "  JavaScript is Awesome!  ";

  // 1. length - returns number of characters in string
  console.log("1. length:", str.length);

  // 2. trim() - removes leading and trailing whitespace
  console.log("2. trim():", str.trim());

  // 3. toLowerCase() - converts all characters to lowercase
  console.log("3. toLowerCase():", str.toLowerCase());

  // 4. toUpperCase() - converts all characters to uppercase
  console.log("4. toUpperCase():", str.toUpperCase());

  // 5. includes() - checks if substring exists
  console.log("5. includes('Awesome'):", str.includes("Awesome"));

  // 6. startsWith() - checks if string starts with given value
  console.log("6. startsWith('  Java'):", str.startsWith("  Java"));

  // 7. endsWith() - checks if string ends with given value
  console.log("7. endsWith('!  '):", str.endsWith("!  "));

  // 8. indexOf() - finds the first occurrence of a substring
  console.log("8. indexOf('is'):", str.indexOf("is"));

  // 9. lastIndexOf() - finds the last occurrence of a substring
  console.log("9. lastIndexOf('a'):", str.lastIndexOf("a"));

  // 10. slice(start, end) - extracts part of the string
  console.log("10. slice(2, 12):", str.slice(2, 12)); // "JavaScript"

  // 11. substring(start, end) - similar to slice, but doesn't support negative indices
  console.log("11. substring(2, 12):", str.substring(2, 12));

  // 12. at(index) - gets character at index, supports negative index
  console.log("12. at(-1):", str.at(-1)); // last character

  // 13. charAt(index) - gets character at index, no negative support
  console.log("13. charAt(2):", str.charAt(2));

  // 14. replace() - replaces first match
  console.log("14. replace('Awesome', 'Great'):", str.replace("Awesome", "Great"));

  // 15. replaceAll() - replaces all matching substrings
  console.log("15. replaceAll('a', '*'):", str.replaceAll("a", "*"));

  // 16. split(delimiter) - splits string into array
  console.log("16. split(' '):", str.trim().split(" "));

  // 17. repeat(n) - repeats string n times
  console.log("17. repeat(3):", "Hi ".repeat(3)); // "Hi Hi Hi "

  // 18. padStart(length, char) - pads start of string
  console.log("18. padStart(6, '0'):", "42".padStart(6, "0")); // "000042"

  // 19. padEnd(length, char) - pads end of string
  console.log("19. padEnd(6, '-'):", "42".padEnd(6, "-")); // "42----"

  // 20. match(regex) - matches regex pattern (returns array or null)
  console.log("20. match(/is/):", str.match(/is/)); // ["is"]

  // 21. matchAll(regex) - returns iterator for all regex matches
  const matchAllExample = [..."test1 test2".matchAll(/test\d/g)];
  console.log("21. matchAll(/test\\d/g):", matchAllExample.map(m => m[0]));

  // 22. search(regex) - returns index of regex match
  console.log("22. search(/Script/):", str.search(/Script/));

  // 23. concat() - joins multiple strings
  console.log("23. concat():", "Java".concat("Script")); // "JavaScript"

  // 24. valueOf() - returns primitive value of string (mostly internal)
  console.log("24. valueOf():", str.valueOf());

  // 25. toString() - returns string itself (used when coercing)
  console.log("25. toString():", str.toString());

  // 26. localeCompare() - compares two strings based on locale
  console.log("26. localeCompare('javascript'):", str.trim().localeCompare("javascript"));
}

showAllStringMethods();


/* ------------------------------------
💬 charAt() vs at()
------------------------------------
charAt(index):
  - Returns character at the given index
  - Does NOT support negative indexes
  - Returns "" for out-of-bound indexes
Example: "hello".charAt(1) → "e"

at(index):
  - Returns character at the given index
  - Supports negative indexes (e.g., -1 = last char)
  - Returns undefined for out-of-bounds
Example: "hello".at(-1) → "o"


------------------------------------
💬 slice() vs substring()
------------------------------------
slice(start, end):
  - Accepts negative or positive indexes
  - Returns substring from start to end (exclusive)
  - Does NOT swap indexes if start > end

substring(start, end):
  - Only accepts non-negative indexes
  - Automatically swaps start and end if start > end
  - No support for negative indexes

Example:
"JavaScript".slice(-6) → "Script"
"JavaScript".substring(4, 10) → "Script"
"JavaScript".substring(10, 4) → "Script" (swaps automatically) */