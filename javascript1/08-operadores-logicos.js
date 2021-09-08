/*** Operadores Lógicos ***/

/** Verifica duas condições e retorna se aquela operação como um todo
é verdadeira ou falsa **/

/** Operador AND (&&) - retorna verdadeiro se as duas sentenças forem verdadeiras
caso contrário toda operação será falsa **/

var x = 5;
var y = 10;
console.log((x < y) && (y > x) );




/** Operador OR (||) - retorna verdadeiro se alguma condição for verdadeira
e retorna falso se as duas condições forem falsas. **/

var x = 50;
var y = 100;
console.log((x > y) || ( (100/2) == 50 ));




/** Negação (!) - utilizada para negar determinada condição 
exemplo "( !5 > 2 ) = true" {é verdade que 5 não é maior que 2} **/

var x = 2;
var y = 3;
console.log(!(x < y) && !(y > x));

