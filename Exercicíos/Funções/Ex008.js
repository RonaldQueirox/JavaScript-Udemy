let pontuacao = ["10" ,"20", "20", "8", "25", "3", "0", "30", "1", ]
pontuacao = pontuacao.map(Number)

function ContarRecordes(lista) {
    let RecordesQuebrados = 0
    let MaiorPontuacao = lista[0]

    for (let i = 1; i < lista.length; i++) {
        if (lista[i] > MaiorPontuacao) {
            MaiorPontuacao = lista[i];
            RecordesQuebrados++
        }
    }
    return RecordesQuebrados;
}

console.log(pontuacao)
console.log("Recordes Quebrados:", ContarRecordes(pontuacao));