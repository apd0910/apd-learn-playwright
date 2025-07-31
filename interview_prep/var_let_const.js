// ----------------------------------------
// 🚩 var vs let vs const in JavaScript
// ----------------------------------------

// ----------------------------------------
// 🧠 Summary Table
// ----------------------------------------

/*
| Feature           | var           | let           | const           |
|------------------|---------------|---------------|-----------------|
| Scope            | Function      | Block         | Block           |
| Hoisted          | Yes (undefined) | Yes (TDZ)   | Yes (TDZ)       |
| Redeclaration    | ✅ Allowed    | ❌ Error      | ❌ Error         |
| Reassignment     | ✅ Allowed    | ✅ Allowed    | ❌ Not Allowed   |
| Temporal Dead Zone| No           | Yes           | Yes             |
*/

/*
🔹 1. Scope:
    - var   → Function-scoped
    - let   → Block-scoped
    - const → Block-scoped
*/

// Example 1: Scope difference
function testScope() {
  if (true) {
    var a = 1;     // function-scoped
    let b = 2;     // block-scoped
    const c = 3;   // block-scoped
  }

  console.log("a (var):", a); // ✅ Accessible
  // console.log("b (let):", b); // ❌ ReferenceError
  // console.log("c (const):", c); // ❌ ReferenceError
}

testScope();


/*
🔹 2. Hoisting:
    - var   → Hoisted to top and initialized as undefined
    - let   → Hoisted but in TDZ (Temporal Dead Zone) until declared
    - const → Hoisted but in TDZ and must be initialized at declaration
*/

// Example 2: Hoisting
function testHoisting() {
  console.log(x);   // undefined ✅ (hoisted)
  // console.log(y);   // ❌ ReferenceError (in TDZ)
  // console.log(z);   // ❌ ReferenceError (in TDZ)

  var x = 10;
  let y = 20;
  const z = 30;
}

testHoisting();


/*
🔹 3. Reassignment:
    - var   → Can be reassigned
    - let   → Can be reassigned
    - const → ❌ Cannot be reassigned
*/

// Example 3: Reassignment
var name = "Alice";
name = "Bob"; // ✅ OK

let age = 25;
age = 30;     // ✅ OK

const country = "Canada";
// country = "USA"; // ❌ TypeError: Assignment to constant variable


/*
🔹 4. Redeclaration:
    - var   → Can be redeclared within same scope
    - let   → ❌ Cannot be redeclared in same scope
    - const → ❌ Cannot be redeclared in same scope
*/

// Example 4: Redeclaration
var city = "Toronto";
var city = "Vancouver"; // ✅ Allowed

let lang = "JS";
// let lang = "TS"; // ❌ SyntaxError

const pi = 3.14;
// const pi = 3.1415; // ❌ SyntaxError


/*
🔹 5. Mutability with const:
    - const prevents reassignment, but not object/array mutation
*/

// Example 5: const with objects and arrays
const person = { name: "Alice" };
person.name = "Bob"; // ✅ Allowed (object is mutable)

const arr = [1, 2, 3];
arr.push(4);         // ✅ Allowed

// person = {};      // ❌ Reassignment not allowed
// arr = [];         // ❌ Reassignment not allowed
