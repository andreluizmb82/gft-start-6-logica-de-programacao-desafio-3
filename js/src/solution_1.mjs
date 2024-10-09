const TIPO = ["mago", "guerreiro", "monge", "ninja"]
export default class Heroi {
  constructor(nome, idade, tipo = "mago") {
    this.nome = nome
    this.idade = idade
    this.tipo = tipo
  }

  atacar() {
    let ataque = ""
    switch (this.tipo) {
      case "mago":
        ataque = "magia"
        break
      case "guerreiro":
        ataque = "espada"
        break
      case "monge":
        ataque = "artes marciais"
        break
      case "ninja":
        ataque = "shuriken"
        break
      default:
        ataque = "ataque desconhecido"
        break
    }
    return `O ${this.tipo} atacou usando ${ataque}`
  }
}

console.log(new Heroi("Gandalf", 1000, "mago").atacar())
console.log(new Heroi("Aragorn", 25, "guerreiro").atacar())
console.log(new Heroi("Bruce Lee", 30, "monge").atacar())
console.log(new Heroi("Naruto", 16, "ninja").atacar())
