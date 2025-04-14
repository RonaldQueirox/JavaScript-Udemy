function Anuidade(mes, valor) {
    let meses = mes
    let juros
    switch(meses) {
        case 1:
            return valor + "R$"
        case 2:
            juros = valor * (1 + 0.05) ** (mes - 1);
            return juros.toFixed(2) + "R$"
        case 3:
            juros = valor * (1 + 0.05) ** (mes - 1);
            return juros.toFixed(2) + "R$"
        case 4:
            juros = valor * (1 + 0.05) ** (mes - 1);
            return juros.toFixed(2) + "R$"
        case 5:
            juros = valor * (1 + 0.05) ** (mes - 1);
            return juros.toFixed(2) + "R$"
        case 6:
            return valor
        case 7:
            juros = valor * (1 + 0.05) ** (mes - 1);
            return juros.toFixed(2) + "R$"
        case 8:
            juros = valor * (1 + 0.05) ** (mes - 1);
            return juros.toFixed(2) + "R$"
        case 9:
            juros = valor * (1 + 0.05) ** (mes - 1);
            return juros.toFixed(2) + "R$"
        case 10:
            juros = valor * (1 + 0.05) ** (mes - 1);
            return juros.toFixed(2) + "R$"
        case 11:
            juros = valor * (1 + 0.05) ** (mes - 1);
            return juros.toFixed(2) + "R$"
        case 12:
            juros = valor * (1 + 0.05) ** (mes - 1);
            return juros.toFixed(2) + "R$"
    }
}
console.log(Anuidade(11, 1800))