// If e Else

let interruptor = "on";
if (interruptor == "on") {
   // alert('Ligada')
} else {
   // alert('Desligada')
}

let hora = new Date().getHours();
if (hora <= 12) {
    alert('Bom dia');
} else if (hora > 12 && hora < 18) {
    //alert('Boa tarde');
} else {
    alert('Boa noite');
}

// Função de verificar nome em branco
function verifica_nome() {
    let nome_verifica = document.getElementById("nome").value;
    if (nome_verifica == "" || nome_verifica == null ) {
        let nem = document.getElementById("text");
        nem.innerHTML = "O campo não pode ser vazio";
        nem.style.color = "red";
    } else {
        let nem = document.getElementById("text");
        nem.innerHTML = "Parabéns tudo certinho";
        nem.style.color = "green";
    }
}