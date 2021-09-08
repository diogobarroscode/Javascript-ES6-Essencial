/*** Operador ternário ***/

/** O operador ternário é uma alternativa a estrutura condicional IF-ELSE.
 * 
 *  Basicamente sua estrutura verifica uma condição e se for verdadeira executa determinado código,
 * caso contrário executa outro código especificado.
 * 
 * Sintaxe:
 * condição ? true : false
 * 
 * **/

/** No seguinte exemplo verificamos se a variável idade é maior ou igual 18 ,
 * se verdadeiro executará o código após a interrogação,
 * se falso executará o código após os dois pontos.
 * 
 * **/


var idade = 18

idade >= 18 ? console.log("Maior de idade!") : console.log("Menor de idade");