function Pessoa() {
    this.idade = 0
    const SELF = this
    
    setInterval(() => {
        SELF.idade++
        console.log(SELF.idade)
    }, 5000)
}

new Pessoa