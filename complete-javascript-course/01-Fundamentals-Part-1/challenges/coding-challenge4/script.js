// 50 >= gorjeta e gorjeta <= 300 = 15%
// diferente disso, 20%

const Billvalue = 315;
const tip = Billvalue >= 50 && Billvalue <= 300 ? Billvalue * (15 / 100) : Billvalue * (20 / 100);

console.log(`The bill was ${Billvalue}, the tip was ${tip}, and the total value ${Billvalue + tip}.`);

