const first = () => {
    const greet = 'Hi';
    const second = () => {
        alert(greet);
    }
    return second;
}

const newFunc = first();
newFunc();

// Closures = a function ran, the function executed, it's never going to execute again, but it's going to remember that there are references to those variables,
// so the child scope always has access to the parent scope

// Currying = the process of converting a function that takes multiple arguments into a function that take them one at a time
const multiply = (a, b) => a * b;
const curriedMultiply = (a) => (b) => a * b;
curriedMultiply(3)(4);

const multiplyBy5 = curriedMultiply(5);
multiplyBy5(5); // 25

// Compose = the act of putting two functions together to form a third function where the output of one function is the input of another
const compose = (f, g) => (a) => f(g(a));
const sum = (num) => num + 1;
compose(sum, sum)(5); // 7
