function multipleByFive(num){
    return num * 5;
}

multipleByFive.power = 2;

console.log(multipleByFive(5));
console.log(multipleByFive.power);
console.log(multipleByFive.prototype);

function createUser(username, email, password, profileScore) {
    this.username = username;
    this.email = email;
    this.password = password;
    this.profileScore = profileScore;
}

createUser.prototype.increment = function() {
    this.profileScore++;
}
createUser.prototype.printMe = function() {
    console.log(`User is : ${this.username}, Email is : ${this.email}, Password is : ${this.password}, Profile score is ${this.profileScore}`);
}

const sachin = new createUser("Sachin", "sachin@gmail.com", "Sachin@12345#", 90);
const virat = new createUser("Virat", "virat@gmail.com", "virat@12345#",  80);

virat.printMe();
sachin.increment();
sachin.printMe();

/*

Here's what happens behind the scenes when the new keyword is used -

A new object is created: The new keyword initiates the creation of a new JavaScript object.

A prototype is linked: The newly created object gets linked to the prototype property of the constructor function. This means that it has access to properties and methods defined on the constructor's prototype.

The constructor is called: The constructor function is called with the specified arguments and this is bound to the newly created object. If no explicit return value is specified from the constructor, JavaScript assumes this, the newly created object, to be the intended return value.

The new object is returned: After the constructor function has been called, if it doesn't return a non-primitive value (object, array, function, etc.), the newly created object is returned.

*/