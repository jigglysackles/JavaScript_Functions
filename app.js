console.log("Hello World!\n==========\n");

// Exercise 1 Section
console.log("EXERCISE 1:\n==========\n");

function printOdds(count) {

    if (count < 0) {
        console.log('Count was less than zero! Use a number above 0!');
        exit();
    }

    for (let i = 0; i < count; i++) {
        if (i % 2 === 0) {
        }
        else {
            console.log(i);
        }
    }

}

// Exercise 2 Section
console.log("EXERCISE 2:\n==========\n");

function checkAge(userName, age) {
    const belowSixteen = `Whoa there pardner! ${userName}, you aren't old enough to drive this wild stallion! gtfo.`;
    const aboveSixteen = `Congrats ${userName}! You are old enough to drive! note: Old enough TO drive...let's see if you CAN drive though...`;
    const noName = 'Need a name to proceed unless you are a horse that\'s been through the desert.';
    const noAge = 'I see that you are ageless. The driving approval for the time unconstrained is in bldg B.';

    if (age == null) {
        console.log(`${noAge}`);
        exit();
    }

    else if (userName == null) {
        console.log(`${noName}`);
        exit();
    }

    else if (age < 16) {
        console.log(`${belowSixteen}`);
    }

    else if (age > 16) {
        console.log(`${aboveSixteen}`);
    }

}

// Exercise 3 Section
console.log("EXERCISE 3:\n==========\n");

console.log('Man I hate math. Oh well, here goes something! Do it for the assignment! Are you really reading my nonsense anymore? Feels like no one is around.');

function quadrantDetector(x, y) {

    if (x == null || y == null) {
        console.log('Come on end user! I can\'t work with nulls! Enter a real number!');
    }

    switch (true) {
        case x > 0 && y > 0:
            return console.log(`${x},${y} is in Quadrant I`);
        case x < 0 && y > 0:
            return console.log(`${x},${y} is in Quadrant II`);
        case x < 0 && y < 0:
            return console.log(`${x},${y} is in Quadrant III`);
        case x > 0 && y < 0:
            return console.log(`${x},${y} is in Quadrant IV`);
        case x === 0 && y !== 0:
            return console.log(`${x},${y} is on the X axis`);
        case x !== 0 && y === 0:
            return console.log(`${x},${y} is on the Y axis`);
        default:
            return console.log(`${x},${y} is not in any quadrant.`);

    }

}

// Exercise 4 Section
console.log("EXERCISE 4:\n==========\n");

function triangleDetector(a, b, c) {

    if (a + b <= c || a + c <= b || b + c <= a) {
        return "Invalid triangle";
    }

    if (a === b && b === c) {
        return "Equilateral";
    }

    if (a === b || a === c || b === c) {
        return "Isosceles";
    }

    return "Scalene";
}


// Exercise 5 Section
console.log("EXERCISE 5:\n==========\n");

function sacredDataAllocationEvaluation(cycle, usage, planLimit) {
    const daysLeftInCurrentSol = 30 - cycle;
    const suggestedAverageCycleUsage = planLimit / 30;
    const actualAverageCycleUsage = usage / cycle;
    const dataRemainingThisSol = planLimit - usage;
    const remainingCycleUsage = dataRemainingThisSol / daysLeftInCurrentSol;
    const projectedUsage = actualAverageCycleUsage * 30;
    const projectedOverage = projectedUsage - planLimit;

    console.log(`${cycle} cycles of the current Sol have passed. ${daysLeftInCurrentSol} cycles remain in the Sol.`);
    console.log(
        `The Omnissiah-sanctioned average consumption rate is ` +
        `${actualAverageCycleUsage.toFixed(2)} GB per cycle.`);

    if (usage > planLimit) {
        console.log("WARNING, SERVITOR. The sacred data allocation has been exhausted.")
    }

    if (actualAverageCycleUsage > suggestedAverageCycleUsage) {
        console.log(
            `WARNING, SERVITOR. Your current consumption rate of ` +
            `${actualAverageCycleUsage.toFixed(2)} GB per cycle EXCEEDS ` +
            `the sanctioned average.`);
        console.log(
            `At this rate, projected data consumption shall exceed ` +
            `the sacred allocation by approximately ` +
            `${projectedOverage.toFixed(2)} GB.`);
        console.log(
            `Reduce your data consumption, servitor. ` +
            `To remain within the limits decreed by the Omnissiah, ` +
            `consume no more than ${remainingCycleUsage.toFixed(2)} GB per remaining cycle.`);
    } else if (actualAverageCycleUsage < suggestedAverageCycleUsage) {
        console.log(
            `AFFIRMATIVE, SERVITOR. Current consumption of ` +
            `${actualAverageCycleUsage.toFixed(2)} GB per cycle is BELOW ` +
            `the sanctioned average.`
        );

        console.log(
            `${dataRemainingThisSol.toFixed(2)} GB of sacred data remains available in the current Sol.`
        );

        console.log(
            `You may consume an average of ` +
            `${remainingCycleUsage.toFixed(2)} GB per remaining cycle ` +
            `without angering the Omnissiah.`
        );
    } else {
        console.log(
            `DATA CONSUMPTION NOMINAL, SERVITOR. ` +
            `Your usage precisely matches the sanctioned average.`
        );

        console.log(
            `${dataRemainingThisSol.toFixed(2)} GB of data remains within the sacred allocation, ` +
            `allowing ${remainingCycleUsage.toFixed(2)} GB per remaining cycle this Sol.`
        );
    }


}