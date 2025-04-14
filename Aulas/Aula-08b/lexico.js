const VALOR = 'Global'

function MyFunction() {
    console.log(VALOR)
}

function exec() {
    const VALOR = 'local'
    MyFunction()
}

exec()