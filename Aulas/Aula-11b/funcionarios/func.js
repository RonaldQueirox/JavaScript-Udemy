const url = 'http://files.cod3r.com.br/curso-js/funcionarios.json'
const axios = require('axios')

const pais = p => p.pais == "China"
const genero = g => g.genero == "F"
const menorSalario = (func, funcAtual) => {
    return func.salario < funcAtual.salario ? func : funcAtual
}

axios.get(url).then(response => {
    const funcionarios = response.data
    
    const func = funcionarios
        .filter(pais)
        .filter(genero)
        .reduce(menorSalario)
    console.log(func)
})


