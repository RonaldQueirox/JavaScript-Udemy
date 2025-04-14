numeros = [1, 3, 4, 12, 11, 9, 7]
let pares = 0; let impares = 0
for (numero in numeros) {
    if (numero % 2 == 0) {
        pares++
        return pares
    } else if (numero % 2 == 1) {
        impares++
        return impares
    }
}
console.log(pares, impares)