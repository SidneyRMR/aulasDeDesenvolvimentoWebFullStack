const fs = require('fs')

const produto = {
    nome: 'Celular',
    preco: 1249.99,
    desconto: 0.15,
    loja: 'Magazine'
}

//fs = FileSystem - __dirname(diretorio atual) + '/ar..(pastanova), 
//JSON.stringfy(produto)(converte produto em JSON), err => {
    //console.log(err(se der erro(retorna o erro)) || se der certo retorna o 'Arquivo salvo') 
    //com o valor do objeto produto covertido em json - salva o arquivo em disco!!
    //na hora de ler o arquivo ele ja coverte automaticamente para objeto

    fs.writeFile(__dirname + '/arquivoGerado.json', JSON.stringify(produto), err =>{
        console.log(err || 'Arquivo salvo!')
    })