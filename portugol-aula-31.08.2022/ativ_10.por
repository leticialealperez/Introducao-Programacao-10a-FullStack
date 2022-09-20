programa {
	funcao inicio() {
	    inteiro numero
	    
		para(numero = 1; numero <= 250; numero++){
		    se(numero % 3 == 0 e numero % 5 == 0){
		        escreva("O número " + numero + " é múltiplo de 3 e 5\n")
		    }
		}
	}
}
