class Pessoa {
    constructor(nome) {
        this.nome = nome
    }

    falar() {
        console.log(`Meu nome é ${this.nome}`)
    }
}

const P1 = new Pessoa('João')
P1.falar()

const CRIARPESSOA = nome => {
    return {
        falar: () => console.log(`Meu nome é ${nome}`) 
    }
}

const P2 = CRIARPESSOA('Pedro')
P2.falar()