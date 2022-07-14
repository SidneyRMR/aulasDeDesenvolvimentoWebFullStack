const obj = { a: 1, b: 2, c: 3, soma() { return a + b + c } }
console.log(JSON.stringify(obj))// converte objeto obj para JSON 'textual'

// console.log(JSON.parse("{ a: 1, b: 2, c: 3 }")) // este fomato nao é valido pois os 
// console.log(JSON.parse("{ 'a': 1, 'b': 2, 'c': 3 }")) //atributos devem se delimitados pos aspas duplas
console.log(JSON.parse('{ "a": 1, "b": 2, "c": 3 }')) //JSON.parse transforma essa string em um objeto
console.log(JSON.parse('{ "a": 1.7, "b": "string", "c": true, "d": {}, "e": [] }'))

//JSON é usado para iterapelabilidade entre linguagens para migração de dados