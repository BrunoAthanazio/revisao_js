const prompt = require('prompt-sync')();


function contarNumero(nums, num){
    let qtd = 0;
    for(let i = 0; i < nums.length; i++){
        if(nums[i] == num){
            qtd++;
        }
    }
    return qtd;
}
let numExemplo = prompt('digite um número: ');
let numsExemplo = [1,2,2,3,3,3,4,4,4,4,5,5,5,5,5,6,6,6,6,6,6,7,7,7,7,7,7,7,8,8,8,8,8,8,8,8,9,9,9,9,9,9,9,9,9];
console.log(contarNumero(numsExemplo, numExemplo));