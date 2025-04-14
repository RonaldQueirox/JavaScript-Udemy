function Pessoa(nome) {
    this.nome = nome; // Atributo acessível no objeto criado
    this.falar = function() {
        console.log(`Meu Nome é ${this.nome}`);
    };
}

const pessoa1 = new Pessoa("Gabriel");
const pessoa2 = new Pessoa("Ana");

pessoa1.falar(); 
pessoa2.falar();
