const notas = [7.3, 7.9, 8.4, 9.5, 5.8, 4.8, 3.8]

// SEM callback 
const notas_baixas = [] 
for (let i in notas) {
    if (notas[i] < 7) {
        notas_baixas.push(notas[i])
    }
}

console.log(notas_baixas)

// Com callback 
const notas_baixas1 = notas.filter(function (nota) {
    return nota < 7
}) 

console.log(notas_baixas1)

const Notas_menor7 = nota => nota < 7
const notas_baixas2 = notas.filter(Notas_menor7)
console.log(notas_baixas2)
