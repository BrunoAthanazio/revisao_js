const prompt = require('prompt-sync')();
let num = prompt('Digite um número: ');
let result = ehPar(num);
if(result){
    console.log('É par')
}else{
    console.log('Não é par')
}

function ehPar (num){
    if(num % 2 == 0){
        return true;
    } else{
        return false;
    }
}