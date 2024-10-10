from Test import Test
import sys
import os
# Adiciona a pasta "src" ao caminho do sistema
src_path = os.path.abspath(os.path.join(os.path.dirname(__file__), '..', 'src'))
sys.path.append(src_path)

from module.Hero2 import Hero2




Test.assert_equals(
    "O mago Gandalf com seus 990 de experiencia atacou usando magia", 
    Hero2.get_instance("Gandalf",1000,Hero2.MAGO).attack(),
    "1º - testa se a instancia da class Hero responde corretamente quando executado o método attack"
)

Test.assert_equals(
    "O guerreiro Kenshin Himura com seus 16 de experiencia atacou usando espada", 
    Hero2.get_instance("Kenshin Himura",28,Hero2.GUERREIRO).attack(),
    "2º - testa se a instancia da class Hero responde corretamente quando executado o método attack"
)

Test.assert_equals(
    "O monge Tenzin com seus 46 de experiencia atacou usando artes marciais", 
    Hero2.get_instance("Tenzin",51,Hero2.MONGE).attack(),
    "3º - testa se a instancia da class Hero responde corretamente quando executado o método attack"
)

Test.assert_equals(
    "O ninja Kakashi com seus 24 de experiencia atacou usando shuriken", 
    Hero2.get_instance("Kakashi",30,Hero2.NINJA).attack(), 
    "4º - testa se a instancia da class Hero responde corretamente quando executado o método attack"
)

Test.print_summary()
