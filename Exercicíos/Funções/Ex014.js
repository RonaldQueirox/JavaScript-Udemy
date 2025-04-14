// Fazer um Input no Node Js
function Fruta() {
    let input = process.stdout.write("Digite seu Nome: ")
    input()

    process.stdin.on("data", data => {
    let nome = data.toString().trim() // Armazena o Input
    console.log("Olá " + nome + "!")
    process.exit()
})
}
Fruta()