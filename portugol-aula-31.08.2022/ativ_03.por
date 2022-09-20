programa {
	funcao inicio() {
		real peso, altura
		
		escreva("Digite sua altura: ")
		leia(altura)
		
		escreva("Digite seu peso: ")
		leia(peso)
		
		real imc = peso / (altura * altura)
		
		escreva("Seu IMC é: " + imc)
	}
}
 