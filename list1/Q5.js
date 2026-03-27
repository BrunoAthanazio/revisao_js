const prompt = require('prompt-sync')();
let ano = prompt('digite um ano: ')
if (ano % 4 == 0 || ano % 400 == 0){
    console.log('ano bissexto')
}else{
    console.log('ano não bissexto')
}