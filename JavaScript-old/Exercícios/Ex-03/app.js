const frase = 'One piece é Pika';

const revesão = function invertido() {
    return frase.split('').reduce((x, y) => y + x);
}

console.log(revesão)

