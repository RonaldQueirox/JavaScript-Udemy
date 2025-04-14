function Carro(vel = 200, del = 5) {
    // Atributo Privado

    let vel_atual = 0

    // Metodo Publico
    this.acelerar = function () {
        if (vel_atual + del <= vel) {
            vel_atual += del
        } else {
            vel_atual = vel
        }
    }

    // Metodo Publico
    this.getVelocidade_Atual = function () {
        return vel_atual
    }

}

const UNO = new Carro()
UNO.acelerar()
console.log(UNO.getVelocidade_Atual())

const FERRARI = new Carro(350, 30)
FERRARI.acelerar()
FERRARI.acelerar()
FERRARI.acelerar()
console.log(FERRARI.getVelocidade_Atual())

console.log(typeof(Carro))
console.log(typeof(UNO))