// #10
programa {

	funcao unirVetores(inteiro vetor1[], inteiro vetor2[]) {
        inteiro vetor_uniao[20]

        para (inteiro i = 0; i <= 9; i++) {
            vetor_uniao[i] = vetor1[i]
        }
        
        para (inteiro j = 0; j <= 9; j++) {
            vetor_uniao[10 + j] = vetor2[j]
        }

        para (inteiro i = 0; i <= 19; i++) {
           	escreva(vetor_uniao[i], ", ")
        }
    }
	
    funcao inicio() {
        inteiro vetor1[] = { 1, 2, 3, 4, 5, 6, 7, 8, 9, 10}, vetor2[] = { 20, 19, 18, 17, 16, 15, 14, 13, 12, 11 }
        unirVetores(vetor1, vetor2)
    }
    
}
/* $$$ Portugol Studio $$$ 
 * 
 * Esta seção do arquivo guarda informações do Portugol Studio.
 * Você pode apagá-la se estiver utilizando outro editor.
 * 
 * @POSICAO-CURSOR = 413; 
 * @PONTOS-DE-PARADA = ;
 * @SIMBOLOS-INSPECIONADOS = ;
 * @FILTRO-ARVORE-TIPOS-DE-DADO = inteiro, real, logico, cadeia, caracter, vazio;
 * @FILTRO-ARVORE-TIPOS-DE-SIMBOLO = variavel, vetor, matriz, funcao;
 */