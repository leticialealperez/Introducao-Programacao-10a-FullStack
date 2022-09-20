programa {
	funcao inicio() {
		inteiro qtdMacas
		real preco
		
	    escreva("Informe a quantidade de maçãs que deseja comprar: ")
	    leia(qtdMacas)
	    
	    
	    se(qtdMacas > 12){
	        preco = qtdMacas * 0.25
	    } senao{
	        preco = qtdMacas * 0.30
	    }
	    
	    escreva("Valor total das maçãs: " + preco)
	}
}
 