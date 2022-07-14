const porta = 3003
const bodyParser = require('body-parser')

const express = require('express')
const app = express()
const bancoDeDados = require('./bancoDeDados')

app.use(bodyParser.urlencoded({extended: true}))

// app.get('/produtos',(req, res, next) => {
//     res.send({nome: 'Notebook', preco: 123.45}) //converte pra JSON automaticamente
// })

//ou

// app.use((req, res, next) => {
//     res.send({nome: 'Notebook', preco: 123.45}) //converte pra JSON automaticamente
// })

app.get('/produtos',(req, res, next) => {
    res.send(bancoDeDados.getProdutos())
})

app.get('/produtos/:id', (req, res, next) => {
    res.send(bancoDeDados.getProduto(req.params.id))
})


//usado para salvar formularios de cadastro de pagina de web, é assim que é mandado para o servidor
app.post('/produtos', (req,res,next) => {
    const produto = bancoDeDados.salvarProduto({
        nome: req.body.nome,
        preco: req.body.preco
    })
    res.send(produto)// armazena acima e envia a resposta aqui
})

//
app.put('/produtos/:id', (req,res,next) => {
    const produto = bancoDeDados.salvarProduto({
        id: req.params.id,
        nome: req.body.nome,
        preco: req.body.preco
    })
    res.send(produto)
})

app.delete('/produtos/:id', (req, res, next) => {
    const produto = bancoDeDados.excluirProduto(req.params.id)
    res.send(produto) // JSON
})


app.listen(porta, () => {
    console.log(`Servidor executando na porta ${porta}.`)
})