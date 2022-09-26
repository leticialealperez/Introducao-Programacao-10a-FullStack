/**

    09 - Faça um algoritmo que leia quanto dinheiro uma pessoa tem na carteira (em R$) 
    e mostre quantos dólares ela pode comprar. Considere US$1,00 = R$3,45.


    10 - Faça um algoritmo que leia a largura e altura de uma parede, calcule e 
    mostre a área a ser pintada e a quantidade de tinta necessária para o serviço, 
    sabendo que cada litro de tinta pinta uma área de 2metros quadrados.


    11 - Desenvolva uma lógica que leia os valores de A, B e C de uma equação do 
    segundo grau e mostre o valor de Delta.


    12 - Crie um programa que leia o preço de um produto, calcule e mostre o seu 
    PREÇO PROMOCIONAL, com 5% de desconto.


    13 -  Faça um algoritmo que leia o salário de um funcionário, calcule e mostre o 
    seu novo salário, com 15% de aumento.

    14 - A locadora de carros precisa da sua ajuda para cobrar seus serviços. Escreva 
    um programa que pergunte a quantidade de Km percorridos por um carro alugado e a 
    quantidade de dias pelos quais ele foi alugado. Calcule o preço total a pagar, 
    sabendo que o carro custa R$90 por dia e R$0,20 por Km rodado.


    15 - Crie um programa que leia o número de dias trabalhados em um mês e mostre o 
    salário de um funcionário, sabendo que ele trabalha 8 horas por dia e ganha R$25 
    por hora trabalhada.


    16 - Escreva um programa para calcular a redução do tempo de vida de um 
    fumante. Pergunte a quantidade de cigarros fumados por dias e quantos anos ele 
    já fumou. Considere que um fumante perde 10 min de vida a cada cigarro. Calcule 
    quantos dias de vida um fumante perderá e exiba o total em dias.

*/

// OUTPUT 
// =====================================================================================================
// 01 - Escreva um programa que mostre na tela a mensagem "Olá, Mundo!"

/* document.write('<p>Hello world</p>')
alert("Hello world")
console.log("Hello world") */

// document.write => manipula o html => lança no html um texto => criar tags 
// alert => fica visivel pro usuário => manipula a janela (window) => congela a execução de qualquer html 
// console.log => só dev vê, debugar => boa pratica é sempre remover



// INPUT 

/*

=====================================================================================================

02 - Faça um programa que leia o nome de uma pessoa e mostre uma mensagem de boas-vindas para ela:
        Ex:
            Qual é o seu nome? João da Silva
            Olá João da Silva, é um prazer te conhecer!

*/

// armazenamento de dados => declarar uma variável 
// let
// const declarar uma variável de escopo de bloco
/* if(true){
    let a = 10;
    const b = 10;

    console.log(a);
    console.log(b);
} */

// prompt => entrada de texto (string) ou cancel (null) => janela do navegador
// confirm => ok (true), cancel (false) => janela do navegador

/* const nome = prompt('Qual é o seu nome?');

if(nome){
    document.write(`Olá ${nome}, é um prazer te conhecer!`)
} */


// OPERAÇÕES - aritmeticos ( +, -, *, /, %, ** ), lógicos ( &&, ||, !), relacionais (>, <, >=, <=, == e !=), de atribuição ( =, )

// =  -> o que está a esquerda RECEBE o que está à direita
// += -> o que está a esquerda RECEBE o valor que já tinha SOMADO ao que estiver à esquerda
// -= -> o que está a esquerda RECEBE o valor que já tinha SUBTRAIDO ao que estiver à esquerda
// /= -> o que está a esquerda RECEBE o valor que já tinha DIVIDIDO ao que estiver à esquerda
// *= -> o que está a esquerda RECEBE o valor que já tinha MULTIPLICADO ao que estiver à esquerda
// %= -> o que está a esquerda RECEBE o valor que já tinha MODULO/RESTO ao que estiver à esquerda

// == em valor
// != em valor

// === em valor e tipo (estritamente igual)
// !== em valor e tipo (estritamente diferente)

/*
=====================================================================================================
 03 - Crie um programa que leia o nome e o salário de um funcionário, mostrando no final uma mensagem.
        Ex:
        Nome do Funcionário: Maria do Carmo
        Salário: 1850,45
        O funcionário Maria do Carmo tem um salário de R$1850,45 em Junho.

*/

/* const teste = 'Usuario 1'

const nome = prompt(`Informe seu nome ${teste}: `);
const salario = prompt('Informe salário:'); */

// falso => "", null, 0, undefined, false
// verdadeiro => "Com alguma coisa", qualquervalornumerico !== 0, true

// todo if só valida (só executa se TRUE)

/* if(nome && salario){
    document.write(`O funcionario ${nome} tem um salário de R$${salario}, em Junho.`)
} */


/* 

=====================================================================================================

04 -  Desenvolva um algoritmo que leia dois números inteiros e mostre o somatório entre eles.
        Ex:
        Digite um valor: 8
        Digite outro valor: 5
        A soma entre 8 e 5 é igual a 13.

*/

/* const n1 = Number(prompt("Digite um número"))
const n2 = Number(prompt("Digite outro número"))

document.write(`A soma dos números é: ${n1 + n2}`); */


/*

=====================================================================================================

05 - Faça um programa que leia as duas notas de um aluno em uma matéria e mostre na tela a sua média na disciplina.
        Ex: 
        Nota 1: 4.5
        Nota 2: 8.5
        A média entre 4.5 e 8.5 é igual a 6.5


*/

/* const nota1 = Number(prompt("Digite sua primeira nota: "))
const nota2 = Number(prompt("Digite sua segunda nota: "))

if (nota1 && nota2) {
  const media = (nota1 + nota2) / 2
  document.write(`A sua média é de: ${media}`)
} else {
  alert("Digite um valor válido !")
} */


/*
 
  06 - Faça um programa que leia um número inteiro e mostre o seu antecessor e seu sucessor.
        Ex: 
        Digite um número: 9
        O antecessor de 9 é 8
        O sucessor de 9 é 10

 */

/* 

let a = 10;
let b = 20;

for (let item of array){
    // valor nas posições
    // 'maria', 'joao', 'antonio'
}

for(let index in array){
    // indice [0] [1] [2]
} 

*/

/* let numeroEscolhido = Number(prompt("Digite um número: "))

document.write(`O antecessor de ${numeroEscolhido} é ${--numeroEscolhido} e o sucessor é ${numeroEscolhido+=2}`) */



/*

=====================================================================================================

07 - Crie um algoritmo que leia um número real e mostre na tela o seu dobro e a sua terça parte.
        Ex: 
        Digite um número: 3.5
        O dobro de 3.5 é 7.0
        A terça parte de 3.5 é 1.16666

*/

const numero = parseFloat(prompt('Digite um número qualquer: ').replace(',', '.'));

if(numero){
    document.write(`O dobro de ${numero} é ${(numero * 2).toFixed(2)} <br>`);
    document.write(`A terça parte de ${numero} é ${(numero / 3).toFixed(2)}`);
}















