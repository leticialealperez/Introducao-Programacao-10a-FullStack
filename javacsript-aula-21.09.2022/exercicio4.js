/*

Escreva um algoritmo que armazene o ano atual e o ano de
nascimento de uma pessoa. Escrever uma mensagem no console
que diga se ela poderá ou não votar este ano (não é necessário
considerar o mês em que a pessoa nasceu).

*/

/* const timestamp = new Date()

let anoAtual = timestamp.getFullYear() */

let anoAtual = Number(prompt("Por favor, digite o ano atual: "))
let anoNascimento = Number(prompt("Por favor, digite o seu ano de nascimento: "))

if(anoAtual - anoNascimento < 0) {
  console.log("Por favor, digite valores adequados.")
} else if(anoAtual - anoNascimento >= 16) {
  console.log("Você já pode votar.")
} else {
  console.log("Você não pode votar.")
}


