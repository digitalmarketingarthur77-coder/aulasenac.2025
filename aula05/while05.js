//faça um programa ler um valor e para mostrar contar a tabela de
// multiplicaçao deste valor de 1 ate 10
let contador = 1;
let numero = parseInt(prompt('digite o numero'))
while (contador<=10){
    document.write(numero + 'x' +contador+'='+ numero*contador+'<br>');
    contador++;
}