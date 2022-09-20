programa {
	funcao inicio() {
		inteiro n1, n2
		caracter operacao
		
		escreva("Digite primeiro número: ")
		leia(n1)
		
		escreva("Digite segundo número: ")
		leia(n2)
		
		escreva("Digite a operação: ")
		leia(operacao)
		
		
		
		escolha (operacao){
		    caso '+': 
                escreva(n1 + " + " + n2 + " = " + (n1+n2))
		    pare
		    caso '-': 
                escreva(n1 + " - " + n2 + " = " + (n1-n2))
		    pare
		    caso '/': 
                escreva(n1 + " / " + n2 + " = " + (n1/n2))
		    pare
		    caso '*': 
                escreva(n1 + " * " + n2 + " = " + (n1*n2))
		    pare
		    caso contrario:
		        escreva("Operação inválida")
		}
	}
}
 