function Salario(plano, salario) {
    let planos = plano
    switch(planos) {
        case "A":
        case "a":
            let novo_salA = salario + (salario * 0.10)
            return novo_salA
        case "B":
        case "b":
            let novo_salB = salario + (salario * 0.15)
            return novo_salB
        case "C":
        case "c":
            let novo_salC = salario + (salario * 0.20)
            return novo_salC
        default:
            console.log("Número fora do intervalo.")
    }
}
console.log(Salario("b", 1800))