from module.Hero2 import Hero2

print( Hero2.get_instance("Andre",1000,Hero2.MAGO).attack())
print( Hero2.get_instance("Andre",1000,Hero2.GUERREIRO).attack())
print( Hero2.get_instance("Andre",1000,Hero2.MONGE).attack())
print( Hero2.get_instance("Andre",1000,Hero2.NINJA).attack())