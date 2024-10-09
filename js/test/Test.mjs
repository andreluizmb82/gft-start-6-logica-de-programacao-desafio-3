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
