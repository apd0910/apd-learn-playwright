//Named Functions

function funName1 () {
  //  console.log("Hello Team"); 
  let a=10;
  const b=10;
  return a+b;   
}

console.log(funName1())

//Anonymous function // Function expression

let funName2 = function () {
    console.log("Hello Team this is anonymous function");    
} 
funName2();

//Arrow Function:

let funName3 =  () => { // fat arrow replace your function keyword
   console.log("Hello Team this is arrow function");    
} 
funName3();

//Single line arrow function

const funName4 = (a,b) =>  a*b;
console.log(funName4(2,2)); 

//IIFE - Immediately invoked fuction

(function(){
console.log("Hello Team this is an IIFE function");
})

()
