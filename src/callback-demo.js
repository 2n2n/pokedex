
function main(cb) {
    console.log('main function was called!');
    cb()
}

main(function () {
    console.log('you called me for later');
})

function expression(dataSet = [], cb = function() {}) {
    return cb(dataSet);
}

function display(dataset) {
    for(let item of dataset) {
        // console.log(item);
    }
}

function sum(dataset) {
    let total= 0;
    for(let item of dataset) {
        total += item
    }
    console.log('total:', total)
}

function multiplication(dataset) {
    let total= 1;
    for(let item of dataset) {
        total = item * total;
    }
    console.log('total:', total)
}


// expression(['dog', 'cat', 'mouse'], display);
// expression([1, 2], sum); // 3

// expression([2,5], multiplication); // 10

