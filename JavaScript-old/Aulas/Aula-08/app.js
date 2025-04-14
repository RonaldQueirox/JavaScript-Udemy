// Soma
function soma(valor1, valor2) {
    return valor1 + valor2;
}
document.getElementById("texto").innerHTML = soma(10,10);

// Media
function media(val3, val4) {
    return val3 / val4;
}
document.getElementById("text2").innerHTML = media(25,5);

// Multiplicação
function multi(val5, val6) {
    return val5 * val6;
}
document.getElementById("text3").innerHTML = multi(5,5);

// Cotação Dolar pra Real
function real_dolar(real, cotdolar) {
    return real * cotdolar;
}
let valor_real = 7.89;
let cotacao = 5.21;
let tot = real_dolar(valor_real, cotacao);
alert("o valor em real é R$: "+valor_real+" o valor em dólar U$ é: "+tot);

// Comprimentos
function hello_world() {
    alert("Olá Mundo !! [FUNÇÃO]");
}
function hi_man() {
    alert("Bem Vindo ao meu Site [FUNÇÃO]")
}

// de Fahrenheit pra Celcius

function para_celsius(valorFahrenheit) {
    return (5/9) * (valorFahrenheit - 32);
}

let cec = para_celsius(77);
alert(cec + "° Celcius")