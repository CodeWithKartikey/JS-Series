//  Primitive Data Types.

//  7 types : String, Number, Boolearn, null, undefined, Symbol, BigInt.

let userName = "Hitesh"; // string

let score = 100; // number

let isLoggedIn = false; // boolen

const outsideTemp = null; // null

let userId; // undefined

const id = Symbol('123') // symbol
const anotherId = Symbol('123') // symbol

//console.log(typeof anotherId);

//console.log(id === anotherId);

const bigNumber = 3456543576654356754n; // bigint

// Reference (Non primitive) Data Types.

// Array, Objects, Functions.

const heros = ["shaktiman", "naagraj", "doga"];

let myObj = {
    name: "User",
    age: 22,
    gender: "male",
    mobile: 9876543210
};

const createFunction = function() {
    console.log("Hello world");
}

// https://262.ecma-international.org/5.1/#sec-11.4.3