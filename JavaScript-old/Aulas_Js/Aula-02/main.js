// Variáveis
let mensagem = "Minha mensagem";
let msg = "outro mensagem";
let meu_peso = window.prompt('Qual é seu peso? '); // Input de dados
let minha_altura = window.prompt("Digite sua Altura: ");


let imc = (meu_peso / (minha_altura * minha_altura));
let peso = imc;
if (peso >= 18.5 && peso <= 24.9) {
    window.alert('Peso Ideal');
} else if (peso >= 25 && peso <= 29.9) {
    window.alert('Você está Sobrepeso');
} else if (peso >= 30 && peso <= 39.9) {
    window.alert('Você está Obeso');
} else {
    window.alert('Peso invalido');
}

let minha_idade = window.prompt("Sua idade:");

if (minha_idade > 13 && minha_idade < 18) {
    window.alert("Adolescente");
} else if (minha_idade >= 18 && minha_idade < 25) {
    window.alert("Jovem Adulto");
} else if (minha_idade >= 25 && minha_idade < 50) {
    window.alert("Adulto!");
} else if (minha_idade >= 50 && minha_idade < 73) {
    window.alert("Idoso!");
} else if (minha_idade >= 73 && minha_idade < 100) {
    window.alert("Seu Cordeiro!");
} else {
    window.alert("Idade inválida ou fora do intervalo suportado.");
}

// CRIAR CONSTANTES e atribuir valor
const PI = 3.1415; // é imutavel 
const TAXA = 0.5;

// ESCREVER O CONTEUDO DE VARIAVEIS e CONSTANTES
document.write("<p> Mensagem " + mensagem + "</p>");
document.write(`Mensagem2: ${msg}`);
document.write("<p>Peso: " + meu_peso + "Kg </p>");
document.write(`Altura: ${minha_altura} m`);
document.write("<p> Idade " + minha_idade + " anos</p>");
document.write(`Valor de Pi: ${PI}`);
document.write("<p>TAXA " + TAXA + "</p>");