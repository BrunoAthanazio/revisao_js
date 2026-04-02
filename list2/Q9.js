const prompt = require('prompt-sync')();
function contadorVogais(palavra){
    let qtd = 0;
    palavra.toLowerCase();
    const vogais = "aeiou";
    for(let i = 0; i < palavra.length; i++){
        if(vogais.includes(palavra[i])){
            qtd++;
        }
    }
    return qtd;
}
let str = prompt('digite uma palavra ou frase: ');
console.log(contadorVogais(str));