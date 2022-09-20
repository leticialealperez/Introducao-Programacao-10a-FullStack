programa {

    real saldo = 0.0
    const real TAXA_SAQUE = 2.50
    const real TAXA_TED = 4.50

    funcao imprimirMenu(){
        escreva("\nBem vindo ao GrowBank\n\n")
        escreva("=== Escolha uma das opções ===\n")
        escreva("1 - Olhar saldo da conta\n")
        escreva("2 - Depositar money\n")
        escreva("3 - Sacar money\n")
        escreva("4 - Transferir money\n")
        escreva("5 - Sair do sistema\n")
    }

    funcao mostrarSaldo(){
        escreva("\nSeu saldo é...\n")
        escreva("GC$ " + saldo + "\n")
    }

    funcao depositar(){
        limpa()
        
        real valor
        escreva("\nDigite o valor a depositar: GC$ ")
        leia(valor)
        
        saldo = saldo + valor
        
        escreva(valor + " growcoins foram depositados com sucesso\n")
        mostrarSaldo()
    }

    funcao sacar(){
        limpa()

        real valor
        escreva("\nDigite o valor a sacar: GC$ ")
        leia(valor)
        
        real saldoTemp = saldo - valor - TAXA_SAQUE
        
        se(saldoTemp < -500){
            escreva("Não foi possível realizar seu saque pois você não tem saldo suficiente e o valor passa do limite do cheque especial")
        } senao {
            saldo = saldoTemp
            
            escreva(valor + " growcoins foram sacadas com sucesso\n")
            mostrarSaldo()
        }
    }

    funcao transferir(){
        limpa()
        
        real valor
        escreva("\nDigite o valor a transferir: GC$ ")
        leia(valor)
        
        real saldoTemp = saldo - valor - TAXA_TED
        
        se(saldoTemp < 0){
            escreva("Você não tem saldo suficiente para realizar essa trasferência")
        } senao{
            saldo = saldoTemp
            escreva(valor + " growcoins foram transferido com sucesso\n")
            mostrarSaldo()
        }
    }

    funcao inicio() {
        inteiro opcao
        logico continua = verdadeiro

        enquanto(continua){
            imprimirMenu()

            escreva("\nDigite a opção: ")
            leia(opcao)

            escolha(opcao){
                caso 1:
                    mostrarSaldo()
                pare
                caso 2:
                    depositar()
                pare
                caso 3:
                    sacar()
                pare
                caso 4:
                    transferir()
                pare
                caso 5:
                    escreva("Saindo do sistema...\n")
                    continua = falso
                pare
                caso contrario:  
                    limpa()
                    escreva("Opção inválida, tente novamente\n")
            }
        }
    }
}





























