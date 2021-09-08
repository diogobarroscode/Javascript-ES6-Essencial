/*** Estruturas condicionais - IF | ELSE ***/

/** Estruturas condicionais ou de decisão basicamente
criam um fluxo para execução de um bloco de código ou outro que atenda 
a uma condição específica. 

A condicional if é uma estrutura condicional que executa a afirmação, dentro do bloco 
se determinada condição for verdadeira. Se for falsa, executa as afirmações dentro de else.

Sintaxe:

if (condição) {
    bloco de código a ser executado
    se a condição if for verdadeira
}
else {
    bloco de código a ser executado
    se a condição if for falsa
}

**/


/* O código a seguir verifica se a variável idade é maior ou igual a 18,
se sim será executado o bloco de código referente a condição atendida 
se não esse bloco de código será ignorado e será executado o bloco seguinte*/

var idade = 18;

if (idade >= 18) {
    console.log("Maior de idade!");
}
else {
    console.log("Menor de idade!");
}


/* Podemos ter diversas condições a serem analisadas, e para cada uma um bloco de código
a ser executado. */

var idade = 10;

if (idade >= 18) {
    console.log("Maior de idade!");
}
else if ( idade <= 0 ) {
    console.log("Idade incorreta!");
}
else {
    console.log("Menor de idade!");
}


/* Também podemos ter condições aninhadas, onde iremos colocar condições dentro de blocos de códigos
de outras condições, criando ramificações de decisões em nosso programa */

var idade = 50;

if (idade >= 18) {
    if (idade >= 120){
        console.log("Idade incorreta!");
    }
    else if (idade < 30) {
        console.log("Você é um jovem adulto!")
    }
    else{
        console.log("Você está ficando velho!");
    }
}
else {
    if(idade <= 0) {
        console.log("Idade incorreta!")
    }
    else if(idade < 15){
        console.log("Você ainda é uma criança!");
    }
    else{
        console.log("Você já é um(a) adolescente!")
    }
}



