const pessoa = {
    nome: 'Arthur',
    sobrenome: 'vitor',
    idade: 15
}

for (let chaves in pessoa){
    console.log(chaves, pessoa[chaves])
}