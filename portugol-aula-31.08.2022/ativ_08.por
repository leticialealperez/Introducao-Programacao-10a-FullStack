programa {
	funcao inicio() {
		real peso
		inteiro idade
		
		escreva("Digite sua idade: ")
		leia(idade)
		
		escreva("Digite seu peso: ")
		leia(peso)
		
		se(idade <= 12) {
		    escreva("Categoria infantil")
		} senao se (idade >= 13 e idade <= 16) {
		    se(peso <= 40) {
		        escreva("Categoria Juvenil Leve")
		    } senao {
		        escreva("Categoria Juvenil Pesado")
		    }
		} senao se(idade >= 17 e idade <= 24) {
		    se(peso <= 45) {
		        escreva("Categoria Sênior Leve")
		    } senao se (peso > 45 e peso <= 60) {
		        escreva("Categoria Sênior Médio")
		    } senao {
		        escreva("Categoria Sênior Pesado")
		    }
		} senao {
		    escreva("Categoria Veterano")
		}
	}
}
