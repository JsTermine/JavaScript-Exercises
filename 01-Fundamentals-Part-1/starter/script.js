// Fundamentals #1

/*
let js = 'amazing';
console.log(40 + 8 + 23 - 10);

console.log("Jonas");
console.log(23);

let firstName = "Jonas";
console.log(firstName);

console.log(typeof true);

const now = 2037;
const ageJonas = now - 1991;
const ageSarah = now - 2018;
console.log(ageJonas, ageSarah);
console.log(ageJonas*2, ageSarah/2, 2**3);

const firstName = 'Jonas ';
const lastName = 'levi';
console.log(firstName + lastName);

let x = 10 + 5;
x += 10; // x = x + 10
console.log(x);

const isFullAge = ageSarah >= 18;

console.log(now - 1991 > now - 2018);


const firstName = 'Jonas';
const job = 'teacher';
const birthYear = 1991;
const year = 2037;

const jonas = "i'm " + firstName + ", a " + (year - birthYear) + " year old" + job + "!";

console.log(jonas);

const jonasNew = `I'm ${firstName}, a ${year - birthYear} year old ${job}!`;
console.log(jonasNew);


const age = 18;

const isOldEnough = age >= 18;

if (age >= 18) {
  console.log("You're allowed to drive!");
} else {
  const yearsLeft = 18 - age;
  console.log(`You're not old enough to drive! Wait another ${yearsLeft} years.`);
}

console.log(isOldEnough);

const birthYear = 1991;
let century;

if (birthYear <= 2000) {
  century = 20;
} else if (birthYear > 2000) {
  century = 21;
}

console.log(`You were born in the ${century}th century!`);


// type conversion
const inputYear = '1991';
console.log(Number(inputYear), inputYear);
console.log(Number(inputYear) + 18);

console.log(Number("Jonas"));
console.log(typeof NaN);

console.log(String(23), 23);

// type coercion
console.log('I am ' + 23 + ' years old');
console.log('23' - '10' - 3);

let n = '1' + 1;
n = n - 1;
console.log(n); 


// Falsy Value: 0, '', undefined, null, NaN
console.log(Boolean(0));
console.log(Boolean(undefined));
console.log(Boolean('Jonas'));
console.log(Boolean({}));
console.log(Boolean(''));

const money = 100;

if (money) {
  console.log("Don't spend it all :)");
} else {
  console.log('You should get a job!');
}

let height;
if (height) {
  console.log('Height is defined');
} else {
  console.log('Height is undefined');
}


const age = '18';
if (age === 18) console.log('You just became an adult (strict)');

if (age == 18) console.log('You just became an adult (loose)');

const favourite = Number(prompt("What's your favorite Number?"));
console.log(favourite);
console.log(typeof favourite);

if (favourite === 23) { // '23' == 23
  console.log('Cool! 23 is a number');
} else if (favourite === 7) {
  console.log('7 is also a cool number');
} else {
  console.log('Number is not 23 or 7');
}

if (favourite !== 23)  {  
}


const hasDriversLicense = true; // A
const hasGoodVision = true; // B

console.log(hasDriversLicense && hasGoodVision);
console.log(hasDriversLicense || hasGoodVision);
console.log(!hasDriversLicense);

const shouldDrive = hasGoodVision && hasGoodVision;

if (shouldDrive) {
  console.log('Sarah is able to drive')
} else {
  console.log('Someone else should drive...')
}


const isTired = true;
console.log(hasDriversLicense && hasGoodVision && isTired);

if (hasDriversLicense && hasGoodVision && !isTired) {
  console.log('Sarah is able to drive')
} else {
  console.log('Someone else should drive...')
}


const day = 'monday';

switch (day) {
  case 'monday':
    console.log("Plan course structure");
    console.log("Go to coding meetup");
    break;
  case 'tuesday':
    console.log("Prepare theory videos");
    break;
  case 'wednesday':
  case 'thursday':
    console.log("Write code examples");
    break;
  case 'friday':
    console.log('Record videos');
    break;
  case 'saturday':
  case 'sunday':
    console.log('Enjoy the weekend');
    break;
  default:
    console.log('Not a valid day!');
}

if (day === 'monday') {
  console.log("Plan course structure");
  console.log("Go to coding meetup");
} else if (day === 'tuesday') {
  console.log("Prepare theory videos");
} else if (day === 'wednesday' || day === 'thursday') {
  console.log("Wirte code examples");
} else if (day === 'friday') {
  console.log('Record videos');
} else if (day === 'saturday' || day === 'sunday') {
  console.log('Enjoy the weekend');
} else {
  console.log('Not a valid day!');
}


//standard Ternary
const age = 23;
age >= 18 ? console.log("I like to drink wine") : console.log("I like to drink water");

// Ternary in a Variable
const drink = age >= 18 ? "wine" : "water";
console.log(drink);

// Comparison to Standard Conditional
let drink2;
if (age >= 18) {
  drink2 = 'wine';
} else {
  drink2 = 'water';
}
console.log(drink2);

console.log(`It is OK for me to drink ${drink2}. My age is ${age}`);
*/

