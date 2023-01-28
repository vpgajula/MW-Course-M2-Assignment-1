//JavaScript Function Refactoring

//Name Function with interpolation
// function greetTheStudent(studentName){ //parameter //name function
//      return `Hello there ${studentName}`;
// }

//Anonymous Function or Expression
// const greetTheStudent = function(studentName){ //parameter //anonymous function //expression
//      return `Hello there ${studentName}`;
// }

//fat arrow function
// const greetTheStudent = (studentName) =>{ //parameter //fat arrow function //expression
//      return `Hello there ${studentName}`;
// }

//const greetTheStudent = (studentName) => `Hello there ${studentName}`;

const greetTheStudent = studentName => `Hello there ${studentName}`;

const student = 'John Smith';
const greet = greetTheStudent(student); //argument
console.log(greet);

//console.log(message + ' ' + studentName);
