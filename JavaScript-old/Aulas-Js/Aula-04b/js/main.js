// Variáveis

/*
- As variáveis armazenam valores;
- Estes valores podem ser utilizados posteriormente;
- No JavaScript é possivel criar variáveis de 3 formas;
- Podemos mudar o tipo da variável livremente (tipagem fraca)
*/

var teste = 1;
var nome = "João";
console.log(teste);
teste = 'matheus';
console.log(teste)
console.log(nome);
var $nome = 'ASD';
var _nome = 'ASD2';
console.log($nome);
console.log(_nome);
var nome5 = 'ASD3';
console.log(nome5);
var meuPrimeiroNome = 'Matheus';
console.log(meuPrimeiroNome); // CamelCase
var meusobrenome = "Toquarto";
console.log(meusobrenome);

/*
Variáveis de VAR podem ser atualizadas e declaradas novamente dentro de seu escopo. 
As variáveis de LET podem ser atualizadas, mas não podem ser declaradas novamente. 
As variáveis de CONST não podem ser atualizadas nem declaradas novamente.
*/

let testando = 1;
const ola = 2;
console.log(testando);
console.log(ola);

var meuNome; // esta como indefined
console.log(meuNome);
meuNome = "Matheus";
console.log(meuNome)