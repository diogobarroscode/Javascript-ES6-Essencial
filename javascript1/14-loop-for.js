/*** Laço de repetição - for() ***/

/** Um loop for é uma instrução de fluxo de controle para especificar a iteração,
 *  que permite que o código seja executado repetidamente. 
 * 
 *  Existem outros loops como o Foreach(), while() e Do() While.
 * 
 *  O for geralmente é utilizado quando se sabe previamente quantas repetições irá conter o loop.
 * 
 *  
 *  Sintaxe:
 * 
 *  A instrução for cria um loop que consiste em três expressões opcionais, dentro de parênteses
 *  e separadas por ponto e vírgula, seguidas por uma declaração ou uma sequência de declarações
 *  executadas em sequência.
 * 
 *  for(inicialização, condição, incremento){
 *  
 *      bloco de código
 * 
 *  }
 *  
 *  1- O for recebe um valor inicial.
 *  2- Avalia uma condição, se for verdadeira o bloco de código será executado.
 *  3- Incrementa o valor inicial.
 *  4- Reavalia a condição e repete todo o processo até que a condição seja falsa.
 * 
 * 
 * **/


/** Exemplo 1 - O bloco de código será executado e i receberá + 1,
 * o loop irá continuar enquanto i for menor ou igual a 10 **/

for (var i = 0; i <= 10; i++){
    console.log(i);
}



/** Exemplo 2 - O bloco de código será executado e x diminuirá em 1,
 * o loop irá continuar enquanto x for maior que 0 **/

for (var x = 10; x >= 0; x--){
    console.log(x);
}



/** Exemplo 3 - Fazendo a tabuada de um número **/

var tabuada = 5;
console.log(`Tabuada de ${tabuada}`);

for (var i = 1; i <=10; i++ ){
    
    console.log(`${tabuada} x ${i} = ${tabuada * i}` );

}


/** Exemplo 4 - Nesse exemplo fizemos dois loops aninhados.
 * O primeiro for trabalha interagindo com as tabuadas de 1 a 10.
 * O segundo for trabalha interagindo com os valores de cada tabuada
 * informada pelo primeiro for. **/


for (let x = 1; x <= 10; x++){
    
    console.log(`Tabuada de ${x}`);

    for (let y = 1; y <= 10; y++){

        console.log(`${x} x ${y} = ${x * y}`);

    }

    console.log(`\n`);

}





