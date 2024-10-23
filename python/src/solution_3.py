from module.hero3 import hero3

ladino = hero3("Ladino", "adaga", 10)
franco  = ladino("Franco", 1000)

print(franco["attack_text"])
print("Danos de ataque: " + str(franco["attack_damage"]()))
print("Sofreu danos e está com " + str(franco["damage_taken"](7)) + " de vida.")
print("Vida atual: " + str(franco["remaining_life"]()))
#print(franco["attack_text"])


arqueiro = hero3("Arqueiro", "flecha", 10, func=lambda name, year, type_hero, type_attack, years_of_experience: f"O {type_hero} chamado {name} de {years_of_experience} anos de experiência, atacou usando {type_attack}")
print(type(arqueiro))
Hanzo = arqueiro("Hanzo", 25)
print(Hanzo["attack_text"])
print("Danos de ataque: " + str(Hanzo["attack_damage"]()))
print("Sofreu danos e está com " + str(Hanzo["damage_taken"](9)) + " de vida.")
print("Vida atual: " + str(Hanzo["remaining_life"]()))