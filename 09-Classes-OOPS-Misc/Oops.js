// Object
const userDetails = {
    username: "Kartikey",
    loginCount: 8,
    signedIn: true,

    getUserDetails: function(){
        console.log(`Username : ${this.username}`);
        console.log(this);
    }
}

console.log(userDetails.username); 
// Interesting for undefined value because it return nothing.
console.log(userDetails.getUserDetails());
// Interesting log in the screen - {}
console.log(this);

// Function
function newUser(username, loginCount, isLoggedIn){
    this.username = username;
    this.loginCount = loginCount;
    this.isLoggedIn = isLoggedIn;

    this.greeting = function(){
        console.log(`Welcome ${this.username}`);
    };

    return this;
}

const userOne = new newUser("Kartikey", 12, true);
const userTwo = new newUser("Mukilan", 10, false);

console.log(userOne);
console.log(userOne.greeting());

console.log(userTwo);
console.log(userTwo.greeting());

/*
    This line logs the constructor property of the userOne object. The constructor property refers to the constructor function that was used to create the object. In this case, it refers to the newUser function.
*/

console.log(userOne.constructor);

console.log(userTwo.constructor);