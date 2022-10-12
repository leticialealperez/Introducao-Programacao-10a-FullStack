// INPUT
const nomeHTML = document.getElementById('nome')
const enderecoHTML = document.getElementById('endereco')
const cidadeHTML = document.getElementById('cidade')
const estadoHTML = document.getElementById('estado')

const miniCurriculoHTML = document.getElementById('mini-curriculo')

const usuarios = []

const formularioHTML = document.getElementById('meu-formulario')
formularioHTML.addEventListener('submit', (evento) => {
    evento.preventDefault()
    
    salvarFormulario()
})

document.addEventListener('DOMContentLoaded', verificaListaInteresse)

function salvarFormulario(){
    const cargoHTML = document.querySelector('input[name="natureza-cargo"]:checked')

    const listaInteresseHTML = document.querySelectorAll('input[name="area-interesse"]:checked');

     const interesses = []

    for(const input of listaInteresseHTML){
        interesses.push(input.value)
    }

    if(listaInteresseHTML.length === 2){
        const dados = {
            nome: nomeHTML.value,
            endereco: enderecoHTML.value,
            cidade: cidadeHTML.value,
            estado: estadoHTML.value,
            cargo: cargoHTML.value,
            miniCurriculo: miniCurriculoHTML.value,
            listaInteresses: interesses
        }

        usuarios.push(dados)
        console.log(usuarios)
        montarCard(usuarios);

   } else {
    alert(`Ao menos 2 areas de interesse devem ser marcadas!`)
   
   } 
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
    divCard.setAttribute('style', 'border: 2px solid black;')

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

    divRoot.appendChild(divCard)

   })

}

function verificaListaInteresse(){

    const listaInteresseHTML = document.querySelectorAll('input[name="area-interesse"]');
    
    const selecionados = [];

    for(const input of listaInteresseHTML){
        input.addEventListener('change', () => {
            

            if(input.checked) {
                // alert(`Marcado ${input.value}`)

                selecionados.push(input.value);

                if(selecionados.length >= 2) {

                    listaInteresseHTML.forEach((input) => {
                        if(input.checked === false){
                            input.setAttribute('disabled', 'disabled');
                        }
                    })
                }

                return;
            }


           
            if (input.checked === false) {
                // alert(`Não checado ${input.value}`);

                let indiceEncontrado = selecionados.indexOf(input.value);

                
                selecionados.splice(indiceEncontrado, 1);

                console.log(selecionados);


                if (selecionados.length <= 2) {

                    listaInteresseHTML.forEach((value) => {

                        if (value.checked === false) {
                            value.removeAttribute('disabled');
                        }
                    });
                }
                return;
            }
        })
    }
}
