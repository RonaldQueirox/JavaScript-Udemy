const port = 3003
const data_base = require('./db')
const express = require('express')
const bodyParser = require('body-parser')
const app = express()

app.use(bodyParser.urlencoded({ extended: true }))

app.get('/produtos', (req, res, next) => {
    res.send(data_base.getProdutos()) // coverter pra JSON
})

app.get('/produtos/:id', (req, res, next) => {
    res.send(data_base.getProduto(req.params.id))
})

app.post('/produtos', (req, res, next) => {
    const produto = data_base.salvarProdutos({
        nome: req.body.nome,
        preco: req.body.preco
    })
    res.send(produto) // Json
})

app.listen(port, () => {
    console.log(`Servidor está executando na porta ${port}.`)
})