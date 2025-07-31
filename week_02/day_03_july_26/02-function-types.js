//named function
//anonymous function
//arrow function


//Named function :


function funName1(x,y){


    // let a=10;
    // let b=10;
    let c=a+b
    console.log(c)
    
}


console.log(funName1(20,10))


//Anonymous Function / Function Expression :


let x = "10";



let funName2 = function (){
   console.log("Hello Tean this is an anonymous function");     
}
funName2()


//Arrow Function :
 
let funName3 = () => { //fat arrow replace tge function keyword
   console.log("Hello Team this is an arrow function");  
   console.log("Addon line");
      
}
funName3()


//Single line arrow function


const funName4 = (a,b) => a*b;


console.log(funName4(2,2))
