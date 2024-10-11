function hero(
  typeHero: string,
  typeAttack: string,
  startsTrainingAtYearsOfAge: number,
): (name: string, year: number) => string {
  return function heroType(name: string, year: number): string {
    const yearsOfExperience: number = year - startsTrainingAtYearsOfAge;
    return `O ${typeHero} ${name} com ${yearsOfExperience} anos de experiência, atacou usando ${typeAttack}`;
  };
}

export const mago: (name: string, year: number) => string = hero(
  'Mago',
  'magia',
  10,
);
export const guerreiro: (name: string, year: number) => string = hero(
  'Guerreiro',
  'espada',
  8,
);
export const monge: (name: string, year: number) => string = hero(
  'Monge',
  'artes marciais',
  5,
);
export const ninja: (name: string, year: number) => string = hero(
  'Ninja',
  'shuriken',
  6,
);
