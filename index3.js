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

//const greetTheStudent = studentName => `Hello there ${studentName}`;

// const fullName = function(firstName, middleName, lastName){
//     return `${lastName}, ${middleName}. ${firstName}`;
// }

//fat arrow function
// const fullName = (firstName, middleName, lastName) => {
//     return `${lastName}, ${middleName}. ${firstName}`;
// }

const fullName = (firstName, middleName, lastName) => `${lastName}, ${middleName}. ${firstName}`;

// const student = 'John Smith';
// const greet = greetTheStudent(student); //argument
// console.log(greet);

const titleName = fullName ('Jane', 'R', 'Mary');
console.log(titleName);

//console.log(message + ' ' + studentName);
