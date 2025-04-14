// Coleção dinâmica de pares chave/valor
const produto = new Object
produto.nome = 'Cadeira'
produto['Marca do Produto'] = 'Generica'
produto.preco = 220
console.log(produto)
delete produto.preco
delete['Marca do Produto']
console.log(produto)

const CARRO = {
    modelo: 'A4',
    valor: 89000,
    proprietario: {
        nome: 'Raul',
        idade: 56,
        endereco: {
            logradouro: 'Rua ABC',
            numero: 123
        }
    },
    // Pode ter Arrays dentro de um objeto
    condutores: [{
        nome: 'Junior',
        idade: 19
    }, {
        nome: 'Ana',
        idade: 42
    }
  ],
  calcularValorSeguro: function() {
    // .....
  }
}
CARRO.proprietario.endereco.numero = 1000
console.log(CARRO)