const APROVADOS = ['Laura', 'Ana', 'Raquel', 'Daniel']
APROVADOS.forEach(function(nome, indice) {
    console.log(`${indice + 1} - ${nome}`)
})

APROVADOS.forEach(nome => console.log(nome))

const Exibir_Aprovados = APROVADO => console.log(APROVADO)
APROVADOS.forEach(Exibir_Aprovados)