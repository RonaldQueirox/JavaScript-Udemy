let peso;
let altura;
let imc;
let resultado;
let tela;


function calcular(event) {
    event.preventDefault() // Usado pra anular o refresh do form

    peso = document.getElementById('peso').value; // Vai Puxar o valor que esta dentro do id Peso
    altura = document.getElementById('altura').value;

    imc = peso / (altura * altura)
    resultado = imc

    if (resultado >= 25 && resultado <= 29.9) {

        tela = document.getElementById('resultado')
        tela.innerHTML = "<br> Seu IMC Foi: " + resultado.toFixed(2) + " <br> Acima do Peso"

    } else if (resultado >= 18.5 && resultado <= 24.9) {

        tela = document.getElementById('resultado')
        tela.innerHTML = "<br> Seu IMC Foi: " + resultado.toFixed(2) + " <br> Dentro do Normal"

    } else if (resultado >= 17 && resultado <= 18.5) {

        tela = document.getElementById('resultado')
        tela.innerHTML = "<br> Seu IMC Foi: " + resultado.toFixed(2) + " <br> Abaixo do Peso"

    } else if (resultado < 17) {

        tela = document.getElementById('resultado')
        tela.innerHTML = "<br> Seu IMC Foi: " + resultado.toFixed(2) + " <br> Muito Abaixo Do Peso"
    
    } else {
        alert("Erro! Peso Invalido")
    }
    document.getElementById("peso").value = '';
    document.getElementById("altura").value = '';

}