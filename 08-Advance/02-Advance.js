// Callback Hell In JavaScript.

function asyncOperation1(callback) {
    // Simulating an asynchronous operation
    setTimeout(function() {
        console.log("Async operation 1 completed");
        callback();
    }, 1000);
}

function asyncOperation2(callback) {
    // Simulating another asynchronous operation
    setTimeout(function() {
        console.log("Async operation 2 completed");
        callback();
    }, 1000);
}

function asyncOperation3(callback) {
    // Simulating yet another asynchronous operation
    setTimeout(function() {
        console.log("Async operation 3 completed");
        callback();
    }, 1000);
}

// Nested callbacks
asyncOperation1(function() {
    asyncOperation2(function() {
        asyncOperation3(function() {
            console.log("All operations completed");
        });
    });
});

/*
    Each asynchronous operation returns a Promise object. This allows us to chain the promises together using .then(). This chaining makes the code more readable and avoids the deep nesting characteristic of callback hell. Additionally, you can handle errors using .catch() at the end of the chain.
*/

function asyncOperation1() {
    return new Promise(function(resolve, reject) {
        setTimeout(function() {
            console.log("Async operation 1 completed");
            resolve();
        }, 1000);
    });
}

function asyncOperation2() {
    return new Promise(function(resolve, reject) {
        setTimeout(function() {
            console.log("Async operation 2 completed");
            resolve();
        }, 1000);
    });
}

function asyncOperation3() {
    return new Promise(function(resolve, reject) {
        setTimeout(function() {
            console.log("Async operation 3 completed");
            resolve();
        }, 1000);
    });
}

// Using Promises to avoid callback hell
asyncOperation1()
    .then(asyncOperation2)
    .then(asyncOperation3)
    .then(function() {
        console.log("All operations completed");
    })
    .catch(function(error) {
        console.error("An error occurred:", error);
    });
