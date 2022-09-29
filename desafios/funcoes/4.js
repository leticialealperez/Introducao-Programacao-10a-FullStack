let qtdTermos = Number(prompt('Digite quantos termos deseja ver: '));

fibonacci(qtdTermos);

function fibonacci(valor){
   let fibonacci = [0, 1];
   let termo1 = 0;
   let termo2 = 1;
   let prox = 0;

    for(let i = 1; i < valor; i++){
        prox = termo1 + termo2;
        termo1 = termo2;
        termo2 = prox;

        fibonacci.push(prox); 
    }

    for(const termo of fibonacci){
        document.write(`>> ${termo} `)
    }
}

