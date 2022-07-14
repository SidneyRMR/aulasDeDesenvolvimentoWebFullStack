//Este exercicio tem o objetivo de acessar um arquivo JSON na internet e filtra-lo
//Os filtro são: menor salario de uma pessoa da China que esta neste JSON

const url = 'http://files.cod3r.com.br/curso-js/funcionarios.json'
const axios =  require('axios')

//Solução Professor - constantes e funções
const mulheres = f => f.genero === 'F'
const chineses = f => f.pais === 'China'
const menorSalario = (func, funcAtual) => func.salario > funcAtual ? func : funcAtual


axios.get(url).then(response => {
    const funcionarios = response.data

    //Minha solução so retornava o valor do salario e o correto seria retornar os dados completos
    // let filtro = []
    // for (i in funcionarios){
    //     if (funcionarios[i].pais === 'China') {
    //         filtro.push(funcionarios[i].salario)
    //     }
    // }
    // console.log(`O menor salário encontrado foi: U$${(filtro.sort((salA, salB) => salA - salB)).shift()}`)


    //Solução do professor
    const func = funcionarios
        .filter(chineses)
        .filter(mulheres)
        .reduce(menorSalario)

    console.log(func)    

})

