const User = {
    _email: 'kartikey@google.com',
    _password: "Kartikey123",

    get email(){
        return this._email.toUpperCase();
    },

    set email(value){
        this._email = value;
    },

    get password(){
        return `@${this._password}#`;
    },

    set password(value){
        this._password = value;
    }
}

const user = Object.create(User);
console.log(user.email);
console.log(user.password);

User._email = "kartikeynarayan@google.com";
User._password = "Kartikey12345";
console.log(user.email);
console.log(user.password);