
class Pessoa {
    constructor(nome, cargo, id) {
        this.nome = nome
        this.cargo = cargo 
        this.id = id
    }
}

class Funcionario extends Pessoa {
    constructor(nome, cargo, id) {
      super(nome, cargo, id); // chama o construtor da classe Pessoa
    }
     Cargo() {
        console.log(`--> ${this.nome} está trabalhando como ${this.cargo} ID: ${this.id}`)
    }
  }
  

const FUNCIONARIO = new Funcionario('Carlos', 'Programador', 'M01')
const FUNCIONARIO2 = new Funcionario('Marcelo', 'Analista de Dados', 'M02')

console.log(FUNCIONARIO)
FUNCIONARIO.Cargo()
console.log(FUNCIONARIO2)
FUNCIONARIO2.Cargo()