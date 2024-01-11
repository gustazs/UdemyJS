'use strict';

const calcTip = function (bill) {
    return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
};

const calcAverage = function (arr) {
    console.log("______ MÉDIA ________")
    return sum / arr.length;
}

const bills = [50, 170, 80, 90, 100, 234, 123, 543, 124, 126];
const tips = [];
const totals = [];

for (let i = 0; i < bills.length; i++){
    tips.push(calcTip(bills[i]));
    totals.push(bills[i] + tips[i]);
    console.log(totals[i]);
    let sum = totals[i] + sum;
}

calcAverage(totals);