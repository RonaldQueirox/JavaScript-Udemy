// Matrizes

const lista = [
    "arroz", // 0
    "feijão", // 1
    "macarrão", // 2
    "leite" // 3
]; 
lista[0] = "Café" // ignorando a constante

// Matriz adicionando variáveis
const itens = [];
itens[0] = "arroz";
itens[1] = "feijão";
itens[2] = "macarrão";
itens[3] = "leite";

// Outra forma

const listagem = new Array("arroz", "feijão", "macarrão", "leite");

const lista1 = ["Arroz", "feijão", "leite", "macarrão"];
const lista2 = ["Suco", "refrigerante", "carne"];
const lista3 = ["salgadinho"];
const super_lista = lista1.concat(lista2, lista3);
document.getElementById("text").innerHTML = super_lista;

const jogadores = [
    "Biro Biro",
    "Ribamar",
    "Pelé",
    "Maradona",
    "Neymar",
    "Cristiano Ronaldo",
    "Vampeta",
    "Dimitri"
]; // Array
const jog_ordem = jogadores.sort();
document.getElementById("text2").innerHTML = jog_ordem;

// Funções
const numeros = [40, 100, 1, 5, 25, 10];

function maior_numero(array) {
    return Math.max.apply(null, array);
}

function menor_numero(array) {
    return Math.min.apply(null, array);
}
document.getElementById("text3").innerHTML = menor_numero(numeros);