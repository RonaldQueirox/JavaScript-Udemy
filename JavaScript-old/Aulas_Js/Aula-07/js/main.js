// Dom -> HTML

/*
DOM = Document Object Model
Arvore com elementos desde o Browser, a
Janela do Browser, o Documento e cada
elemento html que foram os conteudos.

navigator
window
 location
 document -> html -> head e body
 history
*/

// PARA MANIPULAR O DOM PRECISAMOS
// indicar qual objeto usar, depois
// chamar um método(função) para
// selecionar ele, seus dados, trazer informações, etc.

// .querySelector()
// selecionar elemento com base na tag, #id ou .class
let titulo = document.querySelector('#titulo')
console.log(titulo)

// .textContent
// propriedade ou atributo textContent
// serve para acessar ou alterar conteudo
// de um elemento que foi selecionado
console.log(titulo.textContent);
console.log(titulo.innerHTML);

titulo.textContent = 'DOM'

// .querySelectorAll()
// selecionar todos elemento com base na tag, #id ou .class
let testando = document.querySelectorAll('.box');
console.log(testando);
document.write(testando[0].textContent);
document.write(testando[1].textContent);
document.write(testando[2].textContent);
//testando[0].textContent = 'texto qualquer';

// Existem também os métodos
// MAS, PREFIRA USAR O .querySelector()
/*
.getElementsByTagName()
.getElementById()
.getElementByClassName()
*/

let teste_tag = document.getElementsByTagName('div');
//console.log(teste_tag);
//document.write(teste_tag[0].textContent);
//document.write(teste_tag[1].textContent);

let teste_id = document.getElementById('titulo');
//console.log(teste_id);

let teste_class = document.getElementsByClassName('box');
//console.log(teste_class);
//document.write(teste_class[0].textContent);
//document.write(teste_class[1].textContent);