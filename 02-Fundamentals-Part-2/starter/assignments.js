// Fundamentals #2 (Contains Assignment & Challenges)

//////////////--->Assignments<--//////////////////

console.log("\n");

//Assignment 1 START Functions
function describeCountry(country, population, capitalCity) {
    console.log(`${country} has ${population} people and its capital city is ${capitalCity}`);
}

describeCountry("Finland", "6 million", "Helsinki");
describeCountry("Norway", "5.5 million", "Oslo");
describeCountry("Switzerland", "8.8 million", "Bern");
//Assignment 1 END


console.log("\n");


//Assignment 2 START Function Declaration vs. Expressions
const worldPopulation = 7900;  // represented as Millions

function percentageOfWorld1(population) {
    const calcPercentage = ((population / worldPopulation) * 100).toFixed(2); // Rounded to hundredths 
    
    return calcPercentage;
    //console.log(`${country} has ${population} million People, which represents ~${calcPercentage}% of the worlds Population.`);
}

percentageOfWorld1("China", 1441);
percentageOfWorld1("Switzerland", 8.8);
percentageOfWorld1("Finland", 6);


/* Function Expression*/
const percentageOfWorld2 = function percentageOfWorld(country, population) {
    const calcPercentage = ((population / worldPopulation) * 100).toFixed(2); // Rounded to hundredths 

    console.log(`${country} has ${population} million People, which represents ~${calcPercentage}% of the worlds Population.`);
}

percentageOfWorld2("China", 1441);
percentageOfWorld2("Switzerland", 8.8);
percentageOfWorld2("Finland", 6);
//Assignment 2 END

console.log("\n");

//Assignment 3 START Arrow Functions
const percentageOfWorld3 = (country, population) => {
    const calcPercentage = ((population / worldPopulation) * 100).toFixed(2); // Rounded to hundredths 

    console.log(`${country} has ${population} million People, which represents ~${calcPercentage}% of the worlds Population.`);
}

percentageOfWorld3("China", 1441);
percentageOfWorld3("Switzerland", 8.8);
percentageOfWorld3("Finland", 6);
//Assignment 3 END

console.log("\n");

//Assignment 4 Functions Calling Other Functions
function describePopulation(country, population)  {
    const test = percentageOfWorld1(population);

    console.log(`${country} has ${population} million people, which is about ${test}% of the world.`);
}

describePopulation("China", 1441);
describePopulation("Switzerland", 8.8);
describePopulation("Finland", 6);
//Assignment 4 END


//////////////--->Challenges<--//////////////////


//Coding Challenge #1 START (Check Winner Team) => Condition: Team Only wins if their average Score is equal or bigger than the opposing Teams' score
function checkWinner(avgDolphins, avgKoalas) {
    if (avgDolphins >= avgKoalas * 2) {
        console.log(`Dolphins win! (${avgDolphins} vs. ${avgKoalas})`);
    } else if (avgKoalas >= avgDolphins * 2) {
        console.log(`Koalas win! (${avgKoalas} vs. ${avgDolphins})`);
    } else {
        console.log("No one wins.");
    }
}

console.log("\n");

const calcAverage = (score1, score2, score3) => (score1 + score2 + score3) / calcAverage.length; 
    
// TEST DATA 1:
const scoreDolphins = calcAverage(44, 23, 71);
const scoreKoalas = calcAverage(65, 54, 49);

console.log("Dolphins Average Score: " + scoreDolphins, "\nKoalas Average Score: " + scoreKoalas);
checkWinner(scoreDolphins, scoreKoalas);

console.log("\n");

// TEST DATA 2:
const scoreDolphins2 = calcAverage(85, 54, 41);
const scoreKoalas2 = calcAverage(23, 34, 27);

console.log("Dolphins Average Score: " + scoreDolphins2, "\nKoalas Average Score: " + scoreKoalas2);
checkWinner(scoreDolphins2, scoreKoalas2);
//Coding Challenge #1 END



