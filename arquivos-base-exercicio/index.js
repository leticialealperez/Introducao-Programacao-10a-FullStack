/*

1. Capture, armazene e manipule todos os elementos de classe "card".
Modifique os estilos necessários nesses elementos para que fique
semelhante a imagem.

2. Capture, armazene e manipule todos os elementos de classe
"titulo-card". Modifique os estilos necessários nesses elementos
para que fique semelhante a imagem.

3. Modifique o texto dos títulos nos cards para "Meu card".

4. Capture, armazene e manipule todos os elementos de classe
"descricao-card". Modifique os estilos necessários nesses elementos
para que fique semelhante a imagem.

5. Modifique o texto das descrições nos cards para "Descrição
modificada pelo JavaScript".

6. Capture, armazene e manipule todos os elementos de classe
"botao-editar". Modifique o estilo desses elementos para que fique
semelhante a imagem.

7. Capture, armazene e manipule todos os elementos de classe
"botao-apagar". Modifique o estilo desses elementos para que fique
semelhante a imagem.

8. Adicione o atributo 'onclick' nos elementos de classe “botão-editar”.
Ao clicar nesses elementos, deve chamar a função 'editarCard()'.
Essa função deve mostrar um alerta com a mensagem "Clicou em
Editar!".

9. Adicione o atributo 'onclick' nos elementos de classe
“botão-apagar”. Ao clicar nesses elementos deve chamar a função
'apagarCard()'. Essa função deve perguntar ao usuário se ele tem
certeza da exclusão do card. Se o usuário confirmar a exclusão deve
mostrar um alerta com a mensagem "Confirmado!", se não deve
mostrar a mensagem "Cancelou!".

 */

// querySelectAll('.card')

// getElementsByClassName('card')

const listaCards = document.getElementsByClassName('card');

for(const card of listaCards){

    card.setAttribute('style', 'background-color: #E16E0E;');

    
    card.children[0].innerHTML = 'Meu Card'
    card.children[0].setAttribute('style', 'color: #2b385b; margin-bottom: 30px');

    card.children[1].innerHTML = 'Descrição modificada pelo JavaScript';
    card.children[1].setAttribute('style', 'color: #ffff; margin-bottom: 30px');


    card.children[2].setAttribute('style', 'color: #ffff; border-radius: 20px; width: 70px; height: 35px; border: none; background-color: green');

    card.children[3].setAttribute('style', 'color: #ffff; border-radius: 20px; width: 70px; height: 35px; border: none; background-color: red');
     
}

const listaBtnEditar = document.querySelectorAll('.botao-editar');
const listaBtnApagar = document.querySelectorAll('.botao-apagar');

for( const btn of listaBtnEditar){
    btn.setAttribute('onclick', 'editarCard()')
}

for(const btn of listaBtnApagar){
     btn.setAttribute('onclick', 'apagarCard()')
}

function editarCard(){
    alert('Clicou!')
}

function apagarCard(){
    const confirma = confirm('Tem certeza que deseja excluir o card?');

    confirma ? alert('Confirmado!') : alert('Cancelou!')
    
}