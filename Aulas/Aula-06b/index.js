let dobro = function(a) {
    return 2 * a
}

dobro = (a) => {
    return 2 * a
}

dobro = a => 2 * a // Return Implicito

console.log(dobro(4))

let ola = function() {
    return 'Olá'
}

ola = () => 'Olá' // Quando ele não tem parametro
console.log(ola())