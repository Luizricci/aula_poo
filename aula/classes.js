class Pessoa {
    constructor (nome, idade, altura){
        this.nome = nome
        this.idade = idade 
        this.altura = altura
    }
    seApresentar(){
    console.log(`olá meu nome é ${this.nome}, tenho ${this.idade} idade e ${this.altura} de altura`)
    }
}
const user = new Pessoa ("manoel", 19, 1.78 )
const user1 = new Pessoa ("flavin do pneu", 22, 1.93 )

//console.log(user, user1)
user.seApresentar()
user1.seApresentar()
