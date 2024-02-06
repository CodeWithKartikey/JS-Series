// Array

// One way to define the Array.
const numbers = [0, 1, 2, 3, 4, 5];
const heros = ["shaktiman", "naagraj"];

// Another way to define the Array.
const newNumber = new Array(1, 2, 3, 4);

//console.log(newNumber[1]);

// Array Methods -

numbers.push(6); // add an element to the end.
numbers.push(7); // add an element to the end.

//console.log(numbers);

numbers.pop(); // remove an element from the end.

//console.log(numbers);

numbers.unshift(9); // add an element to the start.

//console.log(numbers);

numbers.shift(); // remove an element from the start.

//console.log(numbers);

//console.log(numbers.includes(9));
//console.log(numbers.indexOf(3));

/*
    The join() method concatenates the elements of an array into a single string, using a specified separator between each element. If no separator is provided, it defaults to a comma (,).
*/

const newArray = numbers.join(); 

//console.log(numbers);
//console.log(newArray);

// slice, splice methods -

//console.log("A ", numbers);

// Slice does not effect the old array.

const sliceArray = numbers.slice(1, 4)

//console.log(sliceArray);
//console.log("B ", numbers);

// Splice effect the old array.

const spliceArray = numbers.splice(1, 3)

//console.log(spliceArray);
//console.log("C ", numbers); 
