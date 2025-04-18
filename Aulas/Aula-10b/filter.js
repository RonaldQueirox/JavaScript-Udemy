const produtos = [
    {nome: 'Notebook', preco: 2499, fragil: true},
    {nome: 'Ipad Pro', preco: 4199, fragil: true},
    {nome: 'Copo de Vidro', preco: 12.49, fragil: true},
    {nome: 'Copo de Plástico', preco: 18.99, fragil: false}
]
const fragil = f => f.fragil 
const caro = c => c.preco >= 500
console.log(produtos.filter(function(p) {
    return true
}))

console.log(produtos.filter(caro).filter(fragil))