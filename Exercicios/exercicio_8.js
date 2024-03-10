class Animal{
    constructor(nome, idade){
        this.nome = nome
        this.idade = idade
    }
    descrever(){
        console.log('Esse é o', this.nome, 'ele tem', this.idade, 'anos')
    }
}

class Gato extends Animal {
    constructor(nome,idade,cor){
        super(nome,idade);
        this.cor=cor
    }
    miar(){
        console.log('miau')
    }
}

const gato = new Gato('garfield',4,'preto')
const cachorro = new Animal('totó',12)

cachorro.descrever();
gato.descrever();
gato.miar()