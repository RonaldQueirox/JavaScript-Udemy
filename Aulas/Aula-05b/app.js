// Parametro Padrão

function soma(a, b, c) {
    a = a || 1
    b = b || 1
    c = c || 1
    return a + b + c 
}

console.log(soma(), soma(3), soma(2, 4, 5), soma(0, 0, 0))

// Gera valor padrão

function soma2(a, b, c) {
    a = a !== undefined ? a : 1
    b = 1 in arguments ? b : 1
    c = isNaN(c) ? 1 : c
    return a + b + c
}

console.log(soma2(), soma2(3), soma2(2, 4, 6), soma2(0, 0, 0))

// Valor padrão do Es2015
function soma3(a = 1, b = 1, c = 1) {
    return a + b + c
}

// -> Terceira Forma é mais correta, seguindo o padrão Es2015

console.log(soma3(), soma3(3), soma3(1, 5, 8), soma3(0, 0, 0))
