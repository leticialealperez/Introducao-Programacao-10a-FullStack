/*

Crie três variáveis JavaScript, duas usando const, uma usando let. 
Na variável let coloque a soma das duas variáveis const. Apresente valor da variável let no documento html junto da frase "O resultado da soma de x e y é z", sendo x o valor armazenado na primeira const, y o valor armazenado segunda const e z o valor armazenado na variável criada usando let.

*/

const valor1 = Number(prompt("Digite o um número qualquer: ")) // null => 0
const valor2 = Number(prompt("Digite um outro número qualquer: ")) // null => 0

// undefined, null, 0, "" => false
// virgula somente para strings => textos

if(valor1 && valor2){
    let soma = valor1 + valor2
    
    // document.write
    document.write(`<h2>O resultado da soma de ${valor1} e ${valor2} é ${soma}</h2>`)
}else {
    alert("Digite os valores corretamente!")
}

// isNaN() => verifica se o valor contido em uma variavel é um NaN => retorna true se for NaN e false se não for um NaN


