import solution_1 from "../src/solution_1.mjs"
import Test from "./Test.mjs"

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
