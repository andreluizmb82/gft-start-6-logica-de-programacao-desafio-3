
import random

def hero3(
    type_hero:str, 
    type_attack:str, 
    starts_training_at_years_of_age:int, 
    func: None = None
    ):
    
    
    def hero_type(name:str, year:int): 
        life: int = 100
        years_of_experience: int = year - starts_training_at_years_of_age
        attack_text: str = ""
        
        def remaining_life():
            return life
        
        def attack_damage():
            return random.randint(5, 10)
        
        def damage_taken(damage:int):
            nonlocal life
            life -= damage
            return life
        if func:
            attack_text = func(name, 
                    year, 
                    type_hero, 
                    type_attack,
                    years_of_experience)
        else:
            attack_text = f"O {type_hero} {name} de {years_of_experience} anos de experiência, atacou usando {type_attack}"
            
        
        return {
            "attack_text":attack_text, 
            "attack_damage":attack_damage, 
            "damage_taken":damage_taken, 
            "remaining_life":remaining_life
            }
    return hero_type

