// FUNÇÕES - funções com parametro e com retorno
function somar(valor1, valor2) { // parametro 
    // onde vai ter o conjunto de instruções necessárias pra executar essa rotina
    return valor1 + valor2
}

function subtrair(valor1, valor2) { // parametro 
    // onde vai ter o conjunto de instruções necessárias pra executar essa rotina
    return valor1 - valor2
}

function multiplicar(valor1, valor2) { // parametro 
    // onde vai ter o conjunto de instruções necessárias pra executar essa rotina
    return valor1 * valor2
}

function dividir(valor1, valor2) { // parametro 
    // onde vai ter o conjunto de instruções necessárias pra executar essa rotina
    if(valor2 === 0){
      return 'Não é possível dividir por zero'
    }
    return valor1 / valor2
}

const numero1 = 10;
const numero2 = 20;

let num1 = 50;
let num2 = 40;
let num3 = 60;

const resultadoAd = somar(numero1, numero2) // argumento
const resultadoSub = subtrair(15, 20) // argumento
const resultadoMult = multiplicar(num1, num2) // argumento
const resultadoDiv = dividir(15, 0) // argumento
/* console.log("SOMA", resultadoAd)
console.log("SUBTRACAO", resultadoSub)
console.log("MULTIPLICAÇÃO", resultadoMult)
console.log("DIVISAO: ", resultadoDiv) */


// FUNÇÕES - funções sem parametro e sem retorno

/* function acessoAoSite(){
    alert("Bem-vindo ao site Fulano!")
}

acessoAoSite(); */



// FUNÇÕES - funções com parametro e sem retorno
function acessoAoSite(nomeParametro){
    alert(`Bem-vindo ao site ${nomeParametro}!`)
}

const nome = prompt('Digite seu nome');
acessoAoSite(nome);



// FUNÇÕES - funções sem parametro e com retorno
function modificaNome(){
    const nomeModificado = nome.concat('@gmail.com')

    return nomeModificado
}

const resultadoNome = modificaNome();
console.log(resultadoNome);


const num = prompt(`Digite um número`)
num = num ? Number(parseInt(num)) : 0

 function mostrarDobro(num){
    const numeroDobrado = num * 2;
    alert(`O dobro do número ${num} é ${numeroDobrado}`)
 }

 mostrarDobro(num)


 // EXERCICIO 4

 function calcularMedia (num1, num2, num3, nome){
    const mediaCalculada = (num1 + num2 + num3) / 3;
    alert(`${nome}, sua média é de ${mediaCalculada}`)
    console.log(`Nota 1: ${num1}. Nota 2: ${num2}. Nota 3: ${num3}`)
}

calcularMedia(8, 9, 5, "Matheus")
















