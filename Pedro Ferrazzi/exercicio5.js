/* 5- Crie uma função que receba uma string e a retorne em pares de dois caracteres. Se a quantidade de caracteres for impar, retornar o caracter _ como par.
Ex: Input = 'abcde', Output = ['ab', 'cd', 'e_'] 
Ex: Input = 'abcd', Output = ['ab', 'cd'] */

const input1 = 'abcde'

const input2 = 'abcd'

function myFunction(text){
    var array = [];
    if(text.length %2 !=0){
        text += "_";
    }
    for (var i = 0, x=0; i<text.length/2; i++, x+=2){
        array[i]=text.slice(x,x+2);
    }
    return array;
}
console.log(myFunction(input1));