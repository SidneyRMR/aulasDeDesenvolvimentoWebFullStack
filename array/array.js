// o array no JS tem tamanho dinamico é nao tem restrição de tipo!
// porem a boa pratica nos diz que é melhor trabalhar com dados homogeneos

console.log(typeof Array, typeof new Array, typeof [])

let aprovados = new Array('Bia', 'Carlos', 'Ana') //forma nao tao recomendada de criar array
console.log(aprovados)

aprovados = ['Bia', 'Carlos', 'Ana'] // notação recomendada para usar no dia a dia
console.log(aprovados[0])
console.log(aprovados[1])
console.log(aprovados[2])
console.log(aprovados[3]) //ainda nao tem valor, retorna undefined

aprovados[3] = 'Paulo' // melhor usado para substituir
aprovados.push('Abia') // melhor para adicionar novos elementos
console.log(aprovados.length)
console.log(aprovados) // imprime todos os valores do array

aprovados[9] = 'Rafael' //possoa fazer isso mas os elementos q nao iverem valor ficarao como undefined
console.log(aprovados.length)
console.log(aprovados[8] === undefined)

console.log(aprovados)
aprovados.sort() // ordena o array por ordem alfabetica sobrepondo a sequencia anterior
console.log(aprovados)

delete aprovados[1] // exclui o elemento no indice 1 e ele se torna undefined, nao reoderna o array
console.log(aprovados[1])
console.log(aprovados[2])

aprovados = ['Bia', 'Carlos', 'Ana']
aprovados.splice(1, 1) // exclui na altura do indice carlos [1] um elemento, no caso o carlos,
// se colocar 2 ele exclui o atual e o proximo

aprovados = ['Bia', 'Carlos', 'Ana']
aprovados.splice(1, 1, 'elem1', 'elem2') //vai no ind 1 e exclui elemento de indice 1 e depois 
//adiciona o elem1 e elem2, empurrando os proximos para frente


console.log(aprovados)