require('./global') // neste caso só precisa ser feito isso uma unica vez e nao em todos os arquivos

//é necessario cuidado ao usar isso!

console.log(MinhaApp.saudacao())

MinhaApp.nome = 'Eita!'
console.log(MinhaApp.nome) //Paa eviar que possamos alterar este objeto podemos usar o freeze la no global

