//Implementação do proprio forEach - exemplo do funcionamento
Array.prototype.forEach2 = function(callback) {
    for (let i = 0; i < this.length; i++) {
        callback(this[i], i, this)
    }
}

const aprovados = ['Agatha', 'Aldo', 'Daniel', 'Raquel']

aprovados.forEach2(function(nome, indice) {
    console.log(`${indice + 1}) ${nome}`)
})

console.log()


arrayQualquer = ['Agatha', 'Aldo', 'Daniel', 'Raquel']
for (let i = 0; i < arrayQualquer.length; i++){
    console.log(`${i+1}) ${arrayQualquer[i]}`)
}

arrayQualquer.forEach(print => console.log(print)) //função callback que imprime cada elemnto do array