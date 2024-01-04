'use strict';
/*
let hasDriversLicense = false;
const passTest = true;

if (passTest) hasDriversLicense = true;
if (hasDriversLicense) console.log('I can drive :D');

// const interface = 'Audio';
// const private = 543;
const if = 23;




function logger() {
    console.log('My names is Jonas.');
}
// chamar / rodar / invocar a função
logger();
logger();
logger(); 

function fruitProcessor(apples, oranges) {
    console.log(apples, oranges);
    const juice = `Juice with ${apples} apples and ${oranges} oranges.`;
    return juice;    
}

console.log(fruitProcessor(3, 4));
const appleJuice = fruitProcessor(5,6);
console.log(appleJuice);

const appleOrangeJuice = fruitProcessor();
console.log(appleOrangeJuice);


// Function Declaration
function calcAge1(birthYear) {
    return 2037 - birthYear;
}
const age1 = calcAge1(1991);

// Function Expression
const calcAge2 = function (birthYear) {
    return 2037 - birthYear;
}

const age2 = calcAge2(1991);
console.log(age1, age2);


// Function Expression
const calcAge2 = function (birthYear) {
    return 2037 - birthYear;
}

// Arrow Function
const calcAge3 = birthYear => 2037 - birthYear; // one line, não precisa do return
const age3 = calcAge3(1991);
console.log(age3);

const yearUntilRetirement = (birthYear, firstName) => {
    const age = 2037 - birthYear;
    const retirement = 65 - age;
    return `${firstName} retires in ${retirement} year.`;
}
console.log(yearUntilRetirement(1991, 'Gustavo'));
console.log(yearUntilRetirement(1980, 'Bob'));


function cutFruitPieces(fruit) {
    return fruit * 4;
}

function fruitProcessor(apples, oranges) {
    const applePieces = cutFruitPieces(apples);
    const orangePieces = cutFruitPieces(oranges);

    console.log(apples, oranges);
    const juice = `Juice with ${applePieces} pieces of apples and ${orangePieces} pieces of orange.`;
    return juice;    
} 

console.log(fruitProcessor(2, 3));


const calcAge = function (birthYear) {
    return 2037 - birthYear;
}

const yearUntilRetirement = function(birthYear, firstName) {
    const age = calcAge(birthYear);
    const retirement = 65 - age;
    if (retirement > 0) {
        console.log(`${firstName} retires in ${retirement} year.`);
        return retirement;
    } else {
        console.log(`${firstName} has already retired.`);
        return -1;
    }
    
    // return `${firstName} retires in ${retirement} year.`;
}
yearUntilRetirement(1991, 'Jonas');


const friend1 = 'Michael';
const friend2 = 'Steven';
const friend3 = 'Peter';

const friends = ['Michael', 'Steven', 'Peter'];
console.log(friends);

//const years = new Array(1991, 1984, 2008, 2020);

console.log(friends[0]);
console.log(friends[2]);

console.log(friends.length);
console.log(friends[friend1.length - 1]) //seleciona sempre o último elemnto do array

friends[2] = 'Jay';
console.log(friends[2]);

const firstName = 'Jonas';
const jonas = [firstName, 'Silva', 2037 - 1991, 'teacher', friends];
console.log(jonas);
console.log(jonas.length);

// Exercise
const calcAge = function (birthYear) {
    return 2037 - birthYear;
}
const years = [1990, 1975, 2002, 2010, 2019];
const age1 = (calcAge(years[0]));
const age2 = (calcAge(years[1]));
const age3 = (calcAge(years[years.length - 1]));
console.log(age1, age2, age3);

const ages = [calcAge(years[0]), calcAge(years[1]), calcAge(years[years.length - 1])]
console.log(ages);


// Adiciona elementos
const friends = ['Michael', 'Steven', 'Peter'];
const newLength = friends.push('Jay', 'Gustavo'); // adiciona elementos ao final do array
console.log(friends);
console.log(newLength); // mostra o tamanho com o último elemento adicionado

friends.unshift('John'); // adiciona elmentos ao início do array
console.log(friends);

// Remove elementos
const popped = friends.pop(); // remove o último elemento do array
console.log(friends);
console.log(popped); // retorna o elemento que foi removido

friends.shift(); // remove o primeiro elemento e retorna o elemento removido quando atribuído a uma variável
console.log(friends);

console.log(friends.indexOf('Steven')) // retorna o índice ou -1 quando não é encontrado
console.log(friends.indexOf('Bob'));

friends.push(23)
console.log(friends.includes('Steven')); // retorna true or false
console.log(friends.includes('Bob'));
console.log(friends.includes(23));


const jonasArray = [
    'Jonas', // name
    'Schmedtmann', // last name
    2037 - 1991, // age
    'teacher', // job
    ['Michael', 'Peter', 'Steven'] // friends
];

const jonas = {
    firstname: 'Jonas',
    lastname: 'Schmedtmann',
    age: 2037 - 1991,
    job: 'teacher',
    friends: ['Michael', 'Peter', 'Steven']
};


const jonas = {
    firstname: 'Jonas',
    lastname: 'Schmedtmann',
    age: 2037 - 1991,
    job: 'teacher',
    friends: ['Michael', 'Peter', 'Steven']
};

console.log(jonas);

console.log(jonas.lastname); // with Dot Notation
console.log(jonas['lastname']); // Bracket Notation

const nameKey = 'name';
console.log(jonas['first' + nameKey]);
console.log(jonas['last' + nameKey]);

// console.log(jonas.'last' + nameKey); --> not work

const interestedIn = prompt('What do you want to know about Jonas? Choose between firstname, lastname, age, job, and friends');

if(jonas[interestedIn]) {
    console.log(jonas[interestedIn]);
} else {
    console.log('Wrong request! Choose between firstname, lastname, age, job, and friends')
}

jonas.location = 'Portugal';
jonas['twitter'] = '@jonasschmedtmann';
console.log(jonas);

console.log(`${jonas.firstname} has ${jonas.friends.length} friends, and his best friend is called ${jonas.friends[0]}.`); // dot working left to rightt
*/

const jonas = {
    firstName: 'Jonas',
    lastName: 'Schmedtmann',
    birthYear: 1991,
    job: 'teacher',
    friends: ['Michael', 'Peter', 'Steven'],
    hasDriversLicense: true,

    //calcAge: function(birthYear) {
    //    return 2037 - birthYear; 
    //}

    calcAge: function() {
        console.log(this);
        return 2037 - this.birthYear;
    }
};

console.log(jonas.calcAge());
//console.log(jonas['calcAge'](1991));