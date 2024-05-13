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
    greet = function() {
        console.log ('Greetings from', this.name)
    }
}

const p1 = new Person()
p1.name = "Anthony"

const p2 = new Person()
p2.name = "kendrick"

const participants = [p1, p2];

console.log(participants)

console.log(participants[0].greet())
console.log(participants[1].greet())