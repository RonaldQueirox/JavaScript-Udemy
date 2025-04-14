// Funções

let titulo = document.querySelector('h1');
titulo.textContent = 'Funções no JS';
let box = document.querySelectorAll('box');

// Funções sem parametros e sem retorno (procedure)
function ola_mundo() {
    document.write('Olá Mundo sem retorno<br>');
}

// Funções sem parametros e com retorno (function)
function ola_mundo2() {
    return 'Olá Mundo com retorno<br>';
}

// CHAMAR A FUNÇÃO = executar ela
ola_mundo();
document.write(ola_mundo2());

let x = 2;
let y = 1;
let msg = 'One Piece é muito bom';

// Funções com parametros e sem retorno (procedure)
function somar_let(a, b) {
    document.write((a + b) +"<br>");
}

function somar(e, f, s) {
    e = Number(window.prompt("Digite um Número: "));
    f = Number(window.prompt("Digite outro Número: "));
    s = (e + f);
    document.write(`<p>A soma entre ${e} e ${f} é <strong>${s}</strong></p>`);

}

// Funções com parametros e com retorno (function)
function somar2(c, d) {
    return c + d;
}

// Chamar as funções
somar_let(x, y);
//somar();
somar_let(10, 5);

document.write(`<p>${somar2(x, y)}</p>`);
document.write(`<p>${somar2(5, 2)}</p>`);

/* Função anonima = não tem nome
pode ou não ter parametros
pode ou não ter retorno
*/
titulo.addEventListener('click', function() {
    console.log('Clicou no título');
});

// Arrow Functions ES6 2015 em diante
const ola_mundo_arrow = () => document.write
("Olá mundo!!!!!!!!");
const one_piece = () => document.write
("Eu vou ser o Rei Dos Piratas!!!!!!!!");

// Não precisa usar a palavra function
// Não precisa usar a palavra return
// Não se usa nome na função
// Não precisa colocar { } se for so uma instrução

const ola_mundo2_arrow = () => document.write
("<p>Olá mundo com arrow function</p>")

ola_mundo_arrow();
ola_mundo2_arrow();
one_piece();