let carro = "sedans"
switch(carro) {
    case "hatch":
        console.log("Compra Efetuada com sucesso")
        break
    case "sedans":
    case "motocicletas":
    case "caminhotes":
        console.log("Tem certeza que prefere este modelo?")
        break
    default:
        console.log("Não trabalhamos com este tipo de automóvel aqui")
        break
}