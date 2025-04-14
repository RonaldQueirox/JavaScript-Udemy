// setInterval

 function acao() {
    document.write("Executando... <br>")
}

let timer = setInterval(() => {
    document.write("Executando!!!! <br>")
}, 2000)


let timeout = setTimeout(() => {
    document.write("Executando TIMEOUT !!!! <br")
}, 4000)