const FS = require('fs')
// File System

const caminho = __dirname + '/arquivo.json'
// Sincrono....
const conteudo = FS.readFileSync(caminho, 'utf-8')
console.log(conteudo)

// Assincrono
FS.readFile(caminho, 'utf-8', (err, conteudo) => {
    const config = JSON.parse(conteudo)
    console.log(`${config.db.host}:${config.db.port}`)
})