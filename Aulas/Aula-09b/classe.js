class Avo {
    constructor(sobrenome) {
        this.sobrenome = sobrenome
    }
}

class Pai extends Avo {
    constructor(sobrenome, profissao = 'Professor') {
        super(sobrenome)
        this.profissao = profissao
    }
}

const PAI = new Pai
console.log(PAI)

class Filho extends Pai {
    constructor() {
        super('Silva')
    }
}
const FILHO = new Filho
console.log(FILHO)