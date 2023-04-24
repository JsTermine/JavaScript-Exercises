// Fundamentals #2 //
'use strict';
/*
let hasDriversLicense = false;
const passTest = true;

if (passTest) hasDriverLicense = true; // Bug - To show the effect of 'use strict' in Browser Console
if (hasDriversLicense) console.log("I can drive now");

const interface = 'Audio';  // interface - reserved word can't be used
const private = 543;        // private - reserved word can't be used
const if = 23;              // If - reserved word can't be used
*/

///// functions introduction /////
function logger() {
    console.log("My name is John");
}

logger(); // Calling / invoking / running function


// function with parameters
function fruitProcessor(apples, oranges) {
    const juice = `Juice with ${apples} apples and ${oranges} oranges.`;
    return juice;
}

fruitProcessor(5, 0); // Output 5 0

const appleJuice = fruitProcessor(5, 0); // Output Console "Juice with 5 apples and 0 oranges."
console.log(appleJuice);

const appleOrangeJuice = fruitProcessor(2, 4);
console.log(appleOrangeJuice);


// Function Declaration & Expressions

// function declaration
function calcAge1(birthYear){
    return 2023 - birthYear;
}

const age1 = calcAge1(1991);
console.log(age1);


// function Expression / Anonymous function
const calcAge2 = function (birthYear) {
    return 2023 - birthYear;
}

const age2 = calcAge2(1991);
console.log(age1, age2);


// Arrow funciton
const calcAge3 = birthYear => 2027 - birthYear;
const age3 = calcAge3(1991);
console.log(age3);


const yearsUntilRetirement = (birthYear, firstName) => {
    const age = 2023 - birthYear;
    const retirement = 65 - age;
    //return retirement;
    return `${firstName} retires in ${retirement} years.`;
}

console.log(yearsUntilRetirement(1991, "John"));
console.log(yearsUntilRetirement(1990, "Bob"));


// Function Calling other Functions
function cutFruitPieces (fruit) {
    return fruit * 3;
}

function fruitProcessor(apples, oranges) {
    const applePieces = cutFruitPieces(apples);
    const orangePieces = cutFruitPieces(oranges);
    
    const juice = `Juice with ${applePieces} pieces of apple ${orangePieces} pieces of orange.`;
    return juice;
}

console.log(fruitProcessor(2, 3));

const calcAge4 = function (birthYear) {
    return 2023 - birthYear;
}


// Reviewing Functions
const yearsUntilRetirement2 = function (birthYear, firstName) {
    const age = calcAge4(birthYear);
    const retirement = 65 - age;

    if(retirement > 0) {
        console.log(`${firstName} retires in ${retirement} years.`);
        return retirement;
    } else {
        console.log(`${firstName} has already retired`);
        return -1;
    }

}

console.log(yearsUntilRetirement2(1991, "John"));
console.log(yearsUntilRetirement2(1950, "Bob"));