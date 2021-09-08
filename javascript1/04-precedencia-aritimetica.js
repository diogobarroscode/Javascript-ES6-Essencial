/*** Precedencia Aritmética ***/

/** Quando uma expressão aritmética precisa ser avaliada num algoritmo, o analisador processa
 * a expressão dando prioridade para certos operadores. 
 * 
 * um operador possui maior precedência que outro se ele precisar ser analisado antes em todas as expressões sem 
 * parênteses que envolverem apenas os dois operadores. Na matemática, na expressão 8 * 2 - 1, a multiplicação é sempre
 * avaliada antes da subtração, ou seja, ela possui maior precedência.
 * 
 * Ordem de precedência:
 * 1- ()  parenteses
 * 2- **  potencias
 * 3- * / % multiplicação, divisão e módulo pussui mesmo grau de precedência, na prática seram avaliados da direita para
 * esquerda se aparecerem juntos.
 * 4- + - soma e subtração, mesma precedência avaliados da direita para esquerda dentro da mesma expressão.
 * 
 * exemplo:
 * 
 * 8 * 2 - 1 = 15 | Mltiplicação é sempre avaliada antes da subtração, ou seja, ela possui maior precedência
 * 
 * 8 * (2 - 1) = 8 | Nesse caso os parênteses tem maior precedência e será avaliado primeiro.
 * 
 * **/


/* exemplo 1 */
 var calc1 = 8 + 9 * 2;
 var calc2 = (8 + 9) * 2;
 console.log(calc1);
 console.log(calc2);


/* exemplo 2 */
var calc1 = 4 / 2 * 1 + 3;
var calc2 = (4 / 2) * (1 + 3); 
console.log(calc1);
console.log(calc2);


/** exemplo 3 - nesse caso os parênteses internos seram resolvidos primeiro.
 * 
 * 5 + 10 / 10 * (5 - 3 + (250 + 9))
 * 
 * 250 + 9 = 259
 * 5 - 3 + 259 = 261
 * 10 * 261 = 2610
 * 2610 / 10 = 261
 * 5 + 261 = 266
 * 
 * **/
var calc = (5 + 10 / 10 * (5 - 3 + (250 + 9)));
console.log(calc);