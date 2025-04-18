
const Blue_Lock = require('../lib-moduleA/folderB/index.js')
const moduloA = require('../moduleA')
console.log(moduloA.ola)
console.log(Blue_Lock.vlw)

const http = require('http')
http.createServer((req, res) => {
    res.write('Bom dia! Blue Lock krl')
    res.end()
}).listen(8080)