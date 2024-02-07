const userDetails = {
    name: "Kartikey",
    age: 28,
    welcomeMessage: function() {
        console.log(`${this.name} , Welcome to website.`);
        console.log(this);
    }
};

userDetails.welcomeMessage();

// After Changing the name.
userDetails.name = "Narayan";
userDetails.welcomeMessage();

console.log(this);

// One way
function callFirstUserName(){     
    let userName = "Hitesh";     
    console.log("First -", userName);
};

callFirstUserName();

// Another way
const callUserName = function () {
    let userName = "Hitesh"
    console.log("Second -", userName);
};

callUserName();

// Arrow Function
const callSecondUserName =  () => {
    let userName = "Hitesh";
    console.log("Third -", userName);
};

callSecondUserName();

const addTwoNumber = (num1, num2) => {
    return num1 + num2;
};

console.log(addTwoNumber(3, 4));

//const addTwo = (num1, num2) =>  num1 + num2;
//const addTwo = (num1, num2) => ( num1 + num2 );

const addNumbers = (num1, num2) => ({ username: "Hitesh" });

console.log(addNumbers(3, 4));