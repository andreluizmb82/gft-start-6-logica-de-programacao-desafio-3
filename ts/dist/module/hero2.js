function hero(typeHero, typeAttack, startsTrainingAtYearsOfAge) {
    return function heroType(name, year) {
        const yearsOfExperience = year - startsTrainingAtYearsOfAge;
        return `O ${typeHero} ${name} com seus ${yearsOfExperience} anos de experiência atacou usando ${typeAttack}`;
    };
}
export const mago = hero('mago', 'magia', 10);
export const guerreiro = hero('guerreiro', 'espada', 8);
export const monge = hero('monge', 'artes marciais', 5);
export const ninja = hero('ninja', 'shuriken', 6);
