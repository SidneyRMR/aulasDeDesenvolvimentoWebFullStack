const pilotos = ['Vettel', 'Alonso', 'Raikkonen', 'Massa'] // por ser atribuido como constanto o 
//tamanho do array nao podera ser alterado
pilotos.pop() // massa quebrou o carro! - retira ultimo valor do indice
console.log(pilotos)

pilotos.push('Verstappen') // adiciona o 'vertappen' na ultima posição
console.log(pilotos)

pilotos.shift() // remove o primeiro! - e puxa todos os elementos
console.log(pilotos)

pilotos.unshift('Hamilton') // adiciona um elemento no indice [0] e empurra todos os elementos
console.log(pilotos)

// splice pode adicionar e remover elementos

// adicionar
pilotos.splice(2, 0, 'Bottas', 'Massa') // no indice doiss, nao remove ninguem, 
//adiciona entre eles, bottas e massa
console.log(pilotos)

// remover
pilotos.splice(3, 1) // massa quebrou :( - remove o piloto do indice 3
console.log(pilotos)

const algunsPilotos1 = pilotos.slice(2) // novo array - a partir do indice 2
console.log(algunsPilotos1)

const algunsPilotos2 = pilotos.slice(1, 4) // retorna pilotos a partir do indice 1 até o indice 4, 
//porem indice 4 nao entra
console.log(algunsPilotos2)