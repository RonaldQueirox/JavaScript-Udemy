const carrinho = [
    '{ "nome": "Borracha", "preco": 3.45 }',
    '{ "nome": "Caderno", "preco": 13.90 }',
    '{ "nome": "Kit de Lapis", "preco": 41.22 }',
    '{ "nome": "Caneta", "preco": 7.50 }',
]

const paraObjeto = json => JSON.parse(json)
let preco = x => x.preco
const resultado = carrinho.map(paraObjeto).map(preco)
console.log(resultado)