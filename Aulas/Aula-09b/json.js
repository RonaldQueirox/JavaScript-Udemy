function Pessoa(nome, idade, matricula, id_cad) {
    this.nome = nome;
    this.idade = idade;
    this.matricula = matricula;
    this.id_cad = id_cad;
  }
  
  let pessoa1 = new Pessoa('Maria', 15, 2442, 12);
  console.log(pessoa1);
  console.log(JSON.stringify(pessoa1))

  let pessoa2 = new Pessoa('José', 14, 32, 94)
  console.log(pessoa2)
  console.log(JSON.stringify(pessoa2))