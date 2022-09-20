/**
 * 
 * Crie três variáveis, uma usando const, duas variáveis usando let. 
 * Na variável const coloque o total de uma compra, por exemplo 149.90. Na variável let coloque a quantidade de parcelas, por exemplo 2. Na outra variável let coloque o valor da parcela. Apresente no documento html as seguintes informações:
 * "O valor total da compra foi R$_,_"
 *  "Forma de pagamento: _x de R$_,_"
 * 
 */

// camelCase => separacao por segunda palavra maiuscula
// underscore = separacao por _
const totalCompra = Number(prompt("Digite o valor da compra: ").replace('.', '').replace(',', '.'))
// 149.500,10 => 149500,10 => 149500.10
let quantidadeParcela = parseInt(prompt("Digite a quantidade de parcelas: ").replace('.', '').replace(',', '.')) // '3.8'

if(totalCompra && quantidadeParcela){
    let valorParcela = totalCompra / quantidadeParcela // => 149.90 / 3

    document.write(`<h2>O valor total da compra foi R$${totalCompra.toFixed(2)}</h2>
                <h2>Forma de pagamento: ${quantidadeParcela}x de R$${valorParcela.toFixed(2)}</h2>`)
}else {
    alert("Dados inválidos")
}


