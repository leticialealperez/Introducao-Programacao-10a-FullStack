programa {

	funcao logico ePerfeito(inteiro valor) {
		inteiro soma = 0
		
		para(inteiro i = 1; i < valor; i++) {
			inteiro resto = valor % i
			se(resto == 0) {
				soma = soma + i 
			}
		}
		
		se(soma == valor) {
		  	retorne verdadeiro
		} 


		retorne falso
    }
    
    funcao inicio() {
        inteiro valor 
        
        escreva("Digite um valor: ")
        leia(valor)
        
        logico eNumPerfeito = ePerfeito(valor)

        se(eNumPerfeito){
        	escreva("O número é perfeito")
        } senao {
        	escreva("O número não é perfeito")
        }
    }
}
/* $$$ Portugol Studio $$$ 
 * 
 * Esta seção do arquivo guarda informações do Portugol Studio.
 * Você pode apagá-la se estiver utilizando outro editor.
 * 
 * @POSICAO-CURSOR = 388; 
 * @PONTOS-DE-PARADA = ;
 * @SIMBOLOS-INSPECIONADOS = ;
 * @FILTRO-ARVORE-TIPOS-DE-DADO = inteiro, real, logico, cadeia, caracter, vazio;
 * @FILTRO-ARVORE-TIPOS-DE-SIMBOLO = variavel, vetor, matriz, funcao;
 */