const prompt = require('prompt-sync')();
let total = 0;
for(let i = 0; i < 3; i++){
    total += Number(prompt('Digite sua ' + (i + 1) + 'º nota: '));
}
let media = 0;
media = total / 3;
if(media > 7) {
    console.log('Aprovado');
}else if(media <= 7 && media >= 3){
    console.log('Em exame');
}else if(media < 3){
    console.log('Reprovado');
}