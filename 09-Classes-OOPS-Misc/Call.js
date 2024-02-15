function setUsername(username){
    //complex DB calls
    this.username = username;
    console.log("Called - setUsername() function.");
}

function createUser(username, email, password){
    setUsername.call(this, username);
   
    this.email = email;
    this.password = password;
}

const kartikey = new createUser("Kartikey", "kartikey@facebook.com", "Kartikey@#12345")
console.log(kartikey);