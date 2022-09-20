programa {
    inclua biblioteca Matematica --> m
	funcao inicio() {
		real pedro = 1.50
		real lucas = 1.10
		
		inteiro anos = 1
		inteiro igual = 0
		inteiro maior = 0
		
		enquanto (lucas <= pedro){
		    
		    pedro = m.arredondar(pedro + 0.2, 2)
		    lucas = m.arredondar(lucas + 0.3, 2)
		    
		  //  escreva("pedro: " + pedro + " | lucas: " + lucas + "\n") 
		    
		    se(lucas == pedro){
		        igual = anos
		    }
		    
		    se (lucas > pedro){
		        maior = anos
		    }
		    
		    anos++
		}
		
		escreva("Igual: " + igual + "\n")
		escreva("Maior: " + maior)
	}
}
