/* Assignment Details:  
Write a JavaScript function that evaluates a student's score and returns their grade using a switch statement 
to assess score ranges. 
 
Assignment Requirements:  
1. Create a function that takes a student's score as a parameter. 
2. Declare and initialize the variable. 
3. Use `switch` statement inside the function. 
4. Return the corresponding grade. 
5. Call the function and print the result.  */

function calcualteGrade(score) {
    let grade
    switch (true) {
        case (score >= 90 && score <= 100):
            grade = 'A+'
            break
        case (score >= 80):
            grade = 'A'
            break
        case (score >= 70):
            grade = 'B'
            break
        case (score >= 60):
            grade = 'C'
            break
        case (score >= 50):
            grade = 'D'
            break
        case (score >=0):
            grade = 'F'
            break
        default:
            grade = 'Invalid Score'
  }
  return grade
}

console.log(calcualteGrade(99))
console.log(calcualteGrade(89))
console.log(calcualteGrade(79))
console.log(calcualteGrade(69))
console.log(calcualteGrade(59))
console.log(calcualteGrade(49))