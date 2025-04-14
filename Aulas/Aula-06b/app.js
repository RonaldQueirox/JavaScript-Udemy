const pessoa = {
    saudacao: "Bom Dia!",
    falar() {
        console.log(this.saudacao)
    }
}

const falar = pessoa.falar
falar()


pessoa.falar()
const FALA_PESSOA = pessoa.falar.bind(pessoa)
FALA_PESSOA()