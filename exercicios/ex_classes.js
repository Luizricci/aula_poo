class Pizza {
    constructor (base, molho, cobertura, queijo){
        this.base = base
        this.molho = molho
        this.cobertura = cobertura
        this.queijo = queijo
    }
    montarPizza(){
    console.log(`sua pizza tem massa ${this.base} com molho ${this.molho} recheio de ${this.cobertura} com  ${this.queijo}`)
    }
}
const criar = new Pizza ("folhada", "bolonhesa", "calabresa", "queijo qualho" )

criar.montarPizza()
