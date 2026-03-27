const prompt = require('prompt-sync')();
let num = prompt('Digite um número');
if(num >= 1){
    console.log('número positivo');
}else if(num < 1 && num != 0){
    console.log('número negativo');
}else{
    console.log('número zero');
}