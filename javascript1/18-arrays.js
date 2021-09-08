/** Array - objeto que contém vários valores em um mesmo objeto que podem ser acessados 
informando o índice - o índice de um array sempre começa com o número 0 

sintaxe:

var array = ["indice 0", "indice 1", "indice 2"]

**/

var letras = ["a","b","c","d","e"];

console.log(`Array letras ${letras}`);

console.log(`Array letras no índice 0 contém o valor ${letras[0]}`);
console.log(`Array letras no índice 1 contém o valor ${letras[1]}`);
console.log(`Array letras no índice 2 contém o valor ${letras[2]}`);
console.log(`Array letras no índice 3 contém o valor ${letras[3]}`);
console.log(`Array letras no índice 4 contém o valor ${letras[4]}`);




/*** Array multidimensional - São arrays que contém outros arrays possuindo duas ou mais dimensões. ***/


/* exemplo 1 - acessando todo o array multidimensional */

var camisa = [["branca", "vermelha", "preta", "azul"], ["P", "M", "G", "GG"]];

console.log(camisa);



/* exemplo 2 - acessando os arrays multidimensionais separadamente */

var camisa = [["branca", "vermelha", "preta", "azul"], ["P", "M", "G", "GG"]];

console.log(`Cores - ${camisa[0]}`);
console.log(`Tamanhos - ${camisa[1]}`);



/* exemplo 3 - acessando os itens de um array multidimensional. 

Para acessar um array multidimensional é preciso indicar o índice do array e o índice do item desse array.
*/

var camisa = [["branca", "vermelha", "preta", "azul"], ["P", "M", "G", "GG"]];

console.log(`Cor - ${camisa[0][0]}`);
console.log(`Tamanho - ${camisa[1][2]}`);



/* exemplo 4 - outra forma de declarar um array multidimensional */

var cor = ["branca", "vermelha", "preta", "azul"];
var tamanho = ["P", "M", "G", "GG"];
var quantidade = [10,50,3,9];

var camisa = [cor,tamanho,quantidade];

console.log(`Cor - ${camisa[0]}`);
console.log(`Tamanho - ${camisa[1]}`);
console.log(`Quantidade - ${camisa[2]}`);



