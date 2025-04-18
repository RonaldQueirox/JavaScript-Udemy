Array.prototype.map2 = function(callback) {
    novoArray = []

    for (let x = 0; x < this.length; x++) {
        novoArray.push(callback(this[x], x, this))
    }
    return novoArray
}

const carrinho = [
    '{ "nome": "Borracha", "preco": 3.45 }',
    '{ "nome": "Caderno", "preco": 13.90 }',
    '{ "nome": "Kit de Lapis", "preco": 41.22 }',
    '{ "nome": "Caneta", "preco": 7.50 }',
]

const paraObjeto = json => JSON.parse(json)
let preco = x => x.preco
const resultado = carrinho.map2(paraObjeto).map2(preco)
console.log(resultado)