const contadorA = require('./instanciaUnica')
const contadorB = require('./instanciaUnica')

const contadorC = require('./instanciaNova')()// retorna uma função , é uma factory
const contadorD = require('./instanciaNova')()

contadorA.inc()
contadorA.inc()
console.log(contadorB.valor) // o resultado do contadorB aconteceu pois o nome da variavel é a mesma


contadorC.inc()
contadorC.inc()
console.log(contadorD.valor) //ContadorD não foi alterado pois foi criada uma factory