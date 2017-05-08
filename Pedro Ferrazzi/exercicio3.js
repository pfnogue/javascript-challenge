/* 3- Crie uma função que receba uma lista de números e strings e retorne uma nova lista apenas com os números.
Ex: Input = [1, 2, 'a', 'b'], Output = [1, 2] */

var arrayTeste = [1, 2, 3, 'a', 'b','3',3.5, '34d']

function myFunction (array){
    var arrayNumber = [];
    for(var i=0; i<array.length; i++){
        if(!isNaN(array[i])){
            arrayNumber.push(array[i])
        }
    }
    return arrayNumber;
}
console.log(myFunction(arrayTeste));