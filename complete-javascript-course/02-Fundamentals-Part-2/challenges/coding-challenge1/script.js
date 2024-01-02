'use strict';

const scoreDolphins = [54, 86, 94];
const scoreKoalas = [150, 200, 200];

const calcAverage = score => score / 3;
const avgDolphins = calcAverage(scoreDolphins[0] + scoreDolphins[1] + scoreDolphins[2]);
const avgKoalas = calcAverage(scoreKoalas[0] + scoreKoalas[1] + scoreKoalas[2]);

function checkWinner (avgDolphins, avgKoalas) {
    if (avgDolphins >= 2 * avgKoalas) {
        console.log(`Dolphins win (${avgDolphins} Vs. ${avgKoalas})`);
    } else if (avgKoalas >= 2 * avgDolphins) {
        console.log(`Koalas win (${avgKoalas} Vs. ${avgDolphins})`);
    } else {
        console.log("No team wins...");
    }
}

checkWinner(avgDolphins, avgKoalas);
console.log(`Dolphins score ${scoreDolphins[0]}, ${scoreDolphins[1]} and ${scoreDolphins[2]}. Koalas score ${scoreKoalas[0]}, ${scoreKoalas[1]} and ${scoreKoalas[2]}`);