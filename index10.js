//JavaScript - Accessing Elements of JavaScript Object Arrays
var students = [];

var student1 = {
    name: 'Joan Smith',
    birthYear: '2002',
    course: 'IFT 598',
    grade: 90,
    active: true,
    //age: () => 2022 - this.birthYear
    age: function calculate(){ // name function
        if (this.active){
            return 2022 - this.birthYear;
        }
    }
}

var student2 = {
    name: 'Andy Moore',
    birthYear: '2000',
    course: 'IFT 598',
    grade: 100,
    active: false,
    //age: () => 2022 - this.birthYear 
    age: function(){ // anonymous function
        if (this.active){
            return 2022 - this.birthYear;
        } else {
            return 0;
        }
    }
}

students.push(student1);
students.push(student2);
students.forEach((item)=> console.log(item.age()));

console.log(students);

// console.log(student['name']);
// console.log(student1.age());
// console.log(student2.age());
