import { Guerreiro, Mago, Monge, Ninja } from "../src/solution_2.mjs"
import Test from "./Test.mjs"

Test.test(
  "O mago Gandalf de 1000 anos de sabedoria atacou usando sua poderosa magia.",
  new Mago("Gandalf", 1000).atacar()
)
Test.test(
  "O guerreiro Aragorn, veterano de 9 anos de experiência em batalhas, atacou com sua espada afiada.",
  new Guerreiro("Aragorn", 25).atacar()
)
Test.test(
  "O monge Bruce Lee de 30 anos canalizou suas artes marciais para atacar com precisão.",
  new Monge("Bruce Lee", 30).atacar()
)
Test.test(
  "O ninja Naruto, um adolescente de apenas 16 anos, atacou usando uma shuriken letal.",
  new Ninja("Naruto", 16).atacar()
)
Test.relatorio()
