const arrowFn = () => {
    console.log('arrow function was executed!')
    traditionalFn();
}

// arrowFn()

function traditionalFn() {
    console.log('traditional function was executed!')
}

const obj = {
    testArrowFn: () => {
        console.log("🚀 ~ testArrowFn:", this)
    },
    testFn: function() {
        console.log("🚀 ~ testFn:", this)
    }
}

// obj.testArrowFn()
// obj.testFn()

class Person {
    name;
    age;
    constructor(_name = 'Anonymous', _age = 0) {
        this.name = _name;
        this.age = _age;
    }

    greet = () => {
        console.log ('Greetings from', this.name ,'and my age is ', this.age)
    }

    greet2() {
        console.log ('Greetings 2 from', this.name ,'and my age is ', this.age)
    }
}

const { greet } = new Person('Dante', 20);
// greet();
 // greet(); // rule of thumb use the arrow functions when handling classes.


const longRunningTask = (cb) => {
    setTimeout(() => {
        cb();
        console.log("🚀 ~ longRunningTask was executed!")
    }, 1000)
};

const immediatelyInvokedTask = () => {
    console.log("🚀 ~ immediatelyInvokedTask was executed!");
}

longRunningTask(immediatelyInvokedTask);
