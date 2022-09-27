// object => TODA abstração do mundo real

// copo 1
const capacidade = '500ml'
const tipo = 'térmico'
const cor = 'preto'

// copo 2
const capacidade2 = '600ml'
const tipo2 = 'caneca'
const cor2 = 'vermelho'

// object => propriedade (chave): valor
const copo1 = {
    capacidade: '500ml',
    tipo: 'térmico',
    cor: 'preto'
}

// DECLARAÇÃO => object
/* const aluno = {
    matricula: '000023-1',
    nome: 'João da Silva',
    curso: 'PS Full Stack',
    idade: 27,
    ativo: false
} */

// document.write(`Aluno: ${aluno}`) => isso não funciona
// alert(`Aluno: ${aluno}`) => isso não funciona

// SAIDA DO DADO tipo objeto
/* console.log(`NOME ALUNO: ${aluno.nome}, MATRICULA: ${aluno.matricula}`) */

const aluno = new Object();

aluno.nome = prompt('Digite o nome do aluno:');
aluno.matricula = prompt('Digite a matricula do aluno')
aluno.curso = prompt('Digite o curso do aluno')
aluno.idade = Number(prompt('Digite a idade do aluno'))
aluno.ativo = confirm('Aluno está ativo? Ok (SIM) Cancel (NÃO)')

function removePropriedade(){
    // delete => remove uma propriedade de um objeto
    delete aluno.idade
}

removePropriedade();

// for in => variavel de controle sempre será a CHAVE (propriedade ou indice)
for(const propriedade in aluno){
    console.log(`PROPRIEDADE: ${propriedade}, VALOR: ${aluno[propriedade]}`); //objeto[propriedade] => array[indice]
}











