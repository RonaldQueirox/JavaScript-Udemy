function CalcularNotas(valor) {
    if (isNaN(valor) || valor <= 0) {
        return "Por favor, insira um valor válido.";
    }

    const notas = [100, 50, 10, 5, 1];
    const resultado = [];

    for (let nota of notas) { // Usando for...of para acessar os valores
        let quantidade = Math.floor(valor / nota);
        if (quantidade > 0) {
            resultado.push(`${quantidade} nota(s) de R$ ${nota}`);
            valor %= nota;
        }
    }
    return resultado.join("\n");
}

console.log(CalcularNotas(150));