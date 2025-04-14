/* 
Variáveis são "recipientes" onde podemos armazenar informações que
podem variar, ou seja, podem ter qualquer tipo de valor.

No Javascript temos 3 palavras-chaves para declarar variáveis:
-> var
-> let
-> const
*/

var pote = "Bombom";
alert(pote);

// Declaração de variaveis
var a, b, C;

// Atribuição dos valores

a = 2;
b = 3;
c = b + a;
alert(c);

var nome, sobrenome, nome_completo, idade;
nome = "Maria";
sobrenome = "Almeida";
idade = 30;
nome_completo = nome + " " + sobrenome;
document.getElementById("texto").innerHTML = nome_completo + " " + idade;