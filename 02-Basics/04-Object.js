// Object

// One way to define the Object.
const userDetails = new Object();

// Another way to define the project.
const newUserDetails = {};

userDetails.id = "Fb-123-ZYX";
userDetails.name = "Hitesh";
userDetails.isLoggedIn = false;

console.log(userDetails);

console.log(Object.keys(userDetails)); // Array Format
console.log(Object.values(userDetails)); // Array Format
console.log(Object.entries(userDetails)); // Array Format

console.log(userDetails.hasOwnProperty('isLoggedIn'));

const newUser = {
    email: "test@test.com",
    // Object inside the object.
    fullname: {
        username: {
            firstname: "Hitesh",
            lastname: "Choudhary"
        }
    }
};

//console.log(newUser.fullname.username.firstname);

const obj1 = {1: "a", 2: "b"};
const obj2 = {3: "a", 4: "b"};
const obj4 = {5: "a", 6: "b"};

const objRes = { obj1, obj2 };
//console.log(objRes);

const objRes1 = Object.assign({}, obj1, obj2, obj4); // Important
//console.log(objRes1);

const objRes2 = {...obj1, ...obj2}; // Important
//console.log(objRes2);

// Object inside the Array.
const users = [
    {
        id: 1,
        email: "h1@gmail.com"
    },
    {
        id: 2,
        email: "h2@gmail.com"
    },
    {
        id: 3,
        email: "h3@gmail.com"
    },
];

//console.log(users[2].email);

const courseDetails = {
    course: "JS-Series-In-Hindi",
    price: "Rs-999",
    instructorName: "Hitesh"
};

//console.log(courseDetails.instructorName);

const {instructorName: instructor} = courseDetails; // Interesting

//console.log(instructorName);
//console.log(instructor);

