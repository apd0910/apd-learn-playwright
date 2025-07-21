
//Hoisting

//var hoisting

/* console.log(x);
var x = 10; */

/* Explanation
var x is hoisted to the top of the scope.
Only the declaration is hoisted, not the assignment. */

//Internally:

/* var y; //hoisted goes to undefined
console.log(y); // undefined
y = 10; */

//let and const hoisting: Modern JavaScript

console.log(z); // reference error
let z = 20;

console.log(a); //refrence error
const a = 30;

/* Explanation:
let and const are also hoisted, but not initialized.

They exist in a "Temporal Dead Zone (TDZ)" 
*/

//Internally :

let b; //(hoisted but in TDZ)
console.log(b); //Refrence error
b = 40;

const c; //(hoisted but in TDZ)
console.log(c); //Refrence error
c = 40;

