// Immediately Invoked Function Expressions (IIFE)

(() => {})(); // Syntax of IIFE.

(function callDatabase(name){
    //console.log(`Database is called by ${name}`);
})("Kartikey");

((databaseName) => {
    //console.log(`Database has been connected & is using the ${databaseName} database.`);
})("MongoDB");
