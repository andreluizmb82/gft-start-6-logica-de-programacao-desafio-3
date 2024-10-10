class Hero:
    def __init__(self, name, age, type = "mago"):
        self.name = name
        self.age = age
        self.type = type

    def attack(self):
        if self.type == "mago":
            return "O mago atacou usando magia"
        elif self.type == "guerreiro":
            return "O guerreiro atacou usando espada"
        elif self.type == "monge":
            return "O monge atacou usando artes marciais"
        elif self.type == "ninja":
            return "O ninja atacou usando shuriken"
        else:
            return "O tipo de personagem não foi encontrado"
        