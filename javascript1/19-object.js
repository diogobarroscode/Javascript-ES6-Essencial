/** Object - Um objeto é uma coleção de propriedades, e uma propriedade é uma 
associação entre um nome (ou chave) e um valor.

Um valor de propriedade pode ser um array, outro objeto e uma função, 
que é então considerado um método do obejeto,


sintaxe:

var objeto = {
    "item": valor,
    "item": valor
}

acessar:

objeto.item

**/

/* Exemplo 1 - declarando e acessando um objeto */

var pessoa = {
    "nome": "Diogo",
    "sobrenome": "Barros",
    "idade": 28,
    "altura": 1.70
}
console.log(pessoa);
console.log(pessoa.nome);



/* Exemplo 2 - declarando e acessando um objeto */

var pessoa = {
    "nome": "Diogo",
    "sobrenome": "Barros",
    "idade": 28,
    "altura": 1.70
}
console.log(`Nome completo: ${pessoa.nome} ${pessoa.sobrenome}`)



/* Exemplo 3 - objeto com arrays */

var pessoa = {
    nome: "Diogo",
    sobrenome: "Barros",
    idade: 28,
    altura: 1.70,
    pets: ["gato", "coelho", "peixe"]
}
console.log(pessoa.pets);



/* Exemplo 4 - objeto com objetos */

var pessoa = {
    nome: "Diogo",
    sobrenome: "Barros",
    idade: 28,
    altura: 1.70,
   
    carros: {
        camaro: {
            placa: "123456",
            cor: "Amarelo",
        },

        uno: {
            placa: "654321",
            cor: "Preto",
        }
    }
}
console.log(`Placa do camaro: ${pessoa.carros.camaro.placa}`);
console.log(`Placa do Uno: ${pessoa.carros.uno.placa}`);




/* Também podemos adicionar funções aos objetos que podem funcionar como métodos. */

/* Exemplo 5 - Nesse objeto criamos uma função para validar a idade da pessoa
recebendo como parametro a idade especificada no objeto pessoa, e utilizamos o 
operador ternário para avaliar se a idade é maior ou igual a 18 e retornar se 
a pessoa é maior de idade ou não */

var pessoa = {
    nome: "Diogo",
    sobrenome: "Barros",
    idade: 28,
    altura: 1.70,

    validarIdade: function(age){
        return age >= 18 ? console.log("Maior de idade!") : console.log("Menor de idade!")
    }

}
pessoa.validarIdade(pessoa.idade);


/* Exemplo 6 - Nesse Objeto vamos criar um método(função) engordar para
atualizar o peso de uma pessoa.
*/

var pessoa = {
    nome: 'Diogo',
    sexo: 'M',
    peso: 85.4,

    engordar(p=0){
        console.log("Engordou!");
        this.peso += p;
    }
}
console.log(`${pessoa.nome} pesa ${pessoa.peso}kg`);
pessoa.engordar(2);
console.log(`${pessoa.nome} pesa ${pessoa.peso}kg`);