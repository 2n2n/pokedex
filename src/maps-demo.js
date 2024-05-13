const dataset = ["a", "b"];

dataset.forEach(function(item) {
    console.log(item);
});

const newArray = dataset.map(function(item) {
    return `<div>${item}</div>`;
});

// output:
// [ '<div>a</div>', '<div>b</div>' ]

