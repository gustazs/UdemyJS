// 50 >= gorjeta e gorjeta <= 300 = 15%
// difeente disso, 20%

const value = 275;
const tip = value >= 50 || value <= 300 ? value * (15 / 100) : value * (20 / 100);

console.log(tip);