// Exercício 7
class Animal{
    constructor(nome, idade){
        this.nome = nome
        this.idade = idade
    }
    descrever(){
        console.log('Esse é o', this.nome, 'ele tem', this.idade, 'anos')
    }
}
const gato = new Animal('miau', 7)
const cachorro = new Animal('bilu', 9)

gato.descrever()
cachorro.descrever()
