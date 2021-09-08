/*** Variáveis Simples ***/

/* Abaixo podemos como declarar uma variável de forma
simples e recuperar esse dado através do console.log.
Em Javascrip por ser uma linguagem dinâmicamente tipada 
a variável pode receber um tipo implícito, ou seja assume o 
tipo do dado o qual a ela foi atribuída ou inicializada */

var myName = "Diogo Barros";
console.log(myName);



/* Podemos criar váriaveis com as palavras reservadas
var, let e const.

var e let podem ser utilizadas sem serem inicializadas,
elas adotarão o valor "undefined", e podem ser reatribuídas.
Já const deve sempre ser inicializada ou seja deve receber
uma atribuíção e não pode ser reatribuída, não pode ter seu valor alterado.
*/

let language = "Javascript";
const pattern = "ECMA Script";
console.log(language);
console.log(pattern);



/*** Escopo global e local ***/

/* Em uma variável com escopo global podemos recuperar
seu valor em qualquer local, já uma variável com escopo local
só podemos recupara-lá se estivermos dentro do escopo.

var - Escopo global.
let - Escopo local.
const - Escopo local.

No código a seguir criamos duas variáveis dentro de um bloco de
código, age1 e age2. Vamos perceber que ao tentar recupera-las fora
do bloco de código só age1 retornará seu valor, age2 retornará erro e
só será acessível se o console.log for utilizado dentro do bloco de código
ou se age2 for inicializada fora do bloco de código.
*/


{
    var age1 = 32
    let age2 = 33;
}

console.log(age1);
console.log(age2);











