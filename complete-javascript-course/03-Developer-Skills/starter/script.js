// Remember, we're gonna use strict mode in all scripts now!
'use strict';
/*
const x = 23;
if (x === 23) console.log(23);

const calcAge = birthYear => 2037 - birthYear;

console.log();

// Live Server

Como falhar em codar
- Não ter um objetivo claro
- Copiar código sem saber como funciona
- Não reforçar o que aprende fazendo pequenos desafios ou anotações
- Não pratica fora do curso com projetos pessoais
- Não se conectar com pessoas que também aprendem programação

Corrigindo falhas:
1. Não ter um objetivo claro
- Definir um objetivo específico, mensurável, realista e baseado em algum prazo
- Saber exatamente o por que você está aprendendo programação
- Imagine um grande projeto que você é capaz de construir
- Pesquise tecnologias que você precisa e aprenda elas

2. Copiar código sem saber como funciona
- Entenda o código que você está estudando e digitando
- Sempre digite o código, não copie e cole!

3. Não reforçar o que aprende fazendo pequenos desafios ou anotações
- Depois que aprender um novo recurso ou conceito, use imediatamente
- Faça anotações
- Desafie a si mesmo praticando com pequenos desafios e exercícios de código.
- Não se apresse em terminar o curso rápido!

4. Não pratica fora do curso com projetos pessoais
- Praticar sozinho é a coisa mais importante a se fazer
- Não é um opção! Sem a prática fora do curso você não vai a lugar nenhum
- Faça suas próprias ideias de projeto, ou copie site ou aplicativos populares ou somente uma pequena parte dele
- Não fique preso em tutoriais

5. Não se conectar com pessoas que também aprendem programação
- Explique conceitos para outras pessoas
- 


Como pensar como um programador!

Como falhar em resolver problemas:
- Saltar para o problema sem pensar muito
- Implementa a solução de uma forma desestruturada
- Fica estressado quando as coisas não funcionam
- É muito orgulhoso de si para pesquisar soluções

Corrigindo falhas
- Fique calmo e desacelere, não salte para o problema sem um plano
- Faça um abordagem lógica e racional
- Use a estrutura de 4 etapas para resolver o problema

4-step framework:
1° Ter certeza que você entende 100% o problema e fazer perguntas certas para obter uma imagem mais clara do problema.

2° Dividir para conquistar, quebrar um grande problema em pequenos sub-problemas.

3° Não tenha medo de fazer muitas pesquisas (Google,Stack Overflow, MDN.)

4° Para grande probelmas, escreva um pseudo código com um pesudocódigo



// PROBLEM:
// We work for a company building a smart home thermometer. Our most recent task is this: "Given an array of temperatures of one day, calculate the temperature amplitude. Keep in mind that sometimes there might be a sensor error."

const temperatures = [3, -2, -6, -1, 'error', 9, 13, 17, 15, 14, 9, 5];

// 1) Understanding the problem
// O que é amplitude de temperatura? R: diferença entre a maior e menor temperatura
// Como calcular o max e min temperatura? R: 
// O que é um sensor de erro? e o que faz?

// 2) Quebrando o problema em subproblemas
// - Como ignorar errors?
// - Encontrar o valor max e min da temperatura em array
// - Subtrair max e min e retornar

const calcTempAmplitude = function(temps) {
    let max = temps[0];
    let min = temps[0];
    for (let i = 0; i < temps.length; i++) {
        const curTemp = temps[i];
        if (typeof curTemp !== 'number') continue;

        if (curTemp > max) max = curTemp;
        if (curTemp < min) min = curTemp;    
    }
    console.log(max, min);
    return max - min;
};
const amplitude = calcTempAmplitude(temperatures);
console.log(amplitude);

// PROBLEM 2: 
// Function should now receive 2 arrays of temperatures

// 1) Understanding the problem
// - Com 2 arrays , devemos implementar a função duas vezzes? R: não, basta juntar os dois arrays

// 2) Breaking up into subproblemas
// - Como juntar dois arrays?

const calcTempAmplitudeNew = function(t1, t2) {
    const temps = t1.concat(t2);
    console.log(temps);
    let max = temps[0];
    let min = temps[0];
    for (let i = 0; i < temps.length; i++) {
        const curTemp = temps[i];
        if (typeof curTemp !== 'number') continue;

        if (curTemp > max) max = curTemp;
        if (curTemp < min) min = curTemp;    
    }
    console.log(max, min);
    return max - min;
};
const amplitudenew = calcTempAmplitudeNew([3,5,1,6], [1,5,7,32]);
console.log(amplitudenew);
*/

const measureKelvin = function () {
    const measurement = {
        type: 'temp',
        unit: 'celsius',
        // C) FIX
        value: Number(prompt('Degrees celsius:'))
    };
    // B) FIND
    console.table(measurement);

    const kelvin = measurement.value + 273;
    return kelvin;
}
// A) IDENTIFY
console.log(measureKelvin());

