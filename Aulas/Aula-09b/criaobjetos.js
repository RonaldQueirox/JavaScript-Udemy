// Usando a notação Literal
const obj1 = {}
console.log(obj1)

// Object em JS
console.log(typeof Object, typeof new Object)
const obj2 = new Object
console.log(obj2)

// Funções Construtoras
function Produto(nome, preco, desc) {
    this.nome = nome
    this.getPrecoComDesconto = () => {
        return preco * (1 - desc)
    }
}

const P1 = new Produto('Blusa', 38, 0.15)
const P2 = new Produto('Sapato', 54, 0.18)
console.log(P1.getPrecoComDesconto(), P2.getPrecoComDesconto())

// Função Factory 
function Funcioario(nome, salario, faltas) {
    return {
        nome,
        salario,
        faltas,
        getSalario() {
            return (salario / 30) * (30 - faltas)
        }
    }
}
const F1 = Funcioario('Pedro', 2100, 2)
const F2 = Funcioario('Finn', 3900, 6)
console.log(F1.getSalario(), F2.getSalario())

// Object.create
const filha = Object.create(null)
filha.nome = 'Ana'
console.log(filha)

// Uma função famosa que retorna Objeto
const fromJSON = JSON.parse('{"info: Sou o JSON!"}')
console.log(fromJSON.info)