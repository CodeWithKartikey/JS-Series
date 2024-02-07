// Scope in JS.

const a = 300;
var b = 500;
let c = 300;

if (true) {
    let a = 10;
    b = 20;
    const c = 30;
    //console.log("INNER: ", a);
    //console.log("INNER: ", b);
    //console.log("INNER: ", c);
}

//console.log(a);
//console.log(b);
//console.log(c);

function one(){
    const userName = "Hitesh";
    function two(){
        const website = "www.hitesh.com";
        //console.log("Inner :", userName);
        //console.log(website);
    };
    //console.log("Outer -", userName);
    two();
};
one();

if (true) {
    const username = "hitesh";
    if (username === "hitesh") {
        const website = "www.hitesh.com";
        //console.log(username + website);
    }
    //console.log(website); // Error
}

//console.log(username); // Error

//console.log(addone(3));

function addone(num){
    return num + 1;
};

// Interesting

// Case - 1
//console.log(addTwo(4));

const addTwo = function(num){
    return num + 1;
};

// Case - 2
const addThree = function(num){
    return num + 1;
};

//console.log(addThree(5));