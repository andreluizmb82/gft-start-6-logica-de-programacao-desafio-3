import solution_1 from "../src/solution_1.mjs"

export default class Test {
  static _contadorTestesFalharam = 0
  static _contadorTestesPassaram = 0
  constructor() {}

  static test(textoEsperado, textoRecebido) {
    Test._contadorTestesFeitos++
    if (textoEsperado === textoRecebido) {
      Test._contadorTestesPassaram++
      //console.log(`Teste ${Test._contadorTestesFeitos} Passou!`)
    } else {
      Test._contadorTestesFalharam++
      let testAtual =
        Test._contadorTestesFalharam + Test._contadorTestesPassaram
      console.error("\n--------------------------------------------------")
      console.error(`Teste ${testAtual} Falhou!`)
      console.error(`O texto esperado era: ${textoEsperado}`)
      console.error(`O texto recebido foi: ${textoRecebido}`)
      console.error("--------------------------------------------------\n")
    }
  }
  static relatorio() {
    console.error("\n\n--------------------------------------------------")
    console.log("Relatório de Testes:")
    console.log(
      `Testes Feitos: ${
        Test._contadorTestesPassaram + Test._contadorTestesFalharam
      }`
    )
    console.log(`Testes Passaram: ${Test._contadorTestesPassaram}`)
    console.error(`Testes Falharam: ${Test._contadorTestesFalharam}`)
    console.error("--------------------------------------------------\n\n")
  }
}

Test.test(
  "O mago atacou usando magia",
  new solution_1("Gandalf", 1000, "mago").atacar()
)
Test.test(
  "O guerreiro atacou usando espada",
  new solution_1("Aragorn", 25, "guerreiro").atacar()
)
Test.test(
  "O monge atacou usando artes marciais",
  new solution_1("Bruce Lee", 30, "monge").atacar()
)
Test.test(
  "O ninja atacou usando shuriken",
  new solution_1("Naruto", 16, "ninja").atacar()
)
Test.relatorio()
