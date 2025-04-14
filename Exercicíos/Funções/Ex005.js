function Retorne(a, b) {
    let soma = a + b
    let decimal = soma.toFixed(2) + " R$"
    return decimal
}

console.log(Retorne(0.2, 0.6))