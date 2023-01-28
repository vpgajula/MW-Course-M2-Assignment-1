//Introduction to JavaScript -1

//function with parameter
//    function greetTheStudent(studentName){ //parameter
//        const message = 'Hello there!';
//        const greeting = message + ' ' + studentName;
//        return greeting;
//    }

//function with interpolation
function greetTheStudent(studentName){ //parameter
     return `Hello there ${studentName}`;
}

const student = 'John Smith';

const greet = greetTheStudent(student); //argument
console.log(greet);

//console.log(message + ' ' + studentName);
