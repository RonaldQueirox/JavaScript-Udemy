// Dclaração de Função
function soma(x, y) {
    return x + y
}

// Function Expression

const SUB = function(x, y) {
    return x - y
}

// Function Expression Named

const MULT = function MULT(x, y) {
    return x * y
}

const DIV = () => (x,y) => { return x / y}
let divi = DIV() 
console.log(divi(6, 2))