/* 2- Crie uma função que receba um array de letras do alfabeto consecutivas e retorne a letra que está faltando.
Ex: Input = ['a', 'b', 'c', 'e', 'f', 'g'], Output = 'd'*/

const alfabeto = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];

const arrayTeste = ['a','b','c','e','f','g'];


function verificacao(arrayAlfabeto){
    var faltando ;
    for(var i = 0;i < arrayAlfabeto.length; i++){
        if(arrayAlfabeto[i] != alfabeto[i]){
            faltando=alfabeto[i];
            break;
        }
    }
    return faltando;
}

console.log(verificacao(arrayTeste)); 