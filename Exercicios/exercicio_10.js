class funcionario{ //criando a classe funcionario
    constructor(nome,idade,salarioBase){  //definindo os parametros da classe
    this.nome = nome; //dizendo que o nome deverá ser definido pelo objeto
    this.idade = idade //dizendo que o idade deverá ser definido pelo objeto
    this.salarioBase=salarioBase; //dizendo que o salario base (por hora) deverá ser definido pelo objeto
    }
}

class professor extends funcionario{ //criando a classe professor herdando as caracteristicas da classe funcionario
    constructor(nome,idade,salarioBase,disciplina,horasDeAula){ //definindo os parametros da classe
        super(nome,idade,salarioBase) //dizendo que esses parametros serão definidos da mesma forma que a classe que essa está herdando
        this.disciplina=disciplina //dizendo que a disciplina de aula deverá ser definido pelo objeto
        this.horasDeAula = horasDeAula //dizendo que a quantidade de horas de aula deverá ser definido pelo objeto
    }

    calcularSalario(){ //criando um método (função) para calcular o salário e mostrar ele
        this.salarioTotal=this.salarioBase*this.horasDeAula //definindo que o salario total será o salario base vezes a quantidade de horas de aula
        console.log(this.nome,', seu salário esse mês será', this.salarioTotal) // printando o nome do funcionaro e o seu salário
    }
}

const Claudio = new professor('Claudio',40,55, 'história', 30) // definindo um objeto da classe professor e dando seus parametros
const Ezequiel = new professor('Ezequiel',53,80, 'matemática', 30) // definindo um objeto da classe professor e dando seus parametros

Claudio.calcularSalario() // dizendo para o objeto Claudio executar o método calcular salario que foi predefinido na classe
Ezequiel.calcularSalario() // dizendo para o objeto Claudio executar o método calcular salario que foi predefinido na classe