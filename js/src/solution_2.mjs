export class Heroi {
  constructor(nome, idade) {
    if (this.constructor === Heroi) {
      throw new Error(
        "Classe abstrata 'Heroi' não pode ser instanciada diretamente."
      )
    }
    this.nome = nome
    this.idade = idade
  }

  // Método abstrato (não implementado na classe base)
  atacar() {
    throw new Error("Método 'atacar()' deve ser implementado.")
  }
}

export class Mago extends Heroi {
  atacar() {
    return `O mago ${this.nome} de ${this.idade} anos de sabedoria atacou usando sua poderosa magia.`
  }
}

export class Guerreiro extends Heroi {
  atacar() {
    return `O guerreiro ${this.nome}, veterano de ${
      this.idade - 16
    } anos de experiência em batalhas, atacou com sua espada afiada.`
  }
}

export class Monge extends Heroi {
  atacar() {
    return `O monge ${this.nome} de ${this.idade} anos canalizou suas artes marciais para atacar com precisão.`
  }
}

export class Ninja extends Heroi {
  atacar() {
    return `O ninja ${this.nome}, um adolescente de apenas ${this.idade} anos, atacou usando uma shuriken letal.`
  }
}

// Testando as subclasses com as mensagens detalhadas
console.log(new Mago("Gandalf", 1000).atacar())
console.log(new Guerreiro("Aragorn", 25).atacar())
console.log(new Monge("Bruce Lee", 30).atacar())
console.log(new Ninja("Naruto", 16).atacar())
