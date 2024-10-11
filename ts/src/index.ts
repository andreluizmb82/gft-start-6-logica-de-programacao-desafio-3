import { Guerreiro, Mago, Monge, Ninja } from './module/Hero.js';
import { guerreiro, mago, monge, ninja } from './module/hero2.js';

console.log('\n\nclass Hero-----------------------------------\n');
console.log(new Mago('Gandalf', 1000).attack());
console.log(new Guerreiro('Conan', 34).attack());
console.log(new Monge('Bruce Lee', 32).attack());
console.log(new Ninja('Hattori Hanzo', 28).attack());
console.log('---------------------------------------------');

console.log('\n\ndef hero------------------------------------\n');

console.log(mago('Gandalf', 1000));
console.log(guerreiro('Conan', 35));
console.log(monge('Bruce Lee', 32));
console.log(ninja('Hanzo', 25));

console.log('---------------------------------------------\n\n');
