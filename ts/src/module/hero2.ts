function hero(
  typeHero: string,
  typeAttack: string,
  startsTrainingAtYearsOfAge: number,
): (name: string, year: number) => string {
  return function heroType(name: string, year: number): string {
    const yearsOfExperience: number = year - startsTrainingAtYearsOfAge;
    return `O ${typeHero} ${name} com seus ${yearsOfExperience} anos de experiência atacou usando ${typeAttack}`;
  };
}

export const mago: (name: string, year: number) => string = hero(
  'mago',
  'magia',
  10,
);
export const guerreiro: (name: string, year: number) => string = hero(
  'guerreiro',
  'espada',
  8,
);
export const monge: (name: string, year: number) => string = hero(
  'monge',
  'artes marciais',
  5,
);
export const ninja: (name: string, year: number) => string = hero(
  'ninja',
  'shuriken',
  6,
);
