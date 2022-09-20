// #9
programa {
    inclua biblioteca Util --> u

     funcao verificaSeNumeroPertenceAoVetor(inteiro vetorRecebido[], inteiro numero) {
        logico ok = falso
        
        para (inteiro i = 0; i < u.numero_elementos(vetorRecebido); i++) {
            se (vetorRecebido[i] == numero) {
                ok = verdadeiro
                pare
            }
        }

        se(ok){
        	escreva("Número faz parte do vetor")
        } senao{
        	escreva("Número não faz parte do vetor")
        }
    }

    funcao inicio() {
        inteiro vetor1[] = { 1, 2, 3, 4, 5, 6, 7, 8 }
        
        verificaSeNumeroPertenceAoVetor(vetor1, 5)
    }

   
}
/* $$$ Portugol Studio $$$ 
 * 
 * Esta seção do arquivo guarda informações do Portugol Studio.
 * Você pode apagá-la se estiver utilizando outro editor.
 * 
 * @POSICAO-CURSOR = 402; 
 * @PONTOS-DE-PARADA = ;
 * @SIMBOLOS-INSPECIONADOS = ;
 * @FILTRO-ARVORE-TIPOS-DE-DADO = inteiro, real, logico, cadeia, caracter, vazio;
 * @FILTRO-ARVORE-TIPOS-DE-SIMBOLO = variavel, vetor, matriz, funcao;
 */