# gft-start-6-logica-de-programacao-desafio-3

## Introdução

Neste repositório você encontrará o primeiro desafio proposto no curso de lógica de programação da GFT Start #6.

## Desafio

### Entendendo o Desafio

Agora é a sua hora de brilhar e construir um perfil de destaque na DIO! Explore todos os conceitos explorados até aqui e replique (ou melhore, porque não?) este projeto prático. Para isso, crie seu próprio repositório e aumente ainda mais seu portfólio de projetos no GitHub, o qual pode fazer toda diferença em suas entrevistas técnicas 😎

Neste repositório, insira todos os links e arquivos necessários para seu projeto, seja um arquivo de banco de dados ou um link para o template no Figma.

Dica: Se o expert forneceu um repositório Github, você pode dar um "fork" no repositório dele para organizar suas alterações e evoluções mantendo uma referência direta ao código-fonte original.

Instruções para entrega

# 3️⃣ Escrevendo as classes de um Jogo

**O Que deve ser utilizado**

- Variáveis
- Operadores
- Laços de repetição
- Estruturas de decisões
- Funções
- Classes e Objetos

## Objetivo:

Crie uma classe generica que represente um herói de uma aventura e que possua as seguintes propriedades:

- nome
- idade
- tipo (ex: guerreiro, mago, monge, ninja )

além disso, deve ter um método chamado atacar que deve atender os seguientes requisitos:

- exibir a mensagem: "o {tipo} atacou usando {ataque}")
- aonde o {tipo} deve ser concatenando o tipo que está na propriedade da classe
- e no {ataque} deve seguir uma descrição diferente conforme o tipo, seguindo a tabela abaixo:

se mago -> no ataque exibir (usou magia)
se guerreiro -> no ataque exibir (usou espada)
se monge -> no ataque exibir (usou artes marciais)
se ninja -> no ataque exibir (usou shuriken)

## Saída

Ao final deve se exibir uma mensagem:

- "o {tipo} atacou usando {ataque}"
  ex: mago atacou usando magia
  guerreiro atacou usando espada

Bons estudos 😉

## Solução Proposta

Com o objetivo de desenvolver o desafio proposto, foram criadas soluções em JavaScript, Python e TypeScript. Foram feitas duas soluções para o desafio proposto em cada uma das linguagens. Já foi codado as soluções em JavaScript e Python. A solução em TypeScript está em andamento.

Abaixo estão as instruções para executar o código de cada uma das soluções.

### JavaScript

Para a solução em JavaScript, foi utilizado o Node.js v20.17.0 para rodar o código.

Para executar o código das soluções propostas, basta abrir o terminal no diretório `./js/src` e digitar os comandos:

```bash
node solution_1.mjs
node solution_2.mjs
```

Para rodar os testes unitários, basta abrir o terminal no diretório `./js/test` e digitar o comando:

```bash
node test_solution_1.mjs
node test_solution_2.mjs
```

### Python

Para a solução em Python, foi utilizado o Python 3.12.6 para rodar o código.

Para executar o código das soluções propostas, basta abrir o terminal no diretório `./python/src` e digitar os comandos:

No Windows:

```bash
python solution_1.py
python solution_2.py
```

No Linux:

```bash
python3 solution_1.py
python3 solution_2.py
```

Para rodar os testes unitários, basta abrir o terminal no diretório `./python/test` e digitar o comando:

No Windows:

```bash
py test_solution_1.py
py test_solution_2.py
```

No Linux:

```bash
python3 test_solution_1.py
python3 test_solution_2.py
```

### TypeScript

**_`Ainda esta em desenvolvimento.`_**
