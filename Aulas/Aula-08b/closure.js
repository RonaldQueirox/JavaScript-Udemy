// Closure é o escopo criado quando uma função é declarada

// Este escopo permite a função acessar e manipular variáviaveis externas à função

// CONTEXTO LÉXICO EM AÇÃO !

const X = 'Global'

function Fora() {
    const X = 'Local'
    function Dentro() {
        return X
    }
    return Dentro
}

const Minha_Funcao = Fora()
console.log(Minha_Funcao())