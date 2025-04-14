const PRODUTO1 = {
    nome: 'Mouse',
    preco: 38
}

// Factory Simples
function Criar_Pessoa() {
    return {
        nome: 'Ana',
        sobreome: 'Silva'
    }
}

console.log(Criar_Pessoa())

function Produto(a = String, b = Number) {
    const DESCONTO = b - (b * 0.05);  

    console.log(
    `
    \x1b[32m

    [${a}]
    [Preço => ${b}] 
    [DESCONTO => ${DESCONTO}]
    \x1b[0m
    `);

    return { 
        nome: a, 
        preco: b 
    };
}

Produto('Ipad', 82)