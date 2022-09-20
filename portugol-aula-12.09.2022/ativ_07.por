programa {
	inclua biblioteca Util --> u
    
	funcao inicio() {
	    
		inteiro vet[] = { 4, 13, 2, 101, 122, 19, 21, 41, 51, 9, 3, 8, 11, 21, 44, 1, 33, 25, 21, 7 }
		

		inteiro soma = 0
		
		para (inteiro i = 0; i < u.numero_elementos(vet); i++) {
			soma += vet[i] 
		}
		
		escreva(soma)

	}
}
/* $$$ Portugol Studio $$$ 
 * 
 * Esta seção do arquivo guarda informações do Portugol Studio.
 * Você pode apagá-la se estiver utilizando outro editor.
 * 
 * @POSICAO-CURSOR = 216; 
 * @PONTOS-DE-PARADA = ;
 * @SIMBOLOS-INSPECIONADOS = ;
 * @FILTRO-ARVORE-TIPOS-DE-DADO = inteiro, real, logico, cadeia, caracter, vazio;
 * @FILTRO-ARVORE-TIPOS-DE-SIMBOLO = variavel, vetor, matriz, funcao;
 */