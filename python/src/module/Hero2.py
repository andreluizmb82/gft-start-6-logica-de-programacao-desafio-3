from abc import ABC, abstractmethod

class Hero2:
    MAGO = "mago"
    GUERREIRO = "guerreiro"
    MONGE = "monge"
    NINJA = "ninja"
    def __init__(self, name, age, type = "mago"):
        self._name = name
        self._age = age
        self._type = type

    @classmethod
    def get_instance(cls, name, age, type="mago"):
        hero_classes = {
        cls.MAGO: Mago,
        cls.GUERREIRO: Guerreiro,
        cls.MONGE: Monge,
        cls.NINJA: Ninja
    }
        if type not in hero_classes:
            raise ValueError("Tipo de herói inválido")
        return hero_classes[type](name, age, type)
    
    @abstractmethod
    def attack(self):
        pass

    @property
    def name(self):
        return self._name

    @property
    def age(self):
        return self._age
    
    @property
    def type(self):
        return self._type

class Mago(Hero2):
        AGE_START_TRAINING = 10
        @property
        def type_attack(self):
             return "magia"
        def attack(self):
            return f"O {self.type} {self.name} com seus {self.age - self.AGE_START_TRAINING} de experiencia atacou usando {self.type_attack}"
        
class Guerreiro(Hero2):
        AGE_START_TRAINING = 12
        @property
        def type_attack(self):
             return "espada"
        def attack(self):
            return f"O {self.type} {self.name} com seus {self.age - self.AGE_START_TRAINING} de experiencia atacou usando {self.type_attack}"
        
class Monge(Hero2):
        AGE_START_TRAINING = 5
        @property
        def type_attack(self):
             return "artes marciais"
        def attack(self):
            return f"O {self.type} {self.name} com seus {self.age - self.AGE_START_TRAINING} de experiencia atacou usando {self.type_attack}"
        
class Ninja(Hero2):
        AGE_START_TRAINING = 6
        @property
        def type_attack(self):
             return "shuriken"
        def attack(self):
            return f"O {self.type} {self.name} com seus {self.age - self.AGE_START_TRAINING} de experiencia atacou usando {self.type_attack}"


        