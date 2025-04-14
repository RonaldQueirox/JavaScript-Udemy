let Num1 = Number(window.prompt("Digite um número: "));
let Num2 = Number(window.prompt("Digite outro número: "));
function Somar(a, b) {
    return a + b
}

let soma = Somar(Num1, Num2);
document.write(`A Soma entre ${Num1} e ${Num2} é ${soma}`);