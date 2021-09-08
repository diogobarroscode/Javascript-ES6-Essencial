/*** Tipos de dados ***/

/* Em Javascrip por ser uma linguagem dinâmicamente tipada 
a variável pode receber um tipo implícito, ou seja assume o 
tipo do dado a qual a ela foi atribuída ou inicializada 
*/


/** String - Cadeia de caracteres - para declarar uma string é preciso utilizar 
"" aspas duplas ou '' aspas simples  **/

var myName = "Diogo";
console.log(myName);



/** Number - Valor numérico **/

var age = 28;
console.log(age);



/** Number - O javascript utiliza o mesmo tipo para números inteiros e rais **/

var height = 1.70;
console.log(height);



/** boolean - verdadeiro(true) ou falso(false) **/

var isStudent = true;
console.log(isStudent);



/**  null - objeto vazio **/

var prof1 = null;
console.log(prof1);



/** undefined - indefinido - variável não inicializada**/

var prof2;
console.log(prof2);


/** NaN - A propriedade global NaN é um valor especial que significa Not-A-Number
 * 
 * Não é usual a utilização do NaN. Ele é retornado quando uma operação matemática falha. 
 * ou quando uma função tenta transformar uma string em inteiro (parseInt("blabla")).
 * 
 *  **/


/** Infinity - A propriedade global Infinity é um valor numérico que representa infinito.
 * 
 * O valor Infinity (positivo) é maior do que qualquer outro número. Este valor se comporta matematicamente
 * como infinito; por exemplo, qualquer número positivo multiplicado por Infinity é Infinity,
 * e qualquer coisa dividida por Infinity é 0. 
 * 
 * Pela especificação ECMAScript 5, Infinity é somente leitura.
 *  **/




/** Object - conjunto de dados que pode ter o valor de seus itens acessados ao serem especificados
informando o o nome do objeto e o item após o ponto.

sintaxe:

var objeto = {
    "item": valor,
    "item": valor
}

acessar:

objeto.item

**/

var person = {
    "name": "Diogo",
    "age": 28,
    "height": 1.70,
    "isStudent": true
}
console.log(person);
console.log(person.name);



/** Array - objeto que contém vários valores em mesmo objeti que podem ser acessados 
informando o índice - o índice de um array sempre começa com o número 0 

sintaxe:

var array = ["indice 0", "indice 1", "indice 2"]

**/

var students = ["simara", "maria", "Joao"];
console.log(students);
console.log(students[0]);
console.log(students[1]);
console.log(students[2]);



/** typeof - mostra o tipo de dados de determinada variável, ojeto ou função **/

var num1 = 32;
var lastName = "Barros";
var students = ["simara", "maria", "Joao"]; 
console.log(typeof num1);
console.log(typeof lastName);
console.log(typeof students);




/** Function - ojeto que pode executar determinada tarefa ao ser chamado.

Nesse exemplo criamos uma função sum() que faz a soma dos valores de "a" + "b" passados
como parãmetro através do console.log

sintaxe:

function função(parâmetros){
    bloco de código
    
    return
}
chamada(valores a serem passados como parâmetro)

**/  

function sum(a,b){

    return a + b;
}
console.log(sum(1,3));


