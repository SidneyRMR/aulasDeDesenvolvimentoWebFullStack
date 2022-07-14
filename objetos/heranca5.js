console.log(typeof String)
console.log(typeof Array)
console.log(typeof Object)

String.prototype.reverse = function(){
    return this.split('').reverse().join('') // cria uma nova funcioanalidade 'reverse' dentro do modulo String
} // em que separa todas as letras, inverte-as, e reagrupa

console.log('Escola Cod3r'.reverse())

Array.prototype.first = function(){
    return this[0] // retorna o promeiro elemnto do array
}

console.log([1,2,3,4,5].first()) // retorna o primeiro valor 'modulo criado acima'

String.prototype.toString = function(){
    return 'Lascou tudo' //não mude ou crie novas funcionaliades a partir de modulos
}// ja existentes pois podem gerar mutios conflitos

console.log('Escola Cod3r'.reverse())