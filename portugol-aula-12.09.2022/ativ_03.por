programa {

	funcao logico ePrimo(inteiro numero){

		se(numero == 0){
			retorne falso
		}

		se(numero == 1){
			retorne falso
		}

		logico primo = verdadeiro

		para(inteiro i = 2; i < numero; i++){
			se (numero % i == 0){
				primo = falso
				pare
			}
		}


		retorne primo
	}
	
	funcao inicio() {
		inteiro num
		
		escreva("Digite um valor: ")
		leia(num)

		logico primo = ePrimo(num)

		escreva(primo)
	}
}

/* $$$ Portugol Studio $$$ 
 * 
 * Esta seção do arquivo guarda informações do Portugol Studio.
 * Você pode apagá-la se estiver utilizando outro editor.
 * 
 * @POSICAO-CURSOR = 281; 
 * @PONTOS-DE-PARADA = ;
 * @SIMBOLOS-INSPECIONADOS = {numero, 3, 30, 6}-{primo, 13, 9, 5}-{i, 15, 15, 1};
 * @FILTRO-ARVORE-TIPOS-DE-DADO = inteiro, real, logico, cadeia, caracter, vazio;
 * @FILTRO-ARVORE-TIPOS-DE-SIMBOLO = variavel, vetor, matriz, funcao;
 */