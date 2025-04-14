function Delta(ax2, bx, c) {
    let Delta = (bx ** 2) - (4 * ax2 * c)
    if (Delta < 0) {
        console.log("Delta NEGATIVO")
    } else if (Delta == 0) {
        console.log("RAIZES IGUAIS")
        let x = - bx + Math.sqrt(Delta) / (2 * ax2)
        return [parseFloat(x.toFixed(2)), parseFloat(x.toFixed(2))];
    } else if (Delta > 0) {
        console.log("Raizes Diferentes")
        let x = (- bx + Math.sqrt(Delta)) / (2 * ax2)
        let y = (- bx - Math.sqrt(Delta)) / (2 * ax2)
        return [parseFloat(x.toFixed(2)), parseFloat(y.toFixed(2))];

    } else {
        console.log("ERRO!! Delta Inválido")
    }
}
console.log(Delta(1, -3, 2))