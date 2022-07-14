// realação de heranca entre classes

class Avo {
    constructor(sobrenome) {
        this.sobrenome = sobrenome
    }
}

class Pai extends Avo {
    constructor(sobrenome, profissao = 'Professor') {
        super(sobrenome) // superclasse - chama o contrutor da classe avo
        this.profissao = profissao
    }
}

class Filho extends Pai {
    constructor() {
        super('Silva')
    }
}

const filho = new Filho
const pai = new Pai.sobrenome = 'marcos'
const avo = new Avo

console.log(filho)
console.log(pai)
console.log(avo)