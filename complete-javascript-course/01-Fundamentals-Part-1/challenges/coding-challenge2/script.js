const massMark = 95;
const heightMark = 1.88;
const massJohn = 85;
const heightJohn = 1.76;

const BMIJohn = massJohn / heightJohn * heightJohn;
const BMIMark = massMark / heightMark * heightMark;

if (BMIMark > BMIJohn) {
    console.log(`Mark's BMI (${BMIMark}) is higher than John's (${BMIJohn})!`);
} else {
    console.log(`John's BMI (${BMIJohn}) is higher than Mark's (${BMIMark})!`);
}
