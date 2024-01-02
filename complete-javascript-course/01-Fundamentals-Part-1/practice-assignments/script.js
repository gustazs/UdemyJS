const country = `Brasil`;
const continent = `América do Sul`;
const population = 200000000;

console.log(country);
console.log(continent);
console.log(population);

const isIsland = false;
let language;

console.log(typeof isIsland);
console.log(typeof population);
console.log(typeof country);
console.log(typeof language);

const halfPopulation = population / 2;
console.log(`Caso meu país fosse dividido no meio, poderiam viver ${halfPopulation} pessoas em cada metade.`);

const countrySum = population + 1;
console.log(`Meu país ao nascer mais pessoa teria ${countrySum} habitantes.`);

const compareCountry = population > 6000000;
console.log(`A Finlândia tem 6 milhões de habitantes, comparado ao meu país ele é menor correto? ${compareCountry}`);

const averageCountry = population > 33000000;
console.log(`Meu país é maior que a média de de 33 milhões por país, correto? ${averageCountry}`);

const description = `Brasil está na América do Sul, e 200 milhões de pessoas falam o português brasileiro.`;
console.log(description);