/* 1- Crie uma função que receba um inteiro e retorne a soma de todos os números múltiplos de 3 e 5. A lista de todos os números abaixo de 10 múltiplos de 3 e 5 é igual a [3, 5, 6 e 9]. A soma desses múltiplos é igual a 23.
Ex: Input = 10, Output = 23 */

function myFunction(number){
    var soma = 0;

    for (i=number-1;i>0;i--){
        if(i%3==0 || i%5==0){
            soma+=i;
        }

    }
    return soma;
}
console.log(myFunction(10));
    
