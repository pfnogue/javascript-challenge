/* 4- Crie uma função receba uma string com números separados e retorne o maior e o menor número.
Ex: Input = '1 2 3 4 5', Output = '5 1'*/

const stringNumero = '1 2 3 4 5';

function maiorslc (stringNumero) {

    var arrayNumero = stringNumero.split(" ");

    arrayNumero.sort();

    var maior = arrayNumero[arrayNumero.length - 1];

    var menor = arrayNumero[0];

    return maior + " " + menor;
}

console.log(maiorslc(stringNumero))