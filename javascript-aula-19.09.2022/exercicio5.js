/*

Crie cinco variáveis usando const. Na primeira armazene o nome de um aluno. Na segunda, terceira e quarta coloque 3 notas (valores de 0 à 10). Calcule a média das notas e armazene na quinta variável let criada. Apresente no documento html a seguinte informação: 
"O aluno _____ ficou com média _,_"


*/

calculaMedia();

function calculaMedia(){
    const nomeAluno = prompt("Digite o nome do aluno: ")

    if(!nomeAluno){
        alert("Não digitou nome");
        return
    }

    let nota1 = prompt("Digite a nota 1: ") // null, undefined, "" e 0 => false
    nota1 = nota1 ? Number(nota1.replace(',', '.')) : 0; // 'desfsdsd' => NaN, '10' => 10, null => 0
    // operador ternário => teste lógico ? executa aqui se for verdadeiro : executa aqui se for falso
    if(!nota1) {
        alert("Não digitou nota 1");
        return
    }

    let nota2 = prompt("Digite a nota 2: ")
    nota2 = nota2 ? Number(nota2.replace(',', '.')) : 0

    if(!nota2){
        alert("Não digitou nota 2");
        return
    }

    let nota3 = prompt("Digite a nota 3: ") // null.replace(',', '.')
    nota3 = nota3 ? Number(nota3.replace(',', '.')) : 0

    if(!nota3){
        alert("Não digitou nota 3");
        return
    }

    
    const media = (nota1 + nota2 + nota3) / 3

    document.write(`<h2>O aluno ${nomeAluno} ficou com média ${media.toFixed(2)}.</h2>`)
   
}


