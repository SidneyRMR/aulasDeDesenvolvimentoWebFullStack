//Em node um arquivo representa um modulo!!
//fica visivel apenas no modulo
//para ficar visivel eu preciso exportar ou importar 
//Existem 2 padroes de modulos
//--import export e 

this.ola = 'Fala Pessoal'
//dessa forma a frase pode ser acessada em outro arquivo

exports.bemVindo = 'Bem vindo ao node!'
//segunda forma de exportar

module.exports.ateLogo = 'Até o próximo exemplo'
//terceira forma- mais conhecida