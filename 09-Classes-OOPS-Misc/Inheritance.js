class User {
    constructor(username){
        this.username = username;
    }

    logMe(){
        console.log(`Username is ${this.username}`);
    }
}

class Teacher extends User{
    constructor(username, email, password){
        super(username)
        this.email = email;
        this.password = password;
    }

    addCourse(){
        console.log(`A new course is added by ${this.username}`);
    }

    userLoginDetails() {
        console.log(`User login deatils is - email : ${this.email}, password : ${this.password}`);
    }
}

const teacher = new Teacher("Alakh", "alakh@pw.in", "Alakh@12345#");
teacher.logMe();
teacher.addCourse();
teacher.userLoginDetails();

const user = new User("Ranjeet");
user.logMe()

// Checks whether the teacher object is an instance of the User class.
console.log(teacher instanceof User);

// Check if instances are of Object class (all objects in JavaScript are instances of Object).
console.log(teacher instanceof Object);