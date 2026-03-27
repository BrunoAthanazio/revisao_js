const prompt = require('prompt-sync')();
let palavra = prompt('digite uma palavra: ');
let palindromo = palavra.split('');
palindromo.reverse();
palindromo = palindromo.join('');
if(palindromo == palavra){
    console.log('palíndromo');
} else{
    console.log('não é palíndromo');
}