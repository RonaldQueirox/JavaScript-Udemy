// Condicionais e de Escolha

let sit1 = document.querySelector('#sit1');
let sit2 = document.querySelector('#sit2');
let sit3 = document.querySelector('#sit3');
let escolha = document.querySelector('#escolha');

let nota_final1 = Number(window.prompt("Digite Nota [1]: "));
let nota_final2 = Number(window.prompt("Digite Nota [2]: "));
let nota_final3 = Number(window.prompt("Digite Nota [3]: "));

// CONDICIONAIS

// IF ELSE
if (nota_final1 >= 7) {
    sit2.textContent = 'Aprovado(a)'
} else {
    sit2.textContent = 'Reprovado(a)'
}

// IF TERNARIO
nota_final3 >= 7 ? sit2.textContent = 'Passou' :
sit2.textContent = 'Ficou'

// IF ENCADEADO OU ANINHADO
if(nota_final3 >= 7) {
    sit3.textContent = 'Aprovado';
} else if (nota_final3 <= 3) {
    sit1.textContent = 'Reprovado';
} else {
    sit1.textContent = 'Recuperação';
}

//let situação = '';
let situação = 'Aprovado';
//let situação = 'Reprovado';
//let situação = 'Recuperação';

switch(situação) {

    case 'Aprovado':
        escolha.textContent = 'Passou de ano';
        break
    case 'Reprovado':
        escolha.textContent = 'Não passou de ano';
        break
    case 'Recuperação':
        escolha.textContent = 'Ainda tem uma chance';
    default:
        escolha.textContent = 'Estude';
    // default não precisa de break
}