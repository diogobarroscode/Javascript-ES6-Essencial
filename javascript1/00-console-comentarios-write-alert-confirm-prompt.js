/*** Para mostrar um output de dados no console
utilizamos o comando console.log - Para executar
os comandos do javascript direto no terminal do VSCode
é preciso instalar o -node JS- na máquina e uma extensão do VSCode
chamada Code Runner.

Para configurar o Code Runner corretamente vamos em file\preferences\settings
na barra de busca procure por "terminal", localize a opção code-runner:run in terminal e marque a caixinha.

Para executar salve o arquivo e utilize o atalaho ctrl+alt+n

Para executar apenas um trecho de código do arquivo selecione o trecho de código
com o mouse e utilize o atalho ctrl+alt+n

Outra forma de executar o arquivo é digitar no terminal do VSCode - node e o nome do arquivo.

***/


/*** Saída de dados simples ***/

/** O método log() do objeto console existe essencialmente para permitir o envio de dados para o console de 
depuração do navegador. Pode ser enviada qualquer informação, normalmente com o intuito de
depurar código. */

console.log("Hello World");







/** Comentários **/

/* Um comentário é uma parte de código que é ignorada na execução. 
Pode ser utilizada, também, para colocar textos que ajudam a identificar o que está sendo feito 
naquele trecho de código. Pensando num trabalho em equipe, esta é uma excelente prática. 
*/

/* 

Para utilizar um comentário simples basta adicionar \\ ao lado do código.

Para utilizar comentário de várias linhas deve delimitar o código desejado com /* */


//este é um comentário de uma linha

/* 
este é um comentário
de várias linhas 
entendido?
*/




/** Outros tipos de output
 * 
 *  Como nós vamos usar o NodeJS no terminal do VSCode para executar nosso código
 *  iremos utilizar bastante o console.log.
 * 
 *  Mas existem outras formas de outputs no javascript de muita importância que são
 *  utilizados nos documentos HTML como os métodos write(), alert(), confirm() e prompt().
 * 
 *  Vamos exemplificar aqui a nível de informação.
*/


/** write() -  É um método do objeto document que escreve no documeto html as informações 
que são passadas através dele.
*/

document.write("Escrevendo no documento html.");

document.writeln("Escrevendo no documento html e quebrando a linha.");



/** alert() - É um método do objeto window que exibe uma caixa de diálogo no navegador */

window.alert("Isso é um alert");

//ou

alert("Isso é um alert simplificado");


/** confirm() - É um método do objeto window que exibe uma caixa de diálogo com duas opções "ok" e "cancelar"
que retornará true(verdadeiro) ou false(falso) respectivamente.

sintaxe:

confirm("Deseja continuar?");

*/

var confirmacao = confirm("Deseja continuar?")

if(confirmacao = true){
    alert("Continuando.");
}
else{
    alert("Cancelado.");
}



/** promp() - É um método do objeto window que exibe uma caixa de diálogo com um campo
para receber dados do usuário através do teclado atribuindo a uma variável para ser 
utilizada. 

sintaxe:

prompt("Digite seu nome: ");
**/

var nome = prompt("Digite seu nome: ");
alert(nome);