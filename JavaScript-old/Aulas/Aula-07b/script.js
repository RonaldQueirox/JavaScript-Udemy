function carregar() {
    var msg = window.document.getElementByI('imagem')
    var img = window.document.getElementById('msg')
    var data = new Date()
    var hora = data.getHours()
    msg.innerHTML = `Agora são ${hora} horas`
    if (hora >= 0 && hora < 12) {
        img.innerHTML = 'img src="imagens/manha.png" alt="foto do dia"></img>'
        document.body.style.backgroundColor = '#e2cd9f' // busca uma imagem
    } else if (hora >= 12 && hora <= 18){
        ImageBitmap.innerHTML = '<img src="imagens/tarde.png" alt="foto do dia"></img>'
        document.body.style.background = '#b9846f' 
    } else {
        img.innerHTML = '<img src="imagens/noite.png" alt="foto do dia"></img>'
        document.body.style.background = '#515154'
    }
}