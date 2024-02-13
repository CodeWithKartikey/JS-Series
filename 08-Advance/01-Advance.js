const promiseOne = new Promise((resolve, reject) => {
    setTimeout(() => {
        console.log("Async Promise Resolved.");
        resolve();
    }, 2000);
})

promiseOne.then(() => console.log("Promise Consumed."));

const promiseTwo = new Promise((resolve, reject) => {
    setTimeout(() => {
        console.log("Async Promise Rejected.");
        reject();
    }, 1000);
})

promiseTwo.then(() => console.log("Promise Consumed.")).catch(() => console.log("Promise Did't Consumed"));

new Promise((resolve, reject) => {
    setTimeout(() => {
        let error = false;
        if(error !== true) {
            console.log("Promise Resolved.");
            resolve();
        } else {
            console.log("There Is An Error, So That Promise Is Rejected.");
            reject();
        }
    }, 3000);
})
.then(() => console.log("Promise Resolved By The Server End."))
.catch(() => console.log("Promise Reject By The Server End."));

new Promise((resolve, reject) => {
    setTimeout(() => {
        let error = false;
        if(error !== true) {
            console.log("Promise Resolved.");
            resolve({ username: "kartikey", email: "kartikeynarayan9598@gmail.com", password: "Kartikey123" });
        } else {
            console.log("There Is An Error, So That Promise Is Rejected.");
            reject();
        }
    }, 3000);
})
.then((userDetails) => {
    console.log("Promise Resolved By The Server End.");
    return userDetails.email;
})
.then((email) => console.log(email))
.catch(() => console.log("Promise Reject By The Server End."))
.finally(() => console.log("Either Promise Is Resolved Or Rejected By The Server End."));

new Promise((resolve, reject) => {
    setTimeout(() => {
        let error = false;
        if(error !== true) {
            console.log("Promise Resolved.");
            resolve({ username: "kartikey", email: "kartikeynarayan9598@gmail.com", password: "Kartikey123" });
        } else {
            console.log("There Is An Error, So That Promise Is Rejected.");
            reject();
        }
    }, 3000);
})
.then(({username, email, password}) => {
    console.log("Promise Resolved By The Server End.");
    return {username, email, password};
})
.then(({username, email, password}) => console.log(`Username: ${username}, Email: ${email} & Password: ${password}`))
.catch(() => console.log("Promise Reject By The Server End."))
.finally(() => console.log("Either Promise Is Resolved Or Rejected By The Server End."));

fetch("https://api.github.com/users/codewithkartikey")
.then((response) => {
    console.log("Result Is Postive.");
    return response.json();
})
.then((data) => {
    console.log("Here Github Api Response :", data);
})
.catch((error) => {
    console.log("Result Is Negative :" , error);
})
.finally(() => {
    console.log("Either User Will Get Positive Result Or Negative Result.");
})

async function fetchUserData() {
    try {
        const response = await fetch("https://api.github.com/users/codewithkartikey");
        console.log("Result Is Positive.");
        const data = await response.json();
        console.log("Here Github Api Response:", data);
    } catch (error) {
        console.log("Result Is Negative:", error);
    } finally {
        console.log("Either User Will Get Positive Result Or Negative Result.");
    }
}

fetchUserData();

Promise.all()

const promise1 = new Promise((resolve, reject) => {
    setTimeout(reject, 3000, 'Hey Kartikey, Your Promise Is Rejected.');
  });
const promise2 = 42;
const promise3 = new Promise((resolve, reject) => {
  setTimeout(resolve, 1000, 'Hey Kartikey, Your Promise Is Resolved.');
});

Promise.all([promise1, promise2, promise3])
.then((values) => {
  console.log("Here, Your Values Are :", values);
})
.catch((error) => {
    console.log("There Is An Error :", error);
});

const promise4 = new Promise((resolve, reject) => {
    setTimeout(resolve, 3000, 'Hey Kartikey, Your Promise - 1 Is Resolved.');
  });
const promise5 = 42;
const promise6 = new Promise((resolve, reject) => {
  setTimeout(resolve, 1000, 'Hey Kartikey, Your Promise - 3 Is Resolved.');
});

Promise.all([promise4, promise5, promise6])
.then((values) => {
  console.log("Here, Your Values Are :", values);
})
.catch((error) => {
    console.log("There Is An Error :", error);
});

const promise7 = new Promise((resolve, reject) => {
    setTimeout(reject, 3000, 'Hey Kartikey, Your Promise - 1 Is Rejected.');
  });
const promise8 = 42;
const promise9 = new Promise((resolve, reject) => {
  setTimeout(reject, 3000, 'Hey Kartikey, Your Promise - 3 Is Rejected.');
});

Promise.all([promise7, promise8, promise9])
.then((values) => {
  console.log("Here, Your Values Are :", values);
})
.catch((error) => {
    console.log("There Is An Error :", error);
});

