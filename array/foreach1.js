//usado para percorrer o array de modo geral

const aprovados = ['Agatha', 'Aldo', 'Daniel', 'Raquel']


// como se tivesse um laco for 
aprovados.forEach(function(nome, indice) { //essa função callback irá imprimir em forma de lista o array
    console.log(`${indice + 1}) ${nome}`) // o indice sempre épassado como segundo parametro
})

aprovados.forEach(nome => console.log(nome)) //arrow function imprimindo somente o valor do indice

const exibirAprovados = aprovado => console.log(aprovado) //arrow function 
aprovados.forEach(exibirAprovados)

console.log(aprovados) //imprime o array



//o proprio array é passado como terceiro parametro
// como se tivesse um laco for 
aprovados.forEach(function(nome, indice, array) { //essa função callback irá imprimir em forma de lista o array
    console.log(`${indice + 1}) ${nome}`) // o indice sempre é passado como segundo parametro
    console.log(`${array}`) // imprime o array completo, pois ele é o terceiro parametro q é retornado
})