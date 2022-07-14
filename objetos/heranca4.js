function MeuObjeto(){

}

console.log(MeuObjeto.prototype)

const obj1 = new MeuObjeto
const obj2 = new MeuObjeto
console.log(obj1.__proto__ === obj2.__proto__) // significa que apontam para o mesmo pai
console.log(MeuObjeto.prototype === obj1.__proto__)

MeuObjeto.prototype.nome = 'Anônimo' // atribui ao pai deste objeto o atributo nome

MeuObjeto.prototype.falar = function(){ // cria uma função no MeuObj. possibilitando obj1 e obj2 acessa-la
    console.log(`Bom dia! Meu nome é ${this.nome}!`)
}

obj1.falar()

obj2.nome = 'Rafael' // atribui o nome 'rafael' ao obj2
obj2.falar()

const obj3 = {}
obj3.__proto__ = MeuObjeto.prototype // muda a referecia pai do obj3 de object para MeuObjeto
obj3.nome = 'Obj3'
obj3.falar()


//resumindo
console.log((new MeuObjeto).__proto__ === MeuObjeto.prototype)
console.log(MeuObjeto.__proto__ == Function.prototype)
console.log(Function.prototype.__proto__ === Object.prototype)
console.log(Object.prototype.__proto__ === null) // objeto existe mas nao tem valor, ou seja não é undefined

