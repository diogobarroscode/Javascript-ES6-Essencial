/*** Loop do while() ***/

/** O laço do while() tem o mesmo funcionamento do laço while(),
 * a diferença é que com o uso dele teremos os comandos executados ao menos uma única vez,
 * e só depois a condição será avaliada.
 *
 * Sintaxe:
 * 
 * do{
 * 
 *     bloco de código;
 *      
 *     incremento;
 * 
 * }while(condição);
 *  
 * 
 * **/

/** Exemplo 1 - Nesse exemplo temos uma condição que retorna false, mas notamos que o bloco de código
 * é executado uma vez e só depois a condição é avaliada saindo do loop.
 * 
 * **/

var exe1 = 1;

do{
    
    console.log(`Executando o do while()`);

}while(exe1 > 1);


/** Exemplo 2 - Nesse exemplo existe uma condição que retorna true e o loop corre normalmente. **/

var exe2 = 1;

do{
    console.log(`Executando o do while()`);

    exe2++;

}while(exe2 <= 3);