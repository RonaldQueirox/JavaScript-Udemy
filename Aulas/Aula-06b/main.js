function Pessoa() {
    this.idade = 0

    const SELF = this
    // No caso o self vai ter o valor de this instanciado no Pessoa, o SELF sempre vai apontar pro PESSOA
    
    setInterval(function() {
        SELF.idade++
        console.log(SELF.idade)
    }, 2000)
}

new Pessoa