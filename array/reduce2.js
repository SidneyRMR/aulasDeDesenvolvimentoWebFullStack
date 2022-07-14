const alunos = [
    { nome: 'João', nota: 7.3, bolsista: false },
    { nome: 'Maria', nota: 9.2, bolsista: true },
    { nome: 'Pedro', nota: 9.8, bolsista: false },
    { nome: 'Ana', nota: 8.7, bolsista: true }
]

// Desafio 1: Todos os alunos são bolsista?
//criar função reduce que ira percorrer a lista alunos e verificar quais alunos sao bolsistas

const todosBolsistas = (resultado, bolsista) => resultado && bolsista
console.log(alunos.map(a => a.bolsista))
console.log(alunos.map(a => a.bolsista).reduce(todosBolsistas)) // false pois existem alunos nao bolsistas


// Desafio 2: Algum aluno é bolsista? true sim, false, nao
const algumBolsista = (resultado, bolsista)=> resultado || bolsista // true pois tem aluno bolsista sim
console.log(alunos.map(a => a.bolsista)) //primeiro mapeio tudo e depois verifico se tem algum bolsista
console.log(alunos.map(a => a.bolsista).reduce(algumBolsista))



