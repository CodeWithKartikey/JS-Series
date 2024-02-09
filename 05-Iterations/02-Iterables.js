const number = [1, 2, 3, 4, 5];
for (const storeNumber of number) {
    console.log(storeNumber);
}

const greetings = "Hello world";
for (const storeGreetings of greetings) {
    console.log(`Each char of the greeting is - ${storeGreetings}`);
}

const map = new Map();

map.set('IN', "India");
map.set('USA', "United States of America");
map.set('Fr', "France");

console.log(map);

for (const [key, value] of map) {
    console.log(key, ':-', value);
}

// Interesting

const gameName = {
    game1: 'NFS',
    game2: 'Spiderman'
};

// You can not use object direct with for-of, first you will convert the object thing to array than you can use for-of.

for (const [key, value] of Object.entries(gameName)) {
    console.log(key, ':-', value); 
}

/*
//  Check this - Give you error.
for (const [key, value] of gameName) {
    console.log(key, ':-', value); 
}
*/

const programmingLanguageName = {
    js: 'Javascript',
    cpp: 'C++',
    rb: "Ruby",
    swift: "Swift"
};

for (const key in programmingLanguageName) {
    console.log(`${key} shortcut is for ${programmingLanguageName[key]}`);
}

const programming = [".js", ".rb", ".py", ".java", ".cpp"];

for (const key in programming) {
    console.log(programming[key]);
}
/*
const map = new Map();

map.set('IN', "India");
map.set('USA', "United States of America");
map.set('Fr', "France");

for (const key in map) {
    console.log(key);
}
*/

const coding = ["JS", "Ruby", "Java", "Python", "Cpp"];

coding.forEach(function(value){
    console.log("First -", value);
})

coding.forEach((item) => {
    console.log("Second -", item);
})

function printMe(item){
    console.log("Third -", item);
};

coding.forEach(printMe);

coding.forEach((item, index, array)=> {
    console.log("Fourth -", item, index, array);
})

const codingProperty = [
    {
        languageName: "javascript",
        languageFileName: "js"
    },
    {
        languageName: "java",
        languageFileName: "java"
    },
    {
        languageName: "python",
        languageFileName: "py"
    },
];

codingProperty.forEach((item) => {
    console.log(item.languageName);
})

const codingName = ["JS", "Ruby", "Java", "Python", "Cpp"];

const values = codingName.forEach((item) => {
    console.log(item);
    //return item; // Interesting
})
//console.log(values); // Interesting

const numValue = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const newNumber = numValue.filter((number) => { return number > 4 });
console.log(newNumber);

const newNums = []; // Check
const numArray = [1, 2, 3, 4, 5];

numArray.forEach((num) => {
    if (num > 4) {
        newNums.push(num); // Interesting
    }
})
console.log(newNums);

const books = [
    { title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004 },
    { title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008 },
    { title: 'Book Three', genre: 'History', publish: 1999, edition: 2007 },
    { title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010 },
    { title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014 },
    { title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010 },
    { title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996 },
    { title: 'Book Eight', genre: 'Science', publish: 2011, edition: 2016 },
    { title: 'Book Nine', genre: 'Non-Fiction', publish: 1981, edition: 1989 },
];

let userBooks = books.filter((book) => book.genre === "History");
console.log(userBooks);

let outputBook = books.filter((book) => { 
    return book.publish >= 1995 && book.genre === "History"
})
console.log(outputBook);

const numberArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const outputArray = numberArray.map((num) => { return num + 10 });
console.log(outputArray);

const outputValue = numberArray
                .map((num) => num * 10)
                .map((num) => num + 1)
                .filter((num) => num >= 40);
console.log(outputValue);

const usableNumber = [1, 2, 3, 4, 5];

const totalValue = usableNumber.reduce(function(final, value) {
    console.log(`Final-value: ${final} and current-value: ${value}`);
    return final + value;
}, 0);
console.log(totalValue);

const result = usableNumber.reduce((acc, val) => acc + val, 0);
console.log(result);

const shoppingCart = [
    {
        itemName: "JS Course",
        price: 2999
    },
    {
        itemName: "Python Course",
        price: 999
    },
    {
        itemName: "Mobile Development Course",
        price: 5999
    },
    {
        itemName: "Data Science Course",
        price: 12999
    },
];

const priceToPay = shoppingCart.reduce((acc, item) => acc + item.price, 0);
console.log(priceToPay);