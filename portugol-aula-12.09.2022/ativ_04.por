programa {

	funcao converteSegundos(inteiro seg) {
		inteiro h = seg / 3600
		inteiro resto = seg % 3600
		inteiro m = resto / 60
		inteiro s = resto % 60
		escreva(h,':', m,':', s)
	}
	
	funcao inicio() {
		inteiro seg 
		
		escreva("Digite total em segundos: ")
		leia(seg)
		
		converteSegundos(seg)
	}
	
	
}

/* $$$ Portugol Studio $$$ 
 * 
 * Esta seção do arquivo guarda informações do Portugol Studio.
 * Você pode apagá-la se estiver utilizando outro editor.
 * 
 * @POSICAO-CURSOR = 313; 
 * @PONTOS-DE-PARADA = ;
 * @SIMBOLOS-INSPECIONADOS = ;
 * @FILTRO-ARVORE-TIPOS-DE-DADO = inteiro, real, logico, cadeia, caracter, vazio;
 * @FILTRO-ARVORE-TIPOS-DE-SIMBOLO = variavel, vetor, matriz, funcao;
 */