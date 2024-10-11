export class Hero {
    static MAGO = 'mago';
    static GUERREIRO = 'guerreiro';
    static MONGE = 'monge';
    static NINJA = 'ninja';
    AGE_START_TRAINING = 10;
    _name;
    _age;
    _type;
    constructor(name, age, type = Hero.MAGO) {
        this._name = name;
        this._age = age;
        this._type = type;
    }
    // Método Template
    attack() {
        const experienceYears = this._age - this.AGE_START_TRAINING;
        return `O ${this._type} ${this._name} com seus ${experienceYears} anos de experiência atacou usando ${this.typeAttack()}`;
    }
    // Propriedades
    get name() {
        return this._name;
    }
    get age() {
        return this._age;
    }
    get type() {
        return this._type;
    }
}
export class Mago extends Hero {
    AGE_START_TRAINING = 10;
    constructor(name, age) {
        super(name, age, Hero.MAGO);
    }
    typeAttack() {
        return 'magia';
    }
}
export class Guerreiro extends Hero {
    AGE_START_TRAINING = 8;
    constructor(name, age) {
        super(name, age, Hero.GUERREIRO);
    }
    typeAttack() {
        return 'espada';
    }
}
export class Monge extends Hero {
    AGE_START_TRAINING = 7;
    constructor(name, age) {
        super(name, age, Hero.MONGE);
    }
    typeAttack() {
        return 'artes marciais';
    }
}
export class Ninja extends Hero {
    AGE_START_TRAINING = 6;
    constructor(name, age) {
        super(name, age, Hero.NINJA);
    }
    typeAttack() {
        return 'shuriken';
    }
}
