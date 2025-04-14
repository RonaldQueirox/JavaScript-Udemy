var agora = new Date() // Pega o horário atual do sistema
var hora = agora.getHours() // Pega a hora atual
if (hora <= 12) {
    console.log(`São ${hora} horas da MANHÃ!, Bom dia !`)
} else if (hora >= 13 && hora < 18) {
    console.log(`São ${hora} horas da TARDE!, Boa Tarde !`)
} else {
    console.log(`São ${hora} horas da NOITE!, Boa Noite !`)
}