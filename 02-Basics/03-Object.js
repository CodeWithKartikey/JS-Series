// Object

// Singleton
// Object.create

// Object literals -

const userSymbol = Symbol("key1");

const userName = {
    name: "Hitesh",
    "Full Name": "Hitesh Choudhary",
    [userSymbol]: "mykey1",
    age: 18,
    location: "Jaipur",
    email: "hitesh@google.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Wednesday", "Friday"]
};

//console.log(userName.email);
//console.log(userName["email"]);
//console.log(userName["Full Name"]);
//console.log(userName[userSymbol]);

userName.email = "hitesh@chatgpt.com";
//Object.freeze(userName); // Interesting
userName.email = "hitesh@xyz.com"; // This is not adding because of freeze() which is called for object.
console.log(userName);

userName.greetingOne = function() {
    console.log("Hello JS User");
};

userName.greetingTwo = function() {
    console.log(`Hello JS User, ${this.name}`);
};

console.log(userName.greetingOne());
console.log(userName.greetingTwo());