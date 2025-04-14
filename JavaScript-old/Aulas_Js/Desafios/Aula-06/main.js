// Desafio 001
let lutador = {
    nome: 'Fedor Vladimirovich Emelianeko',
    pais: 'Russo',
    idade: 44,
    peso: 106,
    altura: 1.83,
}
document.write(`<h2>Informações</h2>`);
document.write(`Lutador: ${lutador.nome} <br>`);
document.write(`Nacionalidade: ${lutador.pais} <br>`);
document.write(`Idade: ${lutador.idade}` + ` anos <br>`);
document.write(`Peso: ${lutador.peso}` + ` Kg <br>`);
document.write(`Altura: ${lutador.altura}` + `m <br>`);

// Desafio 002
const dia = 10;
const mes = 9;
const ano = 2021;
const frase = 'Seja curioso. Leia de tudo. Tente coisas novas. O que as pessoas chamam de inteligência se resume a curiosidade.';
const nome ='Aaron Swartz';

document.write(`<h2>Frase do Dia</h2>`);
document.write(`${dia}` + '/' + `${mes}` + '/' + `${ano}<br>`);
document.write(`${frase}`);
document.write(`${nome}`);

// Desafio 003

document.write(`<h2>Array de Meses do Ano</h2>`);
const meses = [
    'Janeiro',
    ' Fevereiro',
    ' Março',
    ' Abril',
    ' Maio',
    ' Junho',
    ' Julho',
    ' Agosto',
    ' Setembro',
    ' Outubro',
    ' Novembro',
    ' Dezembro'
];
document.write(`${meses}`);

// Desafio 004
document.write(`<h2>Objeto Jogo</h2>`);
let game = {
    jogo: 'League Of - LOL',
    empresa: 'Riot Games',
    ano: 2009,
}

document.write(`Jogo: ` + `${game.jogo} <br>`);
document.write(`Desenvolvido por: ` + `${game.empresa} <br>`);
document.write(`Ano do Lançamento: ` + `${game.ano} <br>`);