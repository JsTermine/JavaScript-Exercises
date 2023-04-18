// Fundamentals #1 (Contains Assignment & Challenges)


//////////////--->Assignments<--//////////////////

//Assignment 1 START Values and Variables
let country = "Switzerland";
let continent = "EU";
let population = 8800000;

console.log(country);
console.log(continent);
console.log(population);
//Assignment 1 END


//Assignment START 2 Data types
let isIsland = true;
let language;

console.log(typeof isIsland);
console.log(typeof population);
console.log(typeof country);
console.log(typeof language);
//Assignment 2 END


//Assignment 3 Start let, const, var
language = "Swiss german";

const country = "Switzerland";
const continent = "EU";
//Assignment 3 END


//Assignment 4 START Basic Operators
console.log(population / 2);
console.log(++population);

let finlandPopulation = 6000000;
let averagePopulation = 33000000;


const isBigger = population > finlandPopulation;
const isAverage = population < averagePopulation;

console.log(isBigger, isAverage);

let description = 'Portugal is in Europe, and its 11 million people speak portuguese';
//Assignment 4 END


//Assignment 5 START Strings and Template Literals
let descriptionNew = `${country} is in ${continent}, and its ${population} people speak ${language}`;

console.log(descriptionNew);
//Assignment 5 END


//Assignment 6 START Taking Decisions: if / else statements
if (population >= 33000000) {
  console.log("Portugal's population is above average");
} else {
  console.log("Portugal's population is 22 million below average");
}
//Assignment 6 ENDE


//Assignment 7 START Type conversion and coercion
4
617
23
true > false;
117 > 1143
//Assignment 7 ENDE


//Assignment 8 START Equality Operators: == vs. ===
let numNeighbours = Number(prompt('How many neighbour country does your country have?'));

if (numNeighbours === 1) {
  console.log('Only 1 Border!');
} else if (numNeighbours > 1) {
  console.log('More than 1 Border!');
} else {
  console.log('No Borders');
}
// Assignment 8 ENDE


//////////////--->Challenges<--//////////////////

//Coding Challenge #1 START (Body Mass Index Calculator)
const massMark = 95;
const heightMark = 1.88;

const massJohn = 85;
const heightJohn = 1.76;

const BMI_MARK = massMark / heightMark ** 2;
const BMI_JOHN = massJohn / heightJohn ** 2;

const markHigherBMI = BMI_MARK > BMI_JOHN;

console.log(BMI_MARK);
console.log(BMI_JOHN);
console.log(markHigherBMI);
//Coding Challenge #1 END


//Coding Challenge #2 START (BMI Reference from Challenge #1)
if (BMI_MARK > BMI_JOHN) {
  console.log(`Mark's BMI (${BMI_MARK}) is lower than John's (${BMI_JOHN})`);
} else {
  console.log(`John's BMI (${BMI_JOHN}) is lower than Mark's (${BMI_MARK})`);
}
//Coding Challenge #2 ENDE


// Coding Challenge #3 START (Score Calculator - Comparisons)
const dolphinsScore = 96 + 108 + 89;
const koalasScore = 88 + 91 + 110;

const averageScoreDolphins = dolphinsScore / 3;
const averageScoreKoalas = koalasScore / 3;

const isMinimum = 100;

console.log(`Average Score for Dolphin ist ${averageScoreDolphins}.`)
console.log(`Average Score for Koalas ist ${averageScoreKoalas}.`)

if ((averageScoreDolphins === averageScoreKoalas) && (averageScoreDolphins >= isMinimum) && (averageScoreKoalas >= isMinimum)) {
  console.log(`Both win the trophy!`);
} else if (averageScoreDolphins > averageScoreKoalas && averageScoreDolphins > isMinimum) {
  console.log(`Dolphins won: ${averageScoreDolphins}`);
} else if (averageScoreDolphins < averageScoreKoalas && averageScoreKoalas > isMinimum) {
  console.log(`Koalas won: ${averageScoreKoalas}`);
} else if ((averageScoreDolphins === averageScoreKoalas) && (averageScoreDolphins >= isMinimum) && (averageScoreKoalas >= isMinimum)) {
  console.log("It's a draw!");
} else {
  console.log("No one wins the trophy");
}
// Coding Challenge #3 ENDE


// Coding Challenge #4 START (Tip Calculator)
//Test Data 1
const bill1 = 275;
const tip1 = bill1 >= 50 && bill1 <= 300 ? bill1 * 0.15 : bill1 * 0.2;
console.log(`The bill was ${bill1}, the tip was ${tip1} and the total is ${bill1 + tip1}`);

//Test Data 2
const bill2 = 40;
const tip2 = bill2 >= 50 && bill2 <= 300 ? bill2 * 0.15 : bill2 * 0.2;
console.log(`The bill was ${bill2}, the tip was ${tip2} and the total is ${bill2 + tip2}`);

//Test Data 3
const bill3 = 430;
const tip3 = bill3 >= 50 && bill3 <= 300 ? bill3 * 0.15 : bill3 * 0.2;
console.log(`The bill was ${bill3}, the tip was ${tip3} and the total is ${bill3 + tip3}`);
// Coding Challenge #4 ENDE



