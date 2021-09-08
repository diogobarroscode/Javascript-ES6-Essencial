/*** Estruturas condicionais - SWITCH CASE ***/

/** Da mesma forma que o comando if, o comando switch case controla o fluxo do programa
permitindo ao programador especificar códigos diferentes para serem executadso em várias condições. 
Em particular, um comando switch compara o valor de uma variável aos valores especificados nos comandos case 

Sintaxe:

switch (variável) {
    case "valor da variável":
        código a ser executado se o case for verdadeiro
        break;
}

**/

/* No programa a seguir vamos utilizar uma variável "size" para definir o tamanho de uma camiseta.
O comando case compara qual valor corresponde a variável size e executa o código referente. O break serve para finalizar o programa.
Se nenhum valor for correspondente será executado o comando default.
*/

var size = "g"

switch (size) {
    case "p":
        console.log("Camiseta tamanho pequeno.");
        break;

    case "m":
        console.log("Camiseta tamanho médio.");
        break;

    case "g":
        console.log("Camiseta tamanho grande.");
        break;

    default:
        console.log("Tamanho incorreto.");

}

