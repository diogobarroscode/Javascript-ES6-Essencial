/*** Funções - Funções são blocos de construção fundamentais em JavaScript. Uma função é um procedimento 
 * de JavaScript - um conjunto de instruções que executa uma tarefa ou calcula um valor. 
 * Para usar uma função, você deve defini-la em algum lugar no escopo do qual você quiser chamá-la. 
 * 
 * 
 * A definição da função consiste no uso da palavra chave function seguida por:
 * 
 * 1-Nome da função.
 * 2-Lista de argumentos para a função, entre parênteses e separados por vírgulas.
 * 3-Declarações JavaScript que definem a função, entre chaves { }.
 * 
 * function soma(num1, num2){
 *      return num1 + num2;
 * }
 * 
 * A definição de uma função não a executa. Definir a função é simplesmente nomear a função e especificar 
 * o que fazer quando a função é chamada. Chamar a função executa realmente as ações especificadas com os 
 * parâmetros indicados. Por exemplo, se você definir a função soma, você pode chamá-la do seguinte modo: 
 * 
 * soma(5,5);
 * 
 * ***/



/* Exemplo 1 - Função simples para fazer a soma de dois numeros. */

function soma(num1, num2) {
    return num1 + num2;
}
console.log(soma(5,5));

/** Se por algum motivo um desses parametros não forem passados para a função,
 * o Javascript irá retornar NAN. Para evitar isso podemos predefinir algum valor
 * para que esses parâmetros assumam.
 */

function soma(num1=0, num2=0) {
    return num1 + num2;
}
console.log(soma(5));



/* Exemplo 2 - Função para retornar se um número é par ou impar. */

function parimpar(n) {
    if (n%2 == 0) {
        return "par!";
    }
    else {
        return "impar!"
    }
}
console.log(parimpar(11));


/** Exemplo 3 - Criar uma função que calcule a média de 3 notas de um aluno
 * e mostrar as mensagens de acordo com cada situação.
 * 
 * Se a média for igual ou maior que 7 - Aprovado.
 * Se a média for maior ou igual a 5 e menor que 7 - Recuperação.
 * Se a média for menor que 5 - Reprovado. **/

function calculaMedia(nota1,nota2,nota3) {
    let media = (nota1 + nota2 + nota3) / 3

    if (media >= 7) {
        return "Aprovado!"
    }
    else if (media < 5) {
        return "Reprovado!"
    }
    else{
        return "Recuperação!"
    }

}
console.log(calculaMedia(4,4,4));



/** Exemplo 4 - Calcular o fatorial de um número.
 * 
 * Sabe-se que o fatorial de um número é ele multiplicado por seus antecedentes até 
 * o número 1
 * 
 * Exemplo do fatotial de 5 "5!" é 5x4x3x2x1 = 120.
 */

function fatorial(n) {
    let fat = 1;
    for(let c = n; c > 1; c--){
        fat *= c;
    }
    return fat;
}
console.log(fatorial(5));