type HeroType = 'mago' | 'guerreiro' | 'monge' | 'ninja';

export abstract class Hero {
  static readonly MAGO: HeroType = 'mago';
  static readonly GUERREIRO: HeroType = 'guerreiro';
  static readonly MONGE: HeroType = 'monge';
  static readonly NINJA: HeroType = 'ninja';

  readonly AGE_START_TRAINING: number = 10;
  protected _name: string;
  protected _age: number;
  protected _type: HeroType;

  protected constructor(name: string, age: number, type: HeroType = Hero.MAGO) {
    this._name = name;
    this._age = age;
    this._type = type;
  }

  // Método Template
  public attack(): string {
    const experienceYears = this._age - this.AGE_START_TRAINING;
    return `O ${this._type} ${this._name} com seus ${experienceYears} anos de experiência atacou usando ${this.typeAttack()}`;
  }

  // Método abstrato que as subclasses implementam
  protected abstract typeAttack(): string;

  // Propriedades
  get name(): string {
    return this._name;
  }

  get age(): number {
    return this._age;
  }

  get type(): HeroType {
    return this._type;
  }
}

export class Mago extends Hero {
  readonly AGE_START_TRAINING: number = 10;

  constructor(name: string, age: number) {
    super(name, age, Hero.MAGO);
  }

  protected typeAttack(): string {
    return 'magia';
  }
}

export class Guerreiro extends Hero {
  readonly AGE_START_TRAINING: number = 8;

  constructor(name: string, age: number) {
    super(name, age, Hero.GUERREIRO);
  }

  protected typeAttack(): string {
    return 'espada';
  }
}

export class Monge extends Hero {
  readonly AGE_START_TRAINING: number = 7;

  constructor(name: string, age: number) {
    super(name, age, Hero.MONGE);
  }

  protected typeAttack(): string {
    return 'artes marciais';
  }
}

export class Ninja extends Hero {
  readonly AGE_START_TRAINING: number = 6;

  constructor(name: string, age: number) {
    super(name, age, Hero.NINJA);
  }

  protected typeAttack(): string {
    return 'shuriken';
  }
}
