import produtos from "./database.js";

console.log(produtos);

// REGRA - unica variavel a ser utilizada é produtos
// REGRA - não pode alterar a variavel 'produtos'

// PRIMEIRA PARTE

// 1. Buscar e imprimir todos os produtos que estão com estoque 0

// 2. Buscar e imprimir todos os produtos que possuirem uma margem de lucro acima de 40%

// 3. Buscar todas as BATEDEIRAS da cor 'azul' e imprimir por ordem de valor (do menor ao maior)

// 4. Buscar todas as BATEDEIRAS que possuirem estoque igual ou maior que 5, adicionar um desconto de 15% em seu valor de venda e imprimir a lista de produto com o novo valor

// 5. Imprimir o valor de estoque da loja - todos os produtos somados (precoVenda)

// 6. Imprimir a quantidade total de produtos em estoque (estoque)

// SEGUNDA PARTE

// 1. Ordenar os produtos por nome (A-Z) E por precoCusto (menor ao maior)

// A => MENOR AO MAIOR
// B => MENOR AO MAIOR
//...
// Z => MENOR AO MAIOR

// 2. Buscar um ou mais Smartphones que estejam na faixa de preço de venda de 1500 a 2000 e imprimir o modelo, cor, precoVenda e margem de lucro


const data = [
{
nome: 'Roger Medeiros',
sexo: 'M',
salario: 3250,
},
{
nome: 'Carolina Silva',
sexo: 'F',
salario: 1200,
},
{
nome: 'Cristina Avila',
sexo: 'F',
salario: 8100,
},
{
nome: 'Gustavo Hoffman',
sexo: 'M',
salario: 5200.35,
},
{
nome: 'Eva Trindade',
sexo: 'F',
salario: 2501,
},
{
nome: 'Andre Mathias',
sexo: 'M',
salario: 1750,
},
{
nome: 'Joice Castro da Silva',

sexo: 'F',
salario: 3350.25,
},
];

/* Utilize a função filter, para filtrar todas pessoas que o nome possua o
sobrenome "Silva". */

console.log(data.filter((pessoa, index) => {

    return pessoa.nome.indexOf('Silva') !== -1 //
}))



