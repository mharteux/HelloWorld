/*
Escreva um programa que imprima os números de 1 a 100.
Mas, para múltiplos de 3, imprima "Fizz" em vez do número e, para múltiplos de 5, imprima "Buzz". 
Para números que são múltiplos de ambos 3 e 5, imprima "FizzBuzz".

• Dica: Exemplo para verificar se um número é múltiplo de 3:

• número % 3 == 0
*/

// Loop de 1 a 100
for (let i = 1; i <= 100; i++) {
    // Verifica se o número é múltiplo de 3 e 5
    if (i % 3 === 0 && i % 5 === 0) {
        console.log("FizzBuzz");
    } 
    // Verifica se o número é múltiplo de 3
    else if (i % 3 === 0) {
        console.log("Fizz");
    } 
    // Verifica se o número é múltiplo de 5
    else if (i % 5 === 0) {
        console.log("Buzz");
    } 
    // Se o número não for múltiplo de 3 ou 5, imprimir o resto dos números
    else {
        console.log(i);
    }
}
