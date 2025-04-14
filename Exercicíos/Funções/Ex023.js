function Notas(nota1, nota2, nota3) {
    let ponderada = ((nota1 * 3) + (nota2 * 3) + (nota3 * 4)) / (3 + 3 + 4)
    if (ponderada >= 5) {
        console.log("APROVADO")
    } else if(ponderada < 5) {
        console.log("REPROVADO")
    } else {
        console.log("MEDIA INVÁLIDA")
    }
}
Notas(8.3, 4, 2)

