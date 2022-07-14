console.log(this === global)
//nao é igual pois this aponta para module.exports e nao para global

console.log(this === module) // false
console.log(this === module.exports) // true
console.log(this === exports) // true

function logThis(){
    console.log('Dentro de uma função...')
    console.log(this === exports) // é false pois aponta para global
    console.log(this === module.exports) //false
    console.log(this === global)

    this.perigo = '...' // fica visivel fora do modulo!
}
logThis()

console.log(perigo)