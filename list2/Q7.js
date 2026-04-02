const prompt = require('prompt-sync')();
let nums = [1,2,3,4,5,6,7,8,9,10];
let num = prompt('digite um número: ');
function big(array, numero){
    let maiores = [];
    for(let i = 0; i < array.length; i++){
        if(array[i] > numero){
            maiores.push(array[i]);
        }
    }
    return maiores;
}
console.log(big(nums, num));