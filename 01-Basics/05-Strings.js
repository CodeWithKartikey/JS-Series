const userName = "hitesh";
const repoCount = 50;

//console.log(`Hello my name is ${userName} and my repo count is ${repoCount}`);

const gameName = new String('chai-and-code.com');

//console.log(gameName[0]);
//console.log(gameName.__proto__);
//console.log(gameName.length);
//console.log(gameName.toUpperCase());
//console.log(gameName.toLowerCase());
//console.log(gameName.charAt(2));
//console.log(gameName.indexOf('c')); // start to end.
//console.log(gameName.lastIndexOf('c')); // end to start.
//console.log(gameName.split('-'));

// There are 3 methods in JavaScript to get a substring: substring, substr and slice but we will not use substr.

const anotherString1 = gameName.slice(0, 4);
//console.log(anotherString1);

const anotherString2 = gameName.slice(3);
//console.log(anotherString2);

const anotherString3 = gameName.slice(-8, -4);
//console.log(anotherString3);

/*
    This is almost the same as slice, but it allows start to be greater than end (in this case it simply swaps start and end values).
*/

const newString1 = gameName.substring(0, 4);
//console.log(newString1);

const newString2 = gameName.substring(4, 0); // gameName.substring(0, 4) - Under the hood.
//console.log(newString2);

const newStringOne = "   hitesh    ";
//console.log(newStringOne.trim()); // hitesh

const url = "https://hitesh.com/hitesh%20choudhary%20page";

//console.log(url.replace('%20', '-')); // Remove only first %20 from the url not all - https://hitesh.com/hitesh-choudhary%20page.
//console.log(url.replace(/%20/g, '-')); // Remove all %20 from the url and replace with (-) - https://hitesh.com/hitesh-choudhary-page.
//console.log(url.includes('page')); // To check, is there any string with this name is present or not - true.

