import { Guerreiro, Mago, Monge, Ninja } from '../module/Hero.js';
import { Test } from './Test.js';
Test.assertEquals('O mago Andre com seus 990 anos de experiência atacou usando magia', new Mago('Andre', 1000).attack(), 'Testa se mago esta usando o ataque magia');
Test.assertEquals('O guerreiro Andre com seus 992 anos de experiência atacou usando espada', new Guerreiro('Andre', 1000).attack(), 'Testa se guerreiro esta usando o ataque espada');
Test.assertEquals('O monge Andre com seus 993 anos de experiência atacou usando artes marciais', new Monge('Andre', 1000).attack(), 'Testa se monge esta usando o ataque artes marciais');
Test.assertEquals('O ninja Andre com seus 994 anos de experiência atacou usando shuriken', new Ninja('Andre', 1000).attack(), 'Testa se ninja esta usando o ataque shuriken');
Test.printSummary();
