function pedir() {
    let valor = prompt("Digite um Valor de 1 a 4");

    switch(Number(valor)) {
        case 1:
            alert("Voce escolheu 1 -> Suco");
            break;
        case 2:
            alert("Voce escolheu 2 -> Agua Gelada");
            break;
        case 3:
            alert("Voce escolheu 3 -> Sorvete");
            break;
        case 4:
            alert("Voce Chamou o Garçom! ");
            break;
        default:
            alert("Escolha uma opção entre 1 a 4");
            break;
    }

    let valor2 = prompt("Digite um Valor de 1 a 4")

    switch(valor2) {
        case "1":
            alert("Orochi");
            break;
        case "2":
            alert("Goularte");
            break;
        case "3":
            alert("Jean L");
            break;
        case 4:
            alert("Raluca");
            break;
        default:
            alert("Not Very Pika");
            break;
    }
    
}