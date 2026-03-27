const prompt = require('prompt-sync')();
let num = Number(prompt('Digite um número: '));
for(let i = num - 1; i > 0; i--){
    num *= i;
}
console.log('Fatorial:')
if(num == 0){
    console.log(1)
}else{
    console.log(num)
}