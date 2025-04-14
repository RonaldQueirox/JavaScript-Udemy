function Get_Preco(imp = 0, moeda = 'R$') {
    return `${moeda} ${this.preco * (1 - this.desc) * (1 + imp)}` 
}

const Produto = {
    nome: 'Notebook',
    preco: 4503,
    desc: 0.15,
    Get_Preco
}

