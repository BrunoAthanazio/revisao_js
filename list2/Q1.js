const prompt = require('prompt-sync')();
let num1 = Number(prompt('Digite um número: '));
let num2 = Number(prompt('Digite um número: '));
let soma = adicionar(num1, num2);
console.log(soma);
function adicionar (num1, num2){
    let soma = num1 + num2;
    return soma;
}