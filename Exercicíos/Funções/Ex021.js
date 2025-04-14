function Idade(id) {
    let idade = id
    let preco
    switch(true) {
        case idade < 10:
            preco = 100 + 80
            console.log(`O Preço foi de ${preco}R$`)
            break
        case idade > 10 && idade <= 30:
            preco = 100 + 50
            console.log(`O Preço foi de ${preco}R$`)
            break            
        case idade > 30 && idade <= 60:
            preco = 100 + 95
            console.log(`O Preço foi de ${preco}R$`)
            break
        case idade > 60:
            preco = 100 + 130
            console.log(`O Preço foi de ${preco}R$`)
            break 
    }
}
Idade(61)