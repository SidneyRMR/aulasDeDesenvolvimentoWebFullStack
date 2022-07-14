const carrinho = [
    '{ "nome": "Borracha", "preco": 3.45 }',
    '{ "nome": "Caderno", "preco": 13.90 }',
    '{ "nome": "Kit de Lapis", "preco": 41.22 }',
    '{ "nome": "Caneta", "preco": 7.50 }'
]

// Retornar um array apenas com os preços

//1) converte os json para objeto usei map pois eram varios JSON na mesma variavel
let conversao = carrinho.map(function(e){return JSON.parse(e)})

//2) depois percorri o objeto utilizando o map para retornar o preco em cada obj[i].preco
let precos = conversao.map(function(e){
    return e.preco
})
console.log(precos) 


//resposta do professor
const paraObjeto = json => JSON.parse(json)
const apenasPreco = produto => produto.preco

const resultado = carrinho.map(paraObjeto).map(apenasPreco)
console.log(resultado)