class Lancamento {
    constructor(nome = 'Genérico', valor = 0) {
        this.nome = nome
        this.valor = valor
    }
}

class CicloFinanceiro {
    constructor(mes, ano) {
        this.mes = mes
        this.ano = ano
        this.lancamentos = []
    }

    addLancamentos(...lancamentos) { //concatena todos os parametros em um array, possibilitando varios valores
        lancamentos.forEach(l => this.lancamentos.push(l))
    } //foreach percorre todos os elementos e da um push em cada um dos atributos q receber 'l'
    //no array lancamentos que pertence ao objeto

    sumario() {
        let valorConsolidado = 0
        this.lancamentos.forEach(l => { //para cada um dos lancamantos ele vai somar no valConso.
            valorConsolidado += l.valor
        })
        return valorConsolidado
    }
}

const salario = new Lancamento('Salario', 45000)
const contaDeLuz = new Lancamento('Luz', -220)

const contas = new CicloFinanceiro(6, 2018)
contas.addLancamentos(salario, contaDeLuz) //devido ao ...lancamentos construido acima é possivel passar quantos parametros eu quiser
console.log(contas.sumario())

console.log(contas) // lista todos os atributos no obj contas