// Estruturas de Repetição

let carros = ['Fusca', 'Brasília', 'Gurgel'];

// FOR = para faça
// I = iterador, interação ou index
for (let i = 0; i < 5; i++) {
    document.write(i + " ");
}

for (let i = 5; i >= 5; i--) {
    document.write(i + " ");
}

document.write(`<hr>`)
for (let i = 0; i < carros.length; i++) {
    document.write(`<li>${carros[i]}</li>`);
}

let animes = [
    'Bleach', 
    'One Piece', 
    'Dr.Stone', 
    'Vanitas no Carte'
];

animes.push(
    'Boku no Hero', 
    'Bungou Stray Dogs', 
    'Fullmetal Alchemist');

document.write(`<hr>`)
for (let i = 0; i < animes.length; i++) {
    document.write(`<li>${animes[i]}</li>`);
}

let games = [
    'Stardew Valley',
    'Dead Cells',
    'Super Meat Boy',
    'Minecraft',
    'Terraria',
    'HarvestMonn',
];

games.push(
    'Dont Starve',
    'Bloons TD6',
    'Super Mombo Quest',
    'God of War',
    'Fallout 4'
);

document.write(`<hr>`);
for (let i = 0; i < games.length; i++) {
    document.write(`<li>${games[i]}</li>`);
}

// FOREACH forEach = para cada
let frutas = ['Pera', 'Uva', 'Maçã', 'Banana', 'Melancia'];
document.write(`<hr>`)

frutas.forEach(function(fruta, i) {
    document.write(`${i} ${fruta} <br>`);
});

document.write(`<hr>`)
carros.push(
    'Chevete',
    'Corsa',
    'Fiat')
carros.forEach(function(carro) {
    document.write(`${carro} <br>`)
})

// WHILE enquanto

// Criar variavel de contador fora do laço
let contador = 0;

while(contador < frutas.length) {
    console.log(frutas[contador]);
    contador ++ // Contador + 1
}

// Aqui o contador esta com o valor 5

// DO WHILE faça enquanto

// Criar variavel de contador fora do laço
let iterador = 0

do {
    console.log(carros[iterador]);
    iterador++ // contador + 1
} while (iterador < carros.length)

// Aqui o iterador esta com o valor 3
console.log(iterador);