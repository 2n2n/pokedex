// -- // Primitive types:
// -- - Numbers
// -- - String
// -- - Booleans
// -- - Object
// -- - Arrays
// -- - Functions

// JS

// function Person () {
//     this.name = ""
//     this.greet = function() {
//         console.log('Greetings from ', this.name, ' starting reactjs!')
//     }
// }

class Person {
    name;
    age;
    constructor(_name = 'Anonymous', _age = 0) {
        this.name = _name;
        this.age = _age;
    }

    greet = function() {
        console.log ('Greetings from', this.name ,'and my age is ', this.age)
    }
}

const { skills } = {
    name: "Anthony Yolach Lloveras",
    position: "Lead Developer",
    yearsOfExperience: 10,
    skills: [
        { title: 'Javascript', yrsOfExperience: 5 },
        { title: 'PHP', yrsOfExperience: 10 },
    ]
}

// for Dante's output: { title: 'PHP', yrsOfExperience: 10 }
const [java,php] = skills
// console.log(php)

console.log(php.title)
// Kendrick's output: PHP

