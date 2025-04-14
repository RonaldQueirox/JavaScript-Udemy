const FABRICANTES = ["Mercedes", "Audi", "BMW", "Mitsubishi"]
function Imprimir(nome, indice) {
    console.log(`${indice + 1}.${nome}`)
}

FABRICANTES.forEach(Imprimir)
FABRICANTES.forEach(function(fabricante) {
    console.log(fabricante)
})