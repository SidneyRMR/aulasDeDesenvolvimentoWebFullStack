const alunos = [
    { nome: 'João', nota: 7.9 },
    { nome: 'Maria', nota: 9.2 }
]


//objetivo de calcular a media desses valores
// Imperativo
let total1 = 0
for (let i = 0; i < alunos.length; i++) {
    total1 += alunos[i].nota
}
console.log(total1 / alunos.length)

// Declarativo - abordagem mai interessante e profisssioal - possui mais possibilidades de uso
const getNota = aluno => aluno.nota
const soma = (total, atual) => total + atual

const total2 = alunos.map(getNota).reduce(soma) //reduce pode ser usado para reduzir ou ate agregar num valor so
console.log(total2 / alunos.length) // media da turma