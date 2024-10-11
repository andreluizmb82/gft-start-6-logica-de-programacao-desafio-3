function hero(typeHero, typeAttack, startsTrainingAtYearsOfAge) {
    return function heroType(name, year) {
        const yearsOfExperience = year - startsTrainingAtYearsOfAge;
        return `O ${typeHero} ${name} com ${yearsOfExperience} anos de experiência, atacou usando ${typeAttack}`;
    };
}
export const mago = hero('Mago', 'magia', 10);
export const guerreiro = hero('Guerreiro', 'espada', 8);
export const monge = hero('Monge', 'artes marciais', 5);
export const ninja = hero('Ninja', 'shuriken', 6);
