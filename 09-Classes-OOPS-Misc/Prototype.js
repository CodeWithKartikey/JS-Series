let myName = "Kartikey     ";

console.log(myName.length);

let superHeros = ["thor", "spiderman"];

let heroPower = {
    thor: "hammer",
    spiderman: "sling",

    getSpiderPower: function(){
        console.log(`Spidy power is ${this.spiderman}`);
    }
}

Object.prototype.sayKartikey = function(){
    console.log(`Kartikey is present in all objects`);
}

Array.prototype.heyKartikey = function(){
    console.log(`Kartikey says hello`);
}

superHeros.sayKartikey();
heroPower.sayKartikey();

superHeros.heyKartikey();
//heroPower.heyKartikey();

// Inheritance

const User = {
    name: "Kartikey",
    email: "kartikey@google.com"
}

const Teacher = {
    makeVideo: true
}

const TeachingSupport = {
    isAvailable: false
}

const TASupport = {
    makeAssignment: 'JS Assignment',
    fullTime: true,
    __proto__: TeachingSupport // TASupport inherit the property from TeachingSupport.
}

// Legacy Way - Teacher inherit the property from User.
Teacher.__proto__ = User;

// Modern Syntax - TeachingSupport inherit the property from Teacher.
Object.setPrototypeOf(TeachingSupport, Teacher);

console.log(Teacher.name); // Output: Kartikey
console.log(Teacher.email); // Output: kartikey@google.com
console.log(Teacher.makeVideo); // Output: true

console.log(TeachingSupport.name); // Output: Kartikey
console.log(TeachingSupport.email); // Output: kartikey@google.com
console.log(TeachingSupport.makeVideo); // Output: true
console.log(TeachingSupport.isAvailable); // Output: false

console.log(TASupport.name); // Output: Kartikey
console.log(TASupport.email); // Output: kartikey@google.com
console.log(TASupport.makeVideo); // Output: true
console.log(TASupport.isAvailable); // Output: false
console.log(TASupport.makeAssignment); // Output: JS Assignment
console.log(TASupport.fullTime); // Output: true

let anotherUsername = "ChaiAurCode     ";

String.prototype.trueLength = function(){
    console.log(`${this}`);
    console.log(`True length is: ${this.trim().length}`);
}

anotherUsername.trueLength();

"hitesh".trueLength();
"iceTea".trueLength();