function sayMyName(){
    console.log("H");
    console.log("I");
    console.log("T");
    console.log("E");
    console.log("S");
    console.log("H");
};

sayMyName();

function addingTwoNumbers(number1, number2){
    console.log(`Adding of the two number is: ${number1 + number2}`);
};

addingTwoNumbers(3, 5); // Interesting

function addTwoNumbers(number1, number2){
    return number1 + number2;
};

const result = addTwoNumbers(3, 5);
//console.log("Result :", result);

function addTwoNumbers(number1, number2){
    let result = number1 + number2;
    return result;
}

//console.log("Result =", addTwoNumbers(3, 5));

// Default Value is Kartikey.
function loginUserMessage(username = "Kartikey"){
    if(!username){
        console.log("Please enter a username :");
        return;
    }
    return `${username} just logged in`;
}

//console.log(loginUserMessage());
//console.log(loginUserMessage(""));
//console.log(loginUserMessage("Hitesh"));

// This is the way where we can take unlimited values.
function calculateCartPrice(value1, value2, ...values){
    return values.reduce((acc, val) => acc + val, 0);
}

//console.log(calculateCartPrice(200, 300, 400, 500, 1000, 1500, 2000));

// This is the way, you can handle the object inside the function.
function userDetails(object){
    console.log(`Username is ${object.username} , email is ${object.email} and mobile no is ${object.mobile}`);
};

userDetails({
    username: "Hitesh",
    email: "hitesh@google.com",
    mobile: 9876543210
});

// This is the way, you can handle the array inside the function.
const studentMark = [80, 90, 75, 60];

function returnStudentMark(getMark){
    return getMark[1];
};

//console.log(returnStudentMark(studentMark));
//console.log(returnStudentMark([80, 90, 75, 60]));

function returnTotalStudentMark(totalMark){
    return totalMark.reduce((acc, val) => acc + val, 0); 
};

//console.log(returnTotalStudentMark(studentMark));
//console.log(returnTotalStudentMark([80, 90, 75, 60]));