// INPUT
const nomeHTML = document.getElementById('nome')
const enderecoHTML = document.getElementById('endereco')
const cidadeHTML = document.getElementById('cidade')
const estadoHTML = document.getElementById('estado')
const botaoAtualizar = document.getElementById('botao-Atualizar')
/* const usuarios = JSON.parse(localStorage.getItem('dadosFormulario') ?? '[]') */
let usuarios = []
const dadosStorage = localStorage.getItem('dadosFormulario')

if(dadosStorage !== null){
    usuarios = JSON.parse(dadosStorage);
}


const miniCurriculoHTML = document.getElementById('mini-curriculo')

const formularioHTML = document.getElementById('meu-formulario')
formularioHTML.addEventListener('submit', (evento) => {
    evento.preventDefault()
    
    salvarFormulario()
})

document.addEventListener('DOMContentLoaded', () => {
    montarCard(usuarios)
})

function salvarFormulario(){
    const cargoHTML = document.querySelector('input[name="natureza-cargo"]:checked')
    const listaInteresseHTML = document.querySelectorAll('input[name="area-interesse"]:checked')

    
    const interesses = []

    for(const input of listaInteresseHTML){
        interesses.push(input.value)
    }


    const dados = {
        nome: nomeHTML.value,
        endereco: enderecoHTML.value,
        cidade: cidadeHTML.value,
        estado: estadoHTML.value,
        cargo: cargoHTML.value,
        miniCurriculo: miniCurriculoHTML.value,
        listaInteresses: interesses
    }

    const existe = usuarios.some((dado) => {
        return dado.nome === nomeHTML.value // &&
    })

    if(existe){
        alert("Não vai rolar!")
        return
    }

    usuarios.push(dados)
    localStorage.setItem('dadosFormulario', JSON.stringify(usuarios))
    formularioHTML.reset();
    console.log(usuarios)
    montarCard(usuarios);
}

function montarCard(listaDados){
    /*
    ISSO É UM CARD

    <div style="border: 2px solid black;">
            <h3>João da Silva</h3>
            <p>Rua dos Bobos, 0</p>
            <p>Computação</p>
            <p>Engenharia</p>
    </div>
    
    */

   const divRoot = document.getElementById('root');
   divRoot.innerHTML = '';

   listaDados.forEach((dado) => {

    const divCard = document.createElement('div')
    divCard.setAttribute('style', 'border: 2px solid black; margin: 10px')
    divCard.setAttribute('id', dado.nome)

    const tituloCard = document.createElement('h3')
    tituloCard.innerText = dado.nome
    
    const paragrafoEndereco = document.createElement('p')
    paragrafoEndereco.innerText = dado.endereco

    divCard.appendChild(tituloCard)
    divCard.appendChild(paragrafoEndereco)


    dado.listaInteresses.forEach((interesse) => {
        const paragrafo = document.createElement('p');
        paragrafo.innerText = interesse

        divCard.appendChild(paragrafo)
    });

    const botaoEditar = document.createElement('button')
    botaoEditar.setAttribute('type', 'button')
    botaoEditar.innerText = 'Editar'
    botaoEditar.addEventListener('click', () => {
        editarDados(dado)
    })
    

    const botaoApagar = document.createElement('button')
    botaoApagar.setAttribute('type', 'button')
    botaoApagar.innerText = 'Apagar'
    botaoApagar.addEventListener('click', () => {
        apagarDado(dado)
    })

    divCard.appendChild(botaoEditar)
    divCard.appendChild(botaoApagar)

    divRoot.appendChild(divCard)

   })

}

function editarDados(dado){
    // colocar os dados no formulario novamente
    nomeHTML.value = dado.nome
    enderecoHTML.value = dado.endereco
    cidadeHTML.value = dado.cidade
    estadoHTML.value = dado.estado

    // ocultar o ENVIAR e mostrar o ATUALIZAR
    const botaoEnviar = document.getElementById('botao-Enviar')
    botaoEnviar.setAttribute('style', 'display: none')

    const botaoAtualizar = document.getElementById('botao-Atualizar')
    botaoAtualizar.setAttribute('style', 'display: inline-block')
    botaoAtualizar.addEventListener('click', () => {
        const dadoAtualizado = {
            nome: nomeHTML.value,
            endereco: enderecoHTML.value,
            cidade: cidadeHTML.value,
            estado: estadoHTML.value,
        }

        console.log(dadoAtualizado)
    })

    const botaoLimpar = document.getElementById('botao-Limpar')
    botaoLimpar.innerHTML = 'Cancelar'
    botaoLimpar.addEventListener('click', () => {
        formularioHTML.reset()
        botaoEnviar.setAttribute('style', 'display: inline-block')
        botaoAtualizar.setAttribute('style', 'display: none')
    })


}

function apagarDado(dado){

    if(confirm("Tem certeza que deseja excluir?")){
        // remover da DOM
        document.getElementById(`${dado.nome}`).remove()

        // remover da lista de usuarios - LOCAL
        usuarios = usuarios.filter((usuario) => usuario.nome !== dado.nome)

        // atualizar o localstorage
        localStorage.setItem('dadosFormulario', JSON.stringify(usuarios))
    }
}


// JSON - Javascript Object Notation

// objeto => propriedade: valor

/* const carros = [
    {
        cor: 'preto',
        modelo: 'fusca'
    },
     {
        cor: 'preto',
        modelo: 'fusca'
    },
     {
        cor: 'preto',
        modelo: 'fusca'
    }
] */


// TRANSFORMAR UM OBJETO (ou qualquer dado) EM JSON 
/* let dadosStorage = JSON.stringify(carros); */

// TRANSFORMAR UM DADO json DE NOVO EM OBJETO OU ARRAY
/* JSON.parse(dadosStorage) */


// LOCALSTORAGE - não expira ao fechar o navegador

// SET - criar ou substitui uma informação (chave) no localStorage
/* let dadosString = JSON.stringify(carros)
localStorage.setItem('listaCarros', dadosString) */

// GET - capturar (ou trazer) os dados que estão no localStorage
// JSON.parse(localStorage.getItem('dadosFormulario') ?? '[]')

// REMOVE - remove um dado do localStorage



// CLEAR - limpa ou remove TODOS os dados armazenados no localstorage



// SESSIONSTORAGE - expira ao fechar o navegador

// SET - criar ou substitui uma informação (chave) no sessionStorage


// GET - capturar (ou trazer) os dados que estão no sessionStorage

// REMOVE - remove um dado do sessionStorage


// CLEAR - limpa ou remove TODOS os dados armazenados no sessionStorage
