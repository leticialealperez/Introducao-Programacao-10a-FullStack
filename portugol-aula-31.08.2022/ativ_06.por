programa {
	funcao inicio() {
	    
		real saldo = 250.0
		real taxa = 4.50
		inteiro saque
		
		escreva("Informe a quantidade de dinheiro que deseja sacar: R$ ")
		leia(saque)
		
		se(saque <= 0 ou saque % 5 != 0){
		    escreva("Valor do saque precisa ser um número positivo e múltiplo de 5")
		    retorne
		}
		
		se((saque + 4.50) > saldo){
		    escreva("Você não possui saldo suficiente para este saque")
		    retorne
		}
		
		saldo -= saque
		saldo -= taxa
		
		escreva("Saque realizado \n")
		escreva("Saldo atual: R$ " + saldo)
	}
}
 