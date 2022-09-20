// let, const

// input - todo input será do tipo string
// let nome = window.prompt('Digite seu nome: ');
// let sair = window.confirm() // true ou false


// output 
// 1 - window.alert()
// window.alert('Este é um alerta');

// 2 - console.log()
// const teste = 5
// console.log(teste)

// 3 - document.write()

/*

Crie uma variável JavaScript e coloque nela o valor de sua idade.
Mostre no html usando o document.write() o dado contido na
variável junto da frase "Minha idade é x anos", sendo "x" o valor
armazenado na sua variável. Imprima abaixo da frase o tipo de
dado armazenado na variável.

*/

const idade = window.prompt('Digite sua idade: ')

// null, undefined, 0, "" === false

if(!idade){
    document.write('Tá de sacanagem')
}else {
    // document.write('Minha idade é '+ idade +' anos.') // formas de concatenar dados fixos com dados de variaveis "," "+" ou template string
    document.write(`Minha idade é ${idade} anos.`) // isso é template string
    document.write(`O tipo de dado é ${typeof idade}`)
}



/* if('3' !== 3){ 
    // == valida somente o valor e não o tipo
    // === igual em tipo e valor
    console.log('entrou no if')
}else{
    console.log('entrou no else')
}
 */
