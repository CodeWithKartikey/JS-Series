// In ES6.

class User {
    constructor(username, email, password){
        this.username = username;
        this.email = email;
        this.password = password;
    }

    encryptPassword(){
        return `%^${this.password}&*`;
    }

    changeUsername(){
        return `${this.username.toUpperCase()}`;
    }

}

const user = new User("Kartikey", "kartikey@gmail.com", "Kartikey@12345#")

console.log(user.encryptPassword());
console.log(user.changeUsername());

// Behind the scene what happened.

function newUser(username, email, password){
    this.username = username;
    this.email = email;
    this.password = password;
}

newUser.prototype.encryptPassword = function(){
    return `%^${this.password}&*`;
}
newUser.prototype.changeUsername = function(){
    return `${this.username.toUpperCase()}`;
}

const newuser = new newUser("Mukilan", "mukilan@gmail.com", "Mukilan@12345#");

console.log(newuser.encryptPassword());
console.log(newuser.changeUsername());