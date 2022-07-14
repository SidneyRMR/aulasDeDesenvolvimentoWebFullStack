function Aula(nome, videoID){// função contrutora
    this.nome = nome
    this.videoID = videoID
}

const aula1 = new Aula('Bem vindo', 123) //qunado usamos o operador new crianmos um novo
const aula2 = new Aula('Até breve', 456) // objeto e o prototipo é apontado para aula.prototype
console.log(aula1,aula2)

//Simulando o new -- exemplo do que acontece quando criamos usando o operador new
function novo(f,...params) {//...params concatena tudo em um array
    const obj = {}
    obj.__proto__ = f.prototype
    f.apply(obj, params)
    return obj
}

const aula3 =novo(Aula, 'Bem Vindo', 123)
const aula4 =novo(Aula, 'Até breve', 456)
console.log(aula3,aula4)
