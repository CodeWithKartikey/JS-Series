let scoreInString = "abc";

//console.log(typeof score); // string

let valueInNumber = Number(scoreInString);

//console.log(typeof valueInNumber); // NaN
//console.log(valueInNumber); // abc

let score = "100";

//console.log(typeof score); // string

let scoreInNumber = Number(score);

//console.log(typeof scoreInNumber); // number
//console.log(scoreInNumber); // 100

let isLoggedIn = 234;
let booleanIsLoggedIn = Boolean(isLoggedIn);

//console.log(booleanIsLoggedIn); // true

// 1/number/string => true;
// 0/""/null/undefined/NaN => false;

let someNumber = 33;

let stringNumber = String(someNumber);

//console.log(stringNumber); // "33"
//console.log(typeof stringNumber); // string

let booleanValue = true;

let newValue = String(booleanValue); // now booleanValue is a string "true"
alert(typeof newValue); // string

let value = 3
let negValue = -value;

//console.log(negValue); // -3

//console.log("1" + 2); // 12
//console.log(1 + "2"); // 12
//console.log("1" + 2 + 2); // 122
//console.log(1 + 2 + "2"); // 32
//console.log(1 + "2" + 2); // 122
//console.log(1 + 2 + 3 + 5 + "2"); // 112

//console.log("1" - "6"); // -5
//console.log("6" - "2"); // 4

let gameCounter = 100;

//console.log(gameCounter++); // 100
//console.log(++gameCounter); // 101

//console.log(gameCounter--); // 100
//console.log(--gameCounter); // 99

let chooseValue = (1 + 3, 3 + 4);
//console.log(chooseValue); // 7
 
// Link to study.
// https://tc39.es/ecma262/multipage/abstract-operations.html#sec-type-conversion