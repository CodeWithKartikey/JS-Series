// if-else

const isUserloggedIn = true;

const temperature = 41;

if ( temperature === 40 ){
    //console.log("Temperature is less than 50.");
} else {
    //console.log("temperature is greater than 50");
}

// Comparisons : ( <, >, <=, >=, ==, !=, ===, !== )

const score = 200;

if (score > 100) {
    let power = "fly";
    //console.log(`User power: ${power}`);
}
//console.log(`User power: ${power}`);

const balance = 1000;

if (balance > 500) console.log("Result-1"), console.log("Result-2");

// if-elseif-else

if (balance < 500) {
    //console.log("Balance is less than 500.");
} else if (balance < 700) {
    //console.log("Balance is less than 700.");
} else if (balance < 900) {
    //console.log("Balance is less than 900.");
} else {
    //console.log("Balance is less than 1100.");
}

// Logical Operators

const userLoggedIn = true;
const debitCard = true;
const loggedInFromGoogle = false;
const loggedInFromEmail = true;

// OR - ||, AND - &&, NOT - !

// In classical programming, AND - (&&) returns true if both operands are truthy, otherwise give false.
if (userLoggedIn && debitCard && 2 == 3) {
    //console.log("User allow to buy course.");
} else {
    //console.log("User is not allowed to buy course.");
}

// In classical programming, the logical OR - (||) is meant to manipulate boolean values only. If any of its arguments are true, it returns true, otherwise it returns false.
if (loggedInFromGoogle || loggedInFromEmail) {
    //console.log("User logged in the website.");
} else {
    //console.log("User is not logged in.");
}

// The operator accepts a single argument and does the following - converts the operand to boolean type: (true/false) & returns the inverse value.

const value = true;
if(!value) {
    //console.log("Print with true.");
} else {
    //console.log("Print with false.");
}