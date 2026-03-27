const prompt = require('prompt-sync')();
let c = Number(prompt('Digite uma temperatura em Celsius: '));
let f = (c * 1.8) + 32;
console.log('°F: ' + f);