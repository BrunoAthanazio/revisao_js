const prompt = require('prompt-sync')();
let num1 = Number(prompt('Digite um número: '));
let num2 = Number(prompt('Digite um número: '));
let subtracao = subtrair(num1, num2);
console.log(subtracao);
function subtrair (num1, num2){
    let subtracao = num1 - num2;
    return subtracao;
}