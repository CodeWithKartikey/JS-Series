class User {
    constructor(email, password){
        this.email = email;
        this.password = password;
    }

    get email(){
        return this._email.toUpperCase();
    }
    set email(value){
        this._email = value;
    }

    get password(){
        return `${this._password}$%`;
    }
    set password(value){
        this._password = value;
    }
}

const kartikey = new User("contact@kartikey.ai", "Kartikey@#12345");
console.log(kartikey.email);
console.log(kartikey.password);

kartikey.email = "support@kartikey.ai";
kartikey.password = "Kartikey12345";

console.log(kartikey.email);
console.log(kartikey.password);

class RawUser {
    constructor(email, password){
        this._email = email;
        this._password = password;
    }

    get email(){
        return this._email.toUpperCase(); // Modify the data upon retrieval
    }
    set email(value){
        this._email = value; // Store modified data in private variable
    }

    get password(){
        return `${this._password}$%`; // Modify the data upon retrieval
    }
    set password(value){
        this._password = value; // Store modified data in private variable
    }
}

const gaurav = new RawUser("contact@gaurav.ai", "Gaurav@#12345");

// Access the raw input values without modification
console.log(gaurav._email);
console.log(gaurav._password);

// Access the values with modification
console.log(gaurav.email);
console.log(gaurav.password);

// Without using Getter & Setter, We can update the value but there is no data validation and encapsulation, which can be useful for maintaining data integrity and security.

class NewUser {
    constructor(email, password){
        this.email = email;
        this.password = password;
    }

    getEmail(){
        return this.email.toUpperCase();
    }
    setEmail(value){
        this.email = value;
    }
    getPassword(){
        return this.password; // Return password as is, without adding '$%' again
    }
    setPassword(value){
        this.password = value + '$%'; // Add '$%' once when setting the password
    }
}

const mukilan = new NewUser("contact@mukilan.ai", "Mukilan@#12345");
console.log(mukilan.getEmail());
console.log(mukilan.getPassword());

mukilan.setPassword("Mukilan@#123456789");
console.log(mukilan.getPassword());


