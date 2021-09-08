/*** Loop while() ***/


/** A função do laço while é repetir um determinado trecho ENQUANTO uma determinada condição
 * for verdadeira.  
 * 
 * Esta instrução é usada quando não sabemos quantas vezes um determinado bloco de instruções
 * precisa ser repetido. Com ele, a execução das instruções vai continuar equanto a condição for verdadeira.
 * 
 * Sintaxe:
 * 
 * while(condição){
 * 
 *    bloco de código;
 * 
 *    incremento;
 * 
 * }
 * 
 * **/


/** Exemplo 1.
 *  
 * 1- Temos uma variável x que recebe 1.
 * 2- O loop while verifica se x é menor ou igual a 10.
 * 3- Se sim executará o console.log, e x é incrementado em + 1.
 * 4- A condição será reavaliada, e esse processo será repetido enquanto x for menor ou igual a 10.
 * 
 * **/

var x = 1;

while(x <= 10){
    console.log(`Repetição - ${x}`);

    x++;
}


/** Exemplo 2 - Faz o mesmo processo só que de forma decrescente. **/

var y = 10;

while(y >= 1){
    console.log(`Repetição decrescente - ${y}`);

    y--;
}



/** Exemplo 3 - Tabuada de um número. **/

var tab = 5;
var contador = 1;

console.log(`Tabuada de ${tab}.`)
while(contador <= 10){
    console.log(`${contador} x ${tab} = ${contador * tab}`);

    contador++;
}


/** Exemplo 4 - Tabuada.
 * 
 * Podemos utilizar o conceito de aninhamento como vimos com o loop for
 * para executar loops diferentes.
 * 
 * **/

var tabuada = 1;
var contador = 1;

while(contador <= 10){

    console.log(`Tabuada de ${tabuada}.`)

    for(var i = 1; i <= 10; i++){
        console.log(`${tabuada} x ${i} = ${tabuada * i}`);
    }

    console.log(`\n`);

    tabuada++;
    contador++;

}


