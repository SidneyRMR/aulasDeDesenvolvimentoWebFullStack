const fs = require('fs')//ja vem previamente instalado no node

const caminho = __dirname + '/arquivo.json'

//sincrono... - le o arquivo inteiro para depois ir para o proximo passo
const conteudo = fs.readFileSync(caminho, 'utf-8')// arquivos grandes podem demorar muito, menos usada
console.log(conteudo)

//assincrono...
fs.readFile(caminho, 'utf-8', (err, conteudo) => {// só irá ler o cod embaixo se o error = 0
    const config = conteudo  = JSON.parse(conteudo)
    console.log(`${config.db.host}: ${config.db.port}`)
})

//mais prático dessa forma
const config = require('./arquivo.json')
console.log(config.db, config.db.host)// boa forma de usar
//result { host: 'localhost', port: 5432, user: 'usuario', pass: '123456' } - aparece depois 

fs.readdir(__dirname, (err, arquivos) => {
    console.log('Conteúdo da pasta...')
    console.log(arquivos) // arquivos que estao no diretoria atual
})