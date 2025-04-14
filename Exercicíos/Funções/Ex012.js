function Fatorial(x) {
    let resultado = 1
    for (let i = x; i > 1; i--) {
        resultado *= i
    }
    return resultado
}
console.log(Fatorial(4))