let pessoa = {
    nome: '',
    sobrenome: '',
    idade: '',
    situacao: '',
    number: '',

    addPerson (nome, sobrenome, idade, number, sitaucao='A confirmar'){
        this.nome = nome,
        this.sobrenome = sobrenome,
        this.idade = idade,
        this.number = number,
        this.situacao = sitaucao
    }
}


pessoa.addPerson('Arthur', 'Vitor', 15, 931293)
console.log(pessoa)