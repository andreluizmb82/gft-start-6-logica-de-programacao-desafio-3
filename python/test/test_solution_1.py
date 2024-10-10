from Test import Test
import sys
import os
# Adiciona a pasta "src" ao caminho do sistema
src_path = os.path.abspath(os.path.join(os.path.dirname(__file__), '..', 'src'))
sys.path.append(src_path)

from module.Hero import Hero




Test.assert_equals("O mago atacou usando magia", Hero('Gandalf', 1000, 'mago').attack(),"1º - testa se a instancia da class Hero responde corretamente quando executado o método attack")
Test.assert_equals("O guerreiro atacou usando espada", Hero("Kenshin Himura", 28, 'guerreiro').attack(), "2º - testa se a instancia da class Hero responde corretamente quando executado o método attack")
Test.assert_equals("O monge atacou usando artes marciais", Hero('Tenzin', 51, 'monge').attack(), "3º - testa se a instancia da class Hero responde corretamente quando executado o método attack")
Test.assert_equals("O ninja atacou usando shuriken", Hero('Kakashi', 30, 'ninja').attack(), "4º - testa se a instancia da class Hero responde corretamente quando executado o método attack")
Test.print_summary()