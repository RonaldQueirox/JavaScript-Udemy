// Arrays

let produtos = ['Arroz', 'Macarrão', 'Coco', 'Mucilon', 'Leite em pó'];
var codigos = Array(10, 20, 30);
let meses = ['Jan', 'Fev', 'Mar', 'Abr', 'Mai'];

// ADICIONAR no final push = empurre
produtos.push('Açúcar');
codigos.push(40, 50, 60, 70);
meses.push('Jun', 'Ago', 'Out', '07');

// REMOVER do final pop = estourar
produtos.pop();
codigos.pop();
meses.pop();

// ADICIONAR no inicio unshift
produtos.unshift('Uva', 'Maçã');

// REMOVER do inicio shift
produtos.shift();

// Remover de uma posição especifica splice
// Splice = emendar
// Posição inicial, quantos remover
codigos.splice(1, 3);

// COPIAR array slice = fatiar porção
// Posição inicial, quantos copiar
let meses1 = meses.slice();
let meses2 = meses.slice(0, 3);

// VER TAMANHO DO ARRAY lenght comprimento
meses.length();
meses1.length();
meses2.length();

// Spreed Operator ... copiar
let teste = [...produtos, 'Ovo', 'Pera']; // COPIA e ADICIONA ELEMENTOS

// Criando Exemplos
let cartoon_network = ['Hora de Aventura', 'Steve Universo', 'Clarêncio o Otimixta',
'Maçã Cebola', 'Ursos sem Curso'];
let Nickelodeon = ['The Loud House', 'Bob Esponja', 'Doug', 'Hey Arnold!', 'Jimmy Neutron',
'Invasor Zim', 'Padrinhos Magico'];
let disneyXD = ['Phineas e Ferb', 'Starco', 'Gravity Falls', 'Kick Buttowski', 'Galáxia Wander',
'Adolepeixes', 'Ducktales'];

let Pergunta_Canal = window.prompt("Diga Seu Canal Favorito: ")

// Verifica Canal
if (Pergunta_Canal === cartoon_network) {
    window.alert('Você escolheu o Cartoon Network Bom Gosto!!' );
}else if (Pergunta_Canal === Nickelodeon) {
    window.alert('Você escolheu Nickelodeon Bob Esponja é Bom Demais!!');
} 