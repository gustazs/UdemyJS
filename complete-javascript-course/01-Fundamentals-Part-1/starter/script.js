/*
let js = `amazing`;
if (js === `amazing`) window.alert(`JavaScript is FUN!`);
console.log(40 + 8 + 23 - 10);

console.log(`Jonas`);
console.log(23);

let firstName = `Matilda`;
console.log(firstName);
console.log(firstName);
console.log(firstName);

// Nomes de variáveis
let jonas$and$matilda = `JM`;
let $function = 27;

let person = `Jonas`;
let PI = 3.1415;

let myFirstJob = `Coder`;
let myCurrentJob = `Teacher`;

let job1 = `Programmer`;
let job2 = `Teacher`;

console.log(myFirstJob);


true;
let javascriptIsFun = true;
console.log(true);

// typeof mostra qual tipo de dados o valor pertence
// console.log(typeof true);
console.log(typeof javascriptIsFun);
// console.log(typeof 23);
// console.log(typeof `Jonas`); // uma string sempre precisa estar entre aspas

javascriptIsFun = 'YES!';
console.log(typeof javascriptIsFun);

let year;
console.log(year);
console.log(typeof year);

year = 1991;
console.log(typeof year);

console.log(typeof null);


let age = 30;
age = 31;

const birthYear = 1991;
birthYear = 1990;


// Operadores Matemáticos
const now = 2037;
const ageJonas = now - 1991;
const ageSarah = now - 2020;
console.log(ageJonas, ageSarah);

console.log(ageJonas * 2, ageJonas / 10, 2 ** 3);

const firstName = 'Jonas';
const lastName = 'Schmedtmann';
console.log(firstName + ' ' + lastName);

// Operadores de Atribuição
let x = 10 + 5; // 15
x += 10; // 25
x *= 4; // 100
x++; // x = x + 1
x--; // x = x - 1
x--;
console.log(x);

// Operadores de comparação
console.log(ageJonas > ageSarah); // true or false?
console.log(ageSarah >= 18);

const isFullAge = ageSarah >= 18;

console.log(now - 1991 > now - 2020);


const now = 2037;
const ageJonas = now - 1991;
const ageSarah = now - 2018;

console.log(now - 1991 > now - 2018);

console.log(25 - 10 - 5);

let x, y;
x = y = 25 - 10 - 5;
console.log(x, y);

const averageAge = (ageJonas + ageSarah) / 2;
console.log(ageJonas, ageSarah, averageAge);


const firstName = `Jonas`;
const job = `teacher`;
const birthYear = 1991;
const year = 2037;

const jonas = "I'm " + firstName + ", a " + (year - birthYear) + " years old " + job + "!"; // forma mais complicada
console.log(jonas);

const jonasNew = `I'm ${firstName}, a ${year - birthYear} years old ${job}!`; //  template literals
console.log(jonasNew);

console.log(`Just a regular string...`);
console.log(`Multilines
strings
work`);


const age = 13;
const isOldEnough = age >= 18;

if (age >= 18) {
    console.log(`Sarah can start driving license.`);
} else {
    const yearsLeft = 18 - age;
    console.log(`Sarah is too young. Wait another ${yearsLeft} years ;)`);
}

const birthYear = 1991;
let century;
if (birthYear <= 2000) {
    century = 20;
} else {
    century = 21;
}
console.log(century);


// type conversion
const inputYear = "1991";
console.log(Number(inputYear), inputYear);
console.log(Number(inputYear) + 18);

console.log(Number("Jonas"));
console.log(typeof NaN);

console.log(String(23), 23);

// type coercion
console.log("I am " + 23 + " years old.");
console.log("23" - "10" - 3);
console.log('23' / '2');

let n = '1' + 1; // '11'
n = n - 1; // '11' - 1 = 10
console.log(n);


// 5 falsy values: 0, '', undefined, null, NaN

console.log(Boolean(0));
console.log(Boolean(undefined));
console.log(Boolean("Jonas"));
console.log(Boolean({}));
console.log(Boolean(""));

const money = 0;
if (money) { // o valor não é boolean, porém automaticante o JS converte e torna-se false
    console.log("Don't spend it all ;)");
} else {
    console.log("You should get a job!");
}

let height;
if (height) {
    console.log('YAY! Height is defined!');
} else {
    console.log('Height is UNDEFINED');
}


const age = '18';
if (age === 18) console.log("You just became an adult :D (strict)");

if (age == 18) console.log("You just became an adult :D (loose)");

const favorite = Number(prompt('What is your favorite number?'));
console.log(favorite);
console.log(typeof favorite);

if (favorite === 23) {
    console.log('Cool! 23 is an amazing number!');
} else if (favorite === 7) {
    console.log('7 is also a cool number');
} else {
    console.log('Number is not 23 or 7 :(');
}


const hasDriverLicense = true; // A
const hasGoodVision = true; // B

console.log(hasDriverLicense && hasGoodVision);
console.log(hasDriverLicense || hasGoodVision);
console.log(!hasDriverLicense);

// if (hasDriverLicense && hasGoodVision) {
//     console.log("Sarah is able to drive!");
// } else {
//     console.log("Someone else should drive..");
// }

const isTired = false; // C
console.log(hasDriverLicense && hasGoodVision && isTired);

if (hasDriverLicense && hasGoodVision && !isTired) {
    console.log("Sarah is able to drive!");
} else {
    console.log("Someone else should drive..");
}


const day = '';

switch (day) {
    case 'monday': // day === 'monday'
        console.log('Plan course structure');
        console.log('Go to coding meetup');
        break;
    case 'tuesday':
        console.log('Prepare theory videos');
        break;
    case 'wednesday':
    case 'thursday':
        console.log('Write code examples');
        break;
    case 'friday':
        console.log('Record videos');
        break;
    case 'saturday':
    case 'sunday':
        console.log('Enjoy the weekend :D');
        break;
    default:
        console.log('Not a valid day!');
}

if (day === 'monday') {
    console.log('Plan course structure');
    console.log('Go to coding meetup');
} else if (day === 'tuesday') {
    console.log('Prepare theory videos');
} else if (day === 'wednesday' || day === 'thursday') {
    console.log('Write code examples');
} else if (day === 'friday') {
    console.log('Record videos');
} else if (day === 'saturday' || day === 'sunday') {
    console.log('Enjoy the weekend :D');
} else {
    console.log('Not a valid day!');
}


3 + 4 // uma expressão que produz valor
1991 // expressão
true && false && !false // expressão

if (23 > 10) {
    const str = '23 is bigger';
}

const me = 'Jonas'
console.log(`I'm ${2007 - 1991} years old ${me}`) // JS em template literal espera sempre uma expressão não uma declaração 


const age = 15;
// Ternary Operator (three parts)
age >= 18 ? console.log('I like to drink wine.') : console.log('I like to drink water.'); // operador ternário é uma expressão 

const drink = age >= 18 ? 'wine' : 'water';
console.log(drink);

let drink2
if (age >= 18) {
    drink2 = 'wine';
} else {
    drink2 = 'water';
}
*/