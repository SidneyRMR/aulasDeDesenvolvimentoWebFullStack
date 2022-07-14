//map percorre cada um dos elementos e transforma todos os elementos no que voce desejar
//o resultado sempre sera um outro array do mesmo amanho porem com os elementos transformados
// o map nao altera o array, ele retorna um novo array
const nums = [1, 2, 3, 4, 5]

// For com propósito
let vesesDois = nums.map(function(e) {
    return e * 2 // o metodo que passamos para o map tem que ter um retorno, senao fica undefined
})

let vezesQuatro = nums.map(function(e){
    return e * 4
})

console.log(`${nums}\n${vesesDois}\n${vezesQuatro}`)

const soma10 = e => e + 10 //função que soma 10
const triplo = e => e * 3 // função que multiplica por 3
const paraDinheiro = e => `R$ ${parseFloat(e).toFixed(2).replace('.', ',')}` 
//a função acima converte para float, fixa em 2, 
//e substitui o ponto por virgula e coloca R$ no começo, ALEM DE CONVERTER TUDO PRA STRING

resultado = nums.map(soma10).map(triplo).map(paraDinheiro)
console.log(resultado)