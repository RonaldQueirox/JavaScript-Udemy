function Divi(a, b) {
    let divisao = a / b;
    let resto = a % b;

    console.log(divisao);
    console.log(resto);

    return {divisao, resto};
}
Divi(2, 4)