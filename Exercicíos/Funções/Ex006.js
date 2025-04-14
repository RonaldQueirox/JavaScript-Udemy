// Função 1

function Montante(capital, juros, tempo) {
    // Juros Simples

    let juros_simples = (capital * juros * tempo) / 100
    console.log(juros_simples)
    let montante_simples = capital + juros_simples
    console.log("Com Juros Simples: ", montante_simples)

    // Juros Compostos
    function Composto() {
        let montante_composto = capital * Math.pow((1 + juros / 100), tempo);
        montante_composto = parseFloat(montante_composto.toFixed(2))
        console.log("Montante com Juros Compostos:", montante_composto);
        return montante_composto
    }
    let montante_composto = Composto()
    return {
        montante_simples, montante_composto
    }
}
console.log(Montante(150, 5, 6))