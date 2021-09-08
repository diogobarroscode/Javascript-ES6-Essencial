/*** Concatenação e interpolação ***/

/** Concatenação é o processo de acrescentar uma cadeia de caracteres ao final de outra cadeia de caracteres. 
 * Você concatena cadeias de caracteres usando o operador + .
 * 
 * **/

/* concatenando duas variáveis - importante concatenar um espaço com " " para separar as variáveis */
var nome = "Diogo";
var sobrenome = "Barros"
console.log(nome + sobrenome);
console.log(nome + " " + sobrenome);


/* concatenando dois numeros - Ao usar o operador + entre dois número o javascrip irá entender
como uma soma. Quando o operador + é utilizado com dois números mas contendo alguma string
o javascript entenderá tudo como string*/
var num1 = 10;
var num2 = 20;
console.log(num1 + num2);
console.log(num1 + " " + num2);
console.log("Números" + num1 + num2);

/* Quebra de linha (\n) - para quebrar a linha em uma concatenação utiliza-se o \n */
console.log("Linha1" + "\n" + "Linha2");



/** O recurso interpolação de cadeia de caracteres baseia-se no recurso formatação composta e
 * fornece uma sintaxe mais legível e conveniente para incluir resultados de expressão formatada
 * em uma cadeia de caracteres. 
 * 
 * No javascrip usamos algo chamado templete strings que é um recurso da linguagem que permite declarar 
 * strings dentro das quais podemos interpolar valores, variáveis ou ainda quebrar o texto em múltiplas linhas
 * sem precisar utilizar o operador + para concatenar esses valores.
 * 
 * Para isso usamos a ` ` crase envolvendo todos os valores ao invés de aspas duplas ou simples, e para concatenar
 * valores utiliza-se place holders - ${valor}.
 * 
 * Templete strings também aceita quebrar linha sem o uso do \n.
 * 
 * **/

/* Quebra de linha */
console.log(`Linha1
Linha2`);


/* interpolação com places holders */
var nome = "Diogo";
var sobrenome = "Barros"
console.log(`Meu nome é ${nome} ${sobrenome}`);


/* Operações aritiméticas */
var num1 = 10;
var num2 = 20;
console.log(`A soma de ${num1} + ${num2} = ${num1 + num2}`);
