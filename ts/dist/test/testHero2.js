import { guerreiro, mago, monge, ninja } from '../module/hero2.js';
import { Test } from './Test.js';
Test.assertEquals('O mago Andre com seus 990 anos de experiência atacou usando magia', mago('Andre', 1000), 'Testa se mago esta usando o ataque magia');
Test.assertEquals('O guerreiro Andre com seus 992 anos de experiência atacou usando espada', guerreiro('Andre', 1000), 'Testa se guerreiro esta usando o ataque espada');
Test.assertEquals('O monge Andre com seus 995 anos de experiência atacou usando artes marciais', monge('Andre', 1000), 'Testa se monge esta usando o ataque artes marciais');
Test.assertEquals('O ninja Andre com seus 994 anos de experiência atacou usando shuriken', ninja('Andre', 1000), 'Testa se ninja esta usando o ataque shuriken');
Test.printSummary();
