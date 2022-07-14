const moduloA = require('../../moduloA')
console.log(moduloA.ola)
console.log(moduloA.bemVindo)
console.log(moduloA.ateLogo)


//modulos core - são os que já vem internamente no node

const c = require('./pastaC')
console.log(c.ola2)

const http = require('http')
http.createServer((req, res) => {
    res.write('Bom dia!')
    res.write(c.ola2)
    res.end()
}).listen(8080)
