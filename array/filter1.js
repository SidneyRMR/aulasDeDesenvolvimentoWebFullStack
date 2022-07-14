const produtos = [
    { nome: 'Notebook', preco: 2499, fragil: true },
    { nome: 'iPad Pro', preco: 4199, fragil: true },
    { nome: 'Copo de Vidro', preco: 12.49, fragil: true },
    { nome: 'Copo de Plástico', preco: 18.99, fragil: false }
]

// console.log(produtos.filter(function(p) {//p representa cada um desses produtos, functon como callback
//     return false // retorna se tem produto vazio
// }))

// console.log(produtos.filter(function(p) {//p representa cada um desses produtos, functon como callback
//     return p.preco > 2400 // retorna produtos com preco maior que 2400
// }))
const palavra = 'macarrao'

// const consoante = letra => letra === 'a' ? '': letra
// console(palavra.filter(consoante))


const caro = produto => produto.preco >= 500
const fragil = produto => produto.fragil

console.log(produtos.filter(caro).filter(fragil))