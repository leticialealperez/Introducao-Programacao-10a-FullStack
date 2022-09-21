/*

    Crie um algoritmo que armazene três valores, para cada um dos
    lados de um triângulo: A, B e C. Verifique se os lados fornecidos
    formam realmente um triângulo. Se formar, deve mostrar no console
    o tipo de triângulo: isósceles, escaleno ou equilátero.
    
    a. Para verificar se os lados fornecidos formam um triângulo: 
    A < B + C e B < A + C e C < A + B.

    b. Triângulo isósceles: possui dois lados iguais (A=B ou A=C ou
    B=C);

    c. Triângulo escaleno: possui todos os lados diferentes (A<>B e
    B<>C e A<>C);

    d. Triângulo equilátero: possui todos os lados iguais (A=B e
    B=C);

*/
verificaTriangulo();

function verificaTriangulo(){
    const A =  Number(prompt(`Digite um valor do lado A:`))
    const B =  Number(prompt(`Digite um valor do lado B:`))
    const C =  Number(prompt(`Digite um valor do lado C:`))

    if (A < B + C && B < A + C && C < A + B){
        // aqui quando é triangulo
        
        
        
        if(A != B && B != C && A != C) {
            alert("É um Triângulo escaleno")
            return
        }
        
        // 30, 30, 20
        // V, V, V => F
        if(A==B &&  B==C)  {
            alert("É um Triângulo equilátero")
            return
        }

        // 30, 30, 20
        // V, V, F => V
        if (A==B || A==C ||  B==C) {
            alert("É um Triângulo isósceles")
            return
        }


    }else {
        alert("Não é um triangulo")
    }
}

// 15 , 20 , 30 




