const TIPO = ["mago", "guerreiro", "monge", "ninja"]
export default class Heroi {
  constructor(nome, idadde, tipo = "mago") {
    this.nome = nome
    this.idade = idadde
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
