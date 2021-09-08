/*** Capturar dados do teclado - PROMPT ***/

/** Com o javascript você pode solicitar alguma informação do usuário através do teclado
e armazenar essa informação em alguma variável. 

Vamos utilizar os conceitos de if-else e switch-case para pedir algumas informações do usuário
e executar nosso código baseado nessa informação.
**/

/** Para que o comando prompt() funcione corretamente no terminal do VSCode com o node
precisamos intalar o pacote prompt-sync do NPM  - para isso abra a linha de comando do seu 
sistema operacional e digite - npm install prompt-sync **/ 

/** Para que o pacote prompt-sync funcione em nosso arquivo precisamos utilizar a linha de comando
const prompt = require("prompt-sync")({sigint: true}); possibilitando o uso do recurso.

**/


/** Processando a idade do usuário **/
/** Ao executar o arquivo informe a informação solicitada no dialogo do terminal **/

const prompt = require("prompt-sync")({sigint: true});

var idade = prompt("Digite sua idade: ");

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



/** Processando o mês de nascimento do usuário **/
/** Ao executar o arquivo digite a informação solicitada no dialogo do terminal **/

const prompt = require("prompt-sync")({sigint: true});

var mes = prompt("Digite o mês que você nasceu: ");

switch (mes) {
    case '1':
        console.log("Janeiro.");
        break;

    case '2':
        console.log("Fevereiro.");
        break;
    
    case '3':
        console.log("Março.");
        break;

    case '4':
        console.log("Abril.");
        break;

    case '5':
        console.log("Maio.");
        break;

    case '6':
        console.log("Junho.");
        break;

    case '7':
        console.log("Julho.");
        break;

    case '8':
        console.log("Agosto.");
        break;

     case '9':
        console.log("Setembro.");
        break;

    case '10':
        console.log("Outubro.");
        break;

    case '11':
        console.log("Novembro.");
        break;

    case '12':
        console.log("Dezembro.");
        break;

    default:
        console.log("Valor incorreto.");
}