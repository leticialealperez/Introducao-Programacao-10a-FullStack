/*

Escreva um algoritmo que armazene três valores numéricos
diferentes e, em seguida, mostre no console a soma, a média, o
produto, o menor e o maior desses números. O algoritmo deve
validar e parar a execução ao mostrar um alerta com a mensagem
“Você repetiu algum número na digitação" se caso duas variáveis
estiverem armazenando o mesmo valor. Utilize o console.log() para
mostrar o resultado esperado.

*/
numeros();
function numeros(){

    let num1 = Number(prompt("Informe num1")); // 'nshdcbzshjc' null => 0 => !false => true
    let num2 = Number(prompt("Informe num2")); // todo if só valida VERDADEIRO

    if(!num1 && !num2){
        alert("Você precisa digitar números válidos!")
        return
    }
    
    if(num2 == num1){
        alert("Nao pode repetir numeros");
        return;
    }

    let num3 = Number(prompt("Informe num3"));

    if(!num3 && num3 == num2 || num3 == num1){
        alert("Nao pode repetir numeros");
        return;
    }

    const numeros = [num1, num2, num3];

    const max = Math.max(...numeros);
    const min = Math.min(...numeros);

    const soma = num1 + num2 + num3;
    const media = soma/3;
    const produto = num1 * num2 * num3;

    console.log('MAIOR', max);
    console.log('MENOR', min);
    console.log('SOMA', soma);
    console.log('MEDIA', media);
    console.log('PRODUTO', produto);
    
}

