let notas01 = parseInt(prompt('digite a primeira nota'));
let notas02 = parseInt(prompt('digite a segunda nota'));
let media = (notas01 + notas02) / 2;
if (media>=6){
    document.write('a media maior ou igual a 6 esta aprovado')

}else{
    document.write('a media menor que 6 esta reprovado')
}

