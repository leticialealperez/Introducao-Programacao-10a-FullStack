// // #8
programa {
    inclua biblioteca Util --> u

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

        inteiro index = 1, qtdNumeros = 0
        inteiro numerosPerfeitos[4]


        enquanto(qtdNumeros != 4){

		se(ePerfeito(index)){
			qtdNumeros++
			numerosPerfeitos[qtdNumeros-1] = index
		}

        	index++
        }

        

        para (inteiro t = 0; t < u.numero_elementos(numerosPerfeitos); t++) {
        	escreva(numerosPerfeitos[t] + ", ")
        }
    }
}
/* $$$ Portugol Studio $$$ 
 * 
 * Esta seção do arquivo guarda informações do Portugol Studio.
 * Você pode apagá-la se estiver utilizando outro editor.
 * 
 * @POSICAO-CURSOR = 308; 
 * @PONTOS-DE-PARADA = ;
 * @SIMBOLOS-INSPECIONADOS = ;
 * @FILTRO-ARVORE-TIPOS-DE-DADO = inteiro, real, logico, cadeia, caracter, vazio;
 * @FILTRO-ARVORE-TIPOS-DE-SIMBOLO = variavel, vetor, matriz, funcao;
 */