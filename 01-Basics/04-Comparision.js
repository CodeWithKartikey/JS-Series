//console.log("a" > "A"); // true

//console.log( 'Z' > 'A' ); // true
//console.log( 'Glow' > 'Glee' ); // true
//console.log( 'Bee' > 'Be' ); // true

/*
    When comparing values of different types, JavaScript converts the values to numbers & For boolean values, true becomes 1 and false becomes 0.
*/

//console.log( '2' > 1 ); // true, string '2' becomes a number 2
//console.log( '01' == 1 ); // true, string '01' becomes a number 1

//console.log( true == 1 ); // true
//console.log( false == 0 ); // true

let a = 0;
//console.log( Boolean(a) ); // false           

let b = "0";
//console.log( Boolean(b) ); // true

//console.log(a == b); // true

//console.log("2" === 2); // false

//console.log( null == undefined ); // true, they equal each other (in the sense of ==), but not any other value.

/*
    For maths and other comparisons ( <, >, <=, >= ) 
    null/undefined are converted to numbers: null becomes 0, while undefined becomes NaN.
*/

//console.log(null > 0); // false
//console.log(null == 0); // false
//console.log(null >= 0); // true

//console.log(undefined == 0); // false
//console.log(undefined > 0); // false
//console.log(undefined < 0); // false
