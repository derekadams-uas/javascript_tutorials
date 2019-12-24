const array = [1, 2, 10, 16];

const double = [];
const newArray = array.forEach((num) => {
    double.push(num * 2);
})

// Map
const mapArray = array.map((num) => {
    return num * 2;
})

const mapArray = array.map(num => num * 2);

// Filter
const filterArray = array.filter(num => num > 5);

// Reduce
const reduceArray = array.reduce((accumulator, num) => {
    return accumulator + num;
});

const reduceArray = array.reduce((accumulator, num) => {
    return accumulator + num;
}, 0);
