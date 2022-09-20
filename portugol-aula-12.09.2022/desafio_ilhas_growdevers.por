programa {
	funcao inicio() {
		inteiro valor, valorDescontado
		inteiro n50 = 0, n10 = 0, n5 = 0, n1 = 0
		
		escreva("Digite o valor que deseja sacar: GC$ ")
		leia(valor)
		
		valorDescontado = valor
		
		enquanto(valorDescontado >= 50){
		    valorDescontado = valorDescontado - 50
		    n50++
		}
		
		enquanto (valorDescontado >= 10){
		    valorDescontado = valorDescontado - 10
		    n10++
		}
		
		enquanto (valorDescontado >= 5){
		    valorDescontado = valorDescontado - 5
		    n5++  
		}
		
		enquanto (valorDescontado != 0){
		    valorDescontado = valorDescontado - 1
		    n1++
		}
		
		escreva("GC$ 50 --> " + n50 + "\n")
		escreva("GC$ 10 --> " + n10 + "\n")
		escreva("GC$ 5 --> " + n5 + "\n")
		escreva("GC$ 1 --> " + n1 + "\n")
	}
}
