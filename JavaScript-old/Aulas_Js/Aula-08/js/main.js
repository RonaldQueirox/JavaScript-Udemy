// Dom -> CSS

let titulo = document.querySelector('h1');
titulo.textContent = 'Aula 09 Manipular CSS';
titulo.innerHTML = 'Aula Manipular CSS';
let imagem = document.querySelector('#foto');
imagem.setAttribute('src', 'img/pride-fc.jpg');
imagem.setAttribute('width', '250px');

//document.querySelector('h1').style.color = "red";
titulo.style.color = "red";
titulo.style.backgroundColor = "#000";
titulo.style.borderBottom = "2px solid red";
titulo.style.padding = "0.625rem";
titulo.style.borderRadius = "5px";

let box = document.querySelectorAll('.box');
box[0].setAttribute('class', 'escura'); // Selecionar atributo
box[0].removeAttribute('class'); // Remove Atributo

//////// MODOS DE COR /////////
let tela = document.querySelector('main');

let btnDark = document.querySelector('#btdark');
let btnLight = document.querySelector('#btlight');
btnDark.addEventListener('click', modoDark); // Adiciona Escutador de Evento
btnLight.addEventListener('click', modoLight);

// Funções - Escuro e Claro

function modoDark() {
    console.log('modo dark');
    tela.classList.add("dark");
    tela.classList.remove("light");
}

function modoLight() {
    console.log('modo light');
    tela.classList.add("light");
    tela.classList.remove("dark");
}