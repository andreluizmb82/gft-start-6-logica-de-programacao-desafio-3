import { Guerreiro, Mago, Monge, Ninja } from './module/Hero.js';

console.log(new Mago('Gandalf', 1000).attack());
console.log(new Guerreiro('Conan', 34).attack());
console.log(new Monge('Bruce Lee', 32).attack());
console.log(new Ninja('Hattori Hanzo', 28).attack());
