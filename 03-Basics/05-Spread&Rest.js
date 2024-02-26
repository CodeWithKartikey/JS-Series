// Spread Operator (...) - Expand the values
/*
    Spread Operator (...): The spread operator is used to expand elements of an iterable (like an array) into places where multiple elements (or arguments) are expected. It's used for spreading values, expanding arrays, objects, or function arguments.
*/

const arrayOne = [1, 2, 3];
const arrayTwo = [...arrayOne, 4, 5, 6];

console.log(arrayTwo); // [1, 2, 3, 4, 5, 6]

// Rest Parameter Operator (...) - Collect the values
/*
    Rest Parameter (...): The rest parameter syntax allows us to represent an indefinite number of arguments as an array within a function definition. It's used for collecting values, gathering multiple arguments into a single array parameter.
*/

function sum(...numbers) {
    return numbers.reduce((total, num) => total + num, 0);
}

console.log(sum(1, 2, 3, 4, 5)); // Output: 15
console.log(sum(2, 3)); // Output: 5
console.log(sum()); // Output: 0

/*
    The sum function accepts any number of arguments using the rest parameter (...numbers).
    Within the function, numbers is treated as an array that contains all the arguments passed to the function.
*/