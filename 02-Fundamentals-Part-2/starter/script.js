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

// Introduction Arrays
const friend1 = "Michael";
const friend2 = "Steven";
const friend3 = "Peter";

const friendsArr1 = ["Michael","Steven","Peter"];
console.log(friendsArr1);
console.log(friendsArr1[2]);
console.log(friendsArr1.length);
console.log(friendsArr1[friendsArr1.length - 1]);

// Alternative way of an Array
const yrs = new Array(1991, 1984, 2008, 2020);

friendsArr1[2] = "Jay"; // Peter replaced by Jay
console.log(friendsArr1[2]); 

const firstname = "John";
const john = [firstname,"White", 2023 - 1991, "Carpenter", friendsArr1]
console.log(john); 
console.log(john.length); 

// Exercise
function calcAge1(birthYear){
    return 2023 - birthYear;
}

const years = [1990, 1967, 2002, 2010, 2018];

const ages1 = calcAge1(years[0]);
const ages2 = calcAge1(years[1]);
const ages3 = calcAge1(years[years.length - 1]);
console.log(ages1, ages2, ages3); 

const ages = [calcAge1(years[0]), calcAge1(years[1]), calcAge1(years[years.length - 1])];
console.log(ages);

// Basic Array Operations (Methods)
// Add Elements
const friendsArr2 = ["Michael","Steven","Peter"];
const newLength = friendsArr2.push("Jay"); // Adds "Jay" at the end of the Array
console.log(friendsArr2);
console.log(newLength);

friendsArr2.unshift("John"); // Adds "John" to the beginning of the Array
console.log(friendsArr2);

// Remove Elements
friendsArr2.pop(); // Removes Last Element -> "Jay" is removed
const popped = friendsArr2.pop(); // "Peter" is stored in "popped"
console.log(popped);
console.log(friendsArr2);

friendsArr2.shift(); // Removes first Element
console.log(friendsArr2);

console.log(friendsArr2.indexOf("Steven")); // Returns index of Stevens' position
console.log(friendsArr2.indexOf("Bob")); // Returns -1 since Bob doesn't exist

console.log(friendsArr2.includes("Steven")); // Returns Boolean (using strict comparison ===)
console.log(friendsArr2.includes("Bob")); // Returns false since Bob doesn't exist

// Using it as a Parameter
if (friendsArr2.includes("Steven")) {
    console.log("You have a friend called Steven");
}
