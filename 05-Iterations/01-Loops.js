// For-loop

for (let i = 0; i <= 10; i++) {
    const element = i;
    if (element == 5) {
        //console.log("Inner - 5 is the best number between 1 to 10.");
        //break;
        //continue;
    }
    //console.log(element);
}
//console.log(element); // Error

for (let i = 1; i <= 10; i++) {
    //console.log(`Outer loop value: ${i}`);
    for (let j = 1; j <= 10; j++) {
        //console.log(`Inner loop value for - ${j} and inner loop value - ${i}`);
        //onsole.log(i + '*' + j + ' = ' + i*j );
    }
}

// Interesting 

let superHeros = ["Flash", "Batman", "Superman"];
//console.log(superHeros.length);

for (let index = 0; index < superHeros.length; index++) {
    const element = superHeros[index]; // Interesting
    //console.log(element); 
}

// break and continue in for loop.

for (let index = 1; index <= 20; index++) {
    if (index == 5) {
        //console.log("5 is detected by the coder.");
        break;
    }
    //console.log(`Value of i is ${index}`);   
}

for (let index = 1; index <= 20; index++) {
    if (index == 10) {
        //console.log("10 is detected by the coder.");
        continue;
    }
    //console.log(`Value of i is ${index}`);  
}

// While-loop

let index = 0;
while (index <= 10) {
    //console.log(`Value of index is ${index}`);
    index = index + 2;
}


//Interesting Case -

const indexValue = 0;
while (indexValue <= 10) {
    //console.log(`Value of index is ${indexValue}`);
    indexValue = indexValue + 2;
}

let heros = ['Flash', "Batman", "Superman"];

let array = 0;
while (array < heros.length) {
    //console.log(`Value is ${heros[array]}`);
    array = array + 1;
}

// Do-While-loop

let firstScore = 10;
do {
    //console.log(`Score is ${firstScore}`);
    firstScore++;
} while (firstScore <= 10);

let secondScore = 9;
do {
    //console.log(`Score is ${secondScore}`);
    secondScore++;
} while (secondScore <= 10);