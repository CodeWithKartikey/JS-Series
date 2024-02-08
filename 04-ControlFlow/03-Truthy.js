// falsy values - false, 0, -0, BigInt 0n, "", null, undefined, NaN

// truthy values - "0", 'false', " ", [], {}, function(){}

const userEmail = []; // Empty array.

if (userEmail) {
    //console.log("I got user-email");
} else {
    //console.log("Don't have user-email");
}

if (userEmail.length === 0) {
    //console.log("Array is empty.");
} else {
    //console.log("Array have the values.");
}

const emptyObject = {};

if (Object.keys(emptyObject).length === 0) {
    //console.log("Object is empty");
} else {
    //console.log("Object have key & value pairs.");
}

// Nullish Coalescing Operator (??): null/undefined - ?? returns the first argument if it’s not null/undefined. Otherwise, the second one.

let value = null ?? undefined;
//console.log(value);

let value1 = 5 ?? 10;
//console.log(value1);

let value2 = null ?? 10;
//console.log(value2);

let value3 = undefined ?? 15;
//console.log(value3);

let value4 = null ?? 10 ?? 20;
//console.log(value4);

// Terniary Operator

const iceTeaPrice = 100;
// Syntax - condition ? true : false
iceTeaPrice <= 80 ? console.log("Ice tea price is less than 80.") : console.log("Ice tea price is more than 80.");