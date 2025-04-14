// Eventos

function carregou() {
    console.log('Página carregada com sucesso!');
}

function focou() {
    console.log('Foco no titulo');
}

function rolou_pagina() {
    console.log('pagina rolando');
}

function foco_no_campo() {
    console.log("Foco no campo de texto");
}

function sem_foco_no_campo() {
    console.log("Saiu o Foco do campo de texto");
}

let letras = document.querySelector('input[type=text]');

function avisar_que_teclou() {
    let num_letras = letras.value.length;
    console.log('Está teclando ' + num_letras + ' letras.');
}

let botão1 = document.querySelector('#btn1');
let botão2 = document.querySelector('#btn2');
let botão_enviar = document.querySelector('#btn3');

// MOUSEOVER a seta do mouse esta no elemento
botão1.addEventListener('mouseover',
function () {
    console.log('Foco no botão 1');
});

// FOCUSOUT ou blur quando sai o focus
botão2.addEventListener('blur', function () {
    console.log('Foco no botão 2');
});

// 1 click do mouse
botão_enviar = addEventListener('click',
function (event) {
    event.preventDefault();
    console.log('Clicou no botão Enviar');
});