// #11
programa {
    funcao inicio() {
        cadeia arrayPrint[5]

        escreva ("Primeiro nome: ")
        leia (arrayPrint[0])

        escreva ("Segundo nome: ")
        leia (arrayPrint[1])

        escreva ("Terceiro nome: ")
        leia (arrayPrint[2])

        escreva ("Quarto nome: ")
        leia (arrayPrint[3])

        escreva ("Quinto (e último) nome: ")
        leia (arrayPrint[4])

        para (inteiro i = 0; i <= 4; i++) {
            se (i != 4) {
                escreva(arrayPrint[i], ", ")
            }
            senao {
                escreva(arrayPrint[i], ".\n")
            }
        }


        para (inteiro i = 4; i >= 0; i--) {
            se (i != 0) {
                escreva (arrayPrint[i], ", ")
            }
            senao {
                escreva (arrayPrint[i], ".")
            }
        }
    }
}

/* $$$ Portugol Studio $$$ 
 * 
 * Esta seção do arquivo guarda informações do Portugol Studio.
 * Você pode apagá-la se estiver utilizando outro editor.
 * 
 * @POSICAO-CURSOR = 854; 
 * @PONTOS-DE-PARADA = ;
 * @SIMBOLOS-INSPECIONADOS = ;
 * @FILTRO-ARVORE-TIPOS-DE-DADO = inteiro, real, logico, cadeia, caracter, vazio;
 * @FILTRO-ARVORE-TIPOS-DE-SIMBOLO = variavel, vetor, matriz, funcao;
 */