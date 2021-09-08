/*** BREAK ***/

/** O comando “break” serve para encerrar a leitura. O break é um comando que podemos 
 * utilizar quando queremos parar/encerrar o laço de repetição na hora. 
 * A instrução break interrompe o laço transfere e o controle da execução do programa para o comando seguinte.
 * 
 * */

/* Exemplo - Esse exemplo mostra a utilização do comando break em um loop for
em que terá sua execução encerrada por um break obedecendo alguma condição especificada.

Nesse caso temos um for de 1 até 10, e uma condição if que encerra o loop ao encontrar o número 5,
levando o programa a executar a próxima linha do programa.
*/

for (let i = 1; i <= 10; i++) {
    
    console.log(i);

    if(i === 5 ){
        break;
    }
    
}
console.log("Execução encerrada(break)");





/*** CONTINUE ***/

/** Diferente do comando break o continue não termina a execução do laço completamente, 
 * em vez disso ele continua a execução deste laço com a próxima iteração.
 * 
 * **/

/* Exemplo 1 - Esse exemplo mostra o utilização de um loop while de 10 a 100 onde ao encontrar
uma condição com o comando 'continue' para quando o valor do loop for igual a 50 esse valor seja
ignorado pelo programa continuando a execução para a proxima iteração.
*/

let x = 0;

while(x < 100){

    x += 10;

    if(x === 50){
        console.log("continue");
        continue;
    }
    
    console.log(x);
    
}


/* Exemplo 2 - Esse outro exemplo aplica a mesma lógica do exemplo anterior, mas acrescentando mais valores
a serem ignorados na execução do loop através do comando 'continue'.
*/

let x = 0;

while(x < 100){

    x += 10;

    if(x === 50 || x === 70 || x === 90){
        console.log("continue");
        continue;
    }
    
    console.log(x);
    
}
