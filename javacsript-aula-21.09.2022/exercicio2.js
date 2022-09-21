/*

Crie um algoritmo que armazene um número inteiro positivo, e gere
um alerta com as seguintes mensagens:
a. “Número é par!”, se o valor armazenado for par;
b. “Número é impar!”, se o valor armazenado for ímpar;

*/
    /* let n1 = parseInt(prompt("Digite um número: "))
    if (n1 >= 0) {
        if(n1%2 == 0 ){
            alert("Número Par!")
        }else{
            alert("Número impar!")
        }
    }else{
        alert("Digite um número Positivo e inteiro")
    } */

let n1 = parseInt(prompt("Digite um número: "))

if(n1 > 0){
    n1%2 ? alert("É impar!") : alert("É par!")

    // 5%2
    // 1 impar => true
    // 0 par => false
}else {
    alert("Digite um numero inteiro positivo!")
}

