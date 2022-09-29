// ARRAY => objeto
// chave(propriedade/indice) - valor  => 0 até o tamanho do meu array - 1 => tamanho != ultimoIndice
// a propriedade "length" de um array é o tamanho, ou seja a quantidade de dados armazenados na lista
/* const listaLivros = [
    //[0] 
    {
        nome: 'Livro 1',
        paginas: 50
    },
    
    //[1]
    {
        nome: 'Livro 2',
        paginas: 100
    },

    //[2]
    {
        nome: 'Livro 3',
        paginas: 500
    }

] */

/* 

listaLivros[0] // 'Livro 1'
listaLivros[1] // 'Livro 2'
listaLivros[2] // 'Livro 3'
listaLivros[3] // undefined 

*/


/* for(let indice = 0; indice <= listaLivros.length - 1; indice++){
    
    // listaLivros => Array => indice (0, 1, 2...)
    // registro => Object => propriedade (.algumacoisa)
    console.log(listaLivros[indice].nome, listaLivros[indice].paginas);
} */


/*

Crie um objeto para colocar nome e duas notas. Atribua nome e
duas notas para o primeiro objeto, que será nosso primeiro aluno.
Agora crie mais um objeto para colocar informações do nosso
segundo aluno. Mostre as informações de cada aluno no console.
Mostre também a média do primeiro aluno e a média do segundo
aluno. Por fim mostre a média desta turma de 2 alunos.

*/

/* let cadastra = false;

const listaAlunos = []; */

/* do {
    const aluno = new Object();

    aluno.nome = prompt('Digite o nome do aluno: ');
    aluno.nascimento = prompt('Digite a data de nascimento: ');
    aluno.nota1 = Number(prompt('Digite a nota1: '));
    aluno.nota2 = Number(prompt('Digite a nota2: '));

    aluno.media = (aluno.nota1 + aluno.nota2) / 2;

    // adicionar registros em uma lista => push e unshift
    // push => adiciona ao final da lista
    // unshift => adiciona ao inicio da lista

   // listaAlunos.unshift(aluno); // [0]
    listaAlunos.push(aluno) // [length - 1]

    cadastra = confirm('Deseja continuar cadastrando? ok (SIM) cancel (NÃO)')

} while(cadastra) */

// C => CREATE



// R => READ
// todo método de array (menos o reduce) precisa de uma funcao como argumento
// essa função disponibiliza 3 parametros
// 1 - valor que esta sendo acessado naquele momento
// 2 - indice que esta sendo acessado naquele momento
// 3 - o array original

// MAP - mapeaia o array e retorna uma NOVA lista E SEMPRE DO MESMO TAMANHO QUE A ORIGINAL com os dados que a gente quiser retornar
/* 

const novaLista = listaAlunos.map( (aluno, indice, arrayOriginal) => {

    // DESCONSTRUÇÃO => arrays como pra objetos
    const [dia, mes, ano] = aluno.nascimento.split('/') //    28/09/1999
    // lista => ['28', '09', '1999']  dia, mes, ano => [0] DIA, [1] MES, [2] ANO
 

    const alunoMapeado = {
        nome: aluno.nome,
        idade: 2022 - Number(ano)
    }

    return alunoMapeado
} )

console.log(novaLista)

 */
// FOREACH - vai percorrer todas as posições do array e podemos motificar os valores de cada posição
// MODIFICA O ARRAY ORIGINAL E NÃO RETORNA NADA
/* 
let novaLista = listaAlunos.forEach( (aluno, indice, arrayOriginal) => {

    // DESCONSTRUÇÃO => arrays como pra objetos
    const [dia, mes, ano] = aluno.nascimento.split('/') //    28/09/1999
    // lista => ['28', '09', '1999']  dia, mes, ano => [0] DIA, [1] MES, [2] ANO
 

    aluno.nome = aluno.nome.toUpperCase()
    // delete aluno.nota1
    // delete aluno.nota2
    // delete aluno.media 
    aluno.idade = 2022 - Number(ano)

} )

console.log('NOVA LISTA', novaLista);
console.log('LISTA ORIGINAL', listaAlunos);

 */


// SOME - percorre todo o array e retorna true ou false
// quando a gente quer verificar se algum dos valores da lista atende a uma determinada condição

/* const existe = listaAlunos.some( (aluno, indice, arrayOriginal) => {
    // 1 a 1
    return aluno.nota1 <= 5
}); */


// EVERY - percorre todo o array e retorna true ou false
// quando a gente quer verificar se TODOS os valores da lista atende a uma determinada condição
/* const existe2 = listaAlunos.every( (aluno, indice, arrayOriginal) => {
    // 1 a 1
    return aluno.idade >= 18
}); */


// FIND - percorrer topdo array e retornar o elemento que atender a condição imposta
// retorna 1 valor => objeto => se não encontrar nada retorna null
/* const alunoEncontrado = listaAlunos.find( (aluno, indice, arrayOriginal) => {
    // 1 a 1
    return aluno.idade < 18
}); */


// FINDINDEX - percorrer todo array e retornar o INDICE que atender a condição imposta
// retorna 1 indice => number => se não encontrar nada retorna -1
/* const indiceEncontrado = listaAlunos.findIndex( (aluno, indice, arrayOriginal) => {
    // 1 a 1
    return aluno.idade < 18
}); */

// listaAlunos[indiceEncontrado] = novoObjeto



// FILTER - percorrer todo array e retornar um novo array com os elementos que atender a condição imposta
// retorna [] => objecto => se não encontrar nada retorna lista vazia
/* const listaFiltrados = listaAlunos.filter( (aluno, indice, arrayOriginal) => {
    // 1 a 1
    return aluno.idade < 18 // V ou F
}); */



// REDUCE - recebe uma callback como argumento e essa callback terá a posicao que esta sendo percorrida e a proxima posicao
// utilização: sempre que quiser reduzir uma lista de dados em um unico dado
const listaAlunos = [
    {
        nome: 'Joao loco',
        media: 10,
    },
    {
        nome: 'Pedro loco',
        media: 8,
    },
    {
        nome: 'José loco',
        media: 7,
    }
]
// 10    8     7
// [0] , [1], [2]

// 1a vez => acc = 15
const somaMedia = listaAlunos.reduce((acumulador, proximo) => {
    console.log('ACUMULADOR', acumulador)
    return acumulador + proximo.media
}, 0)

console.log('SOMA', somaMedia)


