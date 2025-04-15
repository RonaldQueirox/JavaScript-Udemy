const PILOTOS = ['Vettel', 'Alonso', 'Vestappen', 'Massa', 'Sena']
PILOTOS.pop()
console.log(PILOTOS)

PILOTOS.push('Fittipaldi')
console.log(PILOTOS)

PILOTOS.shift() // Remove o primeiro
console.log(PILOTOS)

PILOTOS.unshift('Hamilton')
console.log(PILOTOS)

// SPLICE 

// Adicionar 
PILOTOS.splice(2, 0, 'Bottas', 'Massa')
console.log(PILOTOS)

const PILOTOS2 = PILOTOS.slice(2) // novo array
console.log(PILOTOS2)

const PILOTOS3 = PILOTOS.slice(1, 4)
console.log(PILOTOS3)