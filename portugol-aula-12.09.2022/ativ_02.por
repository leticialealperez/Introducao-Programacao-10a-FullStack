programa {


	funcao logico verificaImparPar(inteiro numero){
		
		se(numero % 2 == 1){
			retorne verdadeiro
		}
		
		retorne falso
	}

	
	funcao inicio() {
		
		inteiro num
		
		escreva("Digite um número inteiro: ")
		leia(num)

		logico eImpar = verificaImparPar(num)

		se(eImpar){
			escreva("O número digitado é impar")
		} senao {
			escreva("O número digitado é par")
		}
		
		
	}
}

/* $$$ Portugol Studio $$$ 
 * 
 * Esta seção do arquivo guarda informações do Portugol Studio.
 * Você pode apagá-la se estiver utilizando outro editor.
 * 
 * @POSICAO-CURSOR = 391; 
 * @PONTOS-DE-PARADA = ;
 * @SIMBOLOS-INSPECIONADOS = ;
 * @FILTRO-ARVORE-TIPOS-DE-DADO = inteiro, real, logico, cadeia, caracter, vazio;
 * @FILTRO-ARVORE-TIPOS-DE-SIMBOLO = variavel, vetor, matriz, funcao;
 */