// Object.preventExtensions - não deixa adicionar novos atributos, mas permite excluir e alterar valores
const produto = Object.preventExtensions({
    nome: 'Qualquer', preco: 1.99, tag: 'promoção'
})
console.log('Extensível:', Object.isExtensible(produto))

produto.nome = 'Borracha'
produto.descricao = 'Borracha escolar branca'
delete produto.tag
console.log(produto)

// Object.seal - não deixa adicionar nem excluir atributos, somente modificar valores
const pessoa = { nome: 'Juliana', idade: 35 }
Object.seal(pessoa)
console.log('Selado:', Object.isSealed(pessoa))

pessoa.sobrenome = 'Silva' 
delete pessoa.nome // nao exclui pois objeto esta selado
pessoa.idade = 29
console.log(pessoa)

// Object.freeze = selado + valores constantes