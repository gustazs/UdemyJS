const massMark = 95;
const heightMark = 1.88;
const massJohn = 85;
const heightJohn = 1.76;

const BMIJohn = massJohn / heightJohn * heightJohn;
const BMIMark = massMark / heightMark * heightMark;
const markHigherBMI = BMIMark > BMIJohn;

console.log(BMIMark, BMIJohn, markHigherBMI);

