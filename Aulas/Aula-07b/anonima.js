const SOMA = function (x, y) {
    return x + y
}

const RESULTADO = function (a, b, operation = SOMA) {
    console.log(operation(a, b))
}

RESULTADO(3, 4, (x, y) => x * y)

const PESSOA = {
    falar: function() {
        console.log('Opa!')
    }
}