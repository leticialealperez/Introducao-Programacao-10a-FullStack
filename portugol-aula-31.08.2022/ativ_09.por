programa {
	funcao inicio() {
		inteiro tabuada, contador
		
		escreva("Digite o número para montar tabuada: ")
		leia(tabuada)
		
		para (contador = 1; contador <= 10; contador++){
		    inteiro resultado = contador * tabuada
		    escreva(contador + " x " + tabuada + " = " + resultado + "\n")
		}
		
	
	}
}
