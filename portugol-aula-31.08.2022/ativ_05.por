programa {
    inclua biblioteca Texto --> t
    inclua biblioteca Calendario --> c
	funcao inicio() {
	    
		inteiro idade
		cadeia nome
		
		escreva("Digite seu nome: ")
		leia(nome)
		
		escreva("Digite sua idade: ")
		leia(idade)
		
        escreva("Seu nome: " + nome + "\n")
        escreva("Quantidade de letras do nome: " + t.numero_caracteres(nome) + "\n")
        escreva("Sua idade: " + idade + "\n")
        escreva("Ano de nascimento: " + (c.ano_atual() - idade))
		
	}
}
 