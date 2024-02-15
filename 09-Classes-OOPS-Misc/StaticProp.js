/*
    The static keyword is used to define a method that is associated with the class itself, rather than instances of the class. Static methods can be called directly on the class without creating an instance of the class. In this example, createId() is a static method that can be called on both the User class and the Teacher class to generate an ID.
*/

class User {
    constructor(username){
        this.username = username;
    }

    logMe(){
        console.log(`Username: ${this.username}`);
    }

    static createId(){
        return `123`;
    }
}

const user = new User("Kartikey");

user.logMe();
console.log(User.createId());

class Teacher extends User {
    constructor(username, email){
        super(username);
        this.email = email;
    }
}

const teacher = new Teacher("Mukilan", "mukilan@phone.com");

teacher.logMe();
console.log(Teacher.createId());