function Lanches(codigo, quantidade) {
    let codes = codigo
    switch(codes) {
        case 100:
            console.log("[CACHORRO QUENTE]")
            let quant = quantidade * 3
            console.log(`O Total foi de ${quant},00R$`)
            break
        case 200:
            console.log("[HAMBÚRGUER SIMPLES]")
            let quant2 = quantidade * 4
            console.log(`O Total foi de ${quant2},00R$`)
            break
        case 300:
            console.log("[CHEESEBURGUER]")
            let quant3 = quantidade * 5.50
            console.log(`O Total foi de ${quant3},00R$`)
            break
        case 400:
            console.log("[BAURU]")
            let quant4 = quantidade * 7.50
            console.log(`O Total foi de ${quant4},00R$`)
            break
        case 500:
            console.log("[REFRIGERANTE]")
            let quant5 = quantidade * 3.50
            console.log(`O Total foi de ${quant5},00R$`)
            break
        case 600:
            console.log("[SUCO]")
            let quant6 = quantidade * 2.80
            quant6 = parseFloat(quant6.toFixed(2))
            console.log(`O Total foi de ${quant6}0R$`)
            break
        default:
            console.log("produto não existente.")
    }
}
Lanches(200, 4)