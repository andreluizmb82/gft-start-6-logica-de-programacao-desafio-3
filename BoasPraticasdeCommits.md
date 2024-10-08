## Motivação

Pretendo aprender a criar boas práticas de commits. Para isso, estou seguindo este documento gerado pelo ChatGPT, ferramenta que estou usando para acelerar o processo de aprendizado.

# 💡 Boas Práticas de Commits

## 1. **Comits Pequenos e Frequentes**:

- **Ideia**: Realize commits sempre que completar uma pequena unidade de trabalho ou lógica funcional. Isso ajuda a manter o histórico mais limpo e a rastrear alterações de maneira eficiente.
- **Exemplo**: Fez uma pequena correção no layout? Commit. Terminou de implementar um componente? Commit.
- **Benefícios**: Mais fácil rastrear mudanças específicas e reverter caso haja problema.

## 2. **Commits Atômicos**:

- **Ideia**: Cada commit deve fazer apenas **uma** coisa. Por exemplo, um commit para "Criar componente de cabeçalho" e outro para "Adicionar estilo ao cabeçalho".
- **Exemplo**: Se precisar corrigir um bug e adicionar uma nova funcionalidade, crie commits separados.
- **Benefícios**: Clareza no histórico do git e maior controle sobre as alterações.

## 3. **Mensagens de Commit Claras e Descritivas**:

- **Ideia**: Descreva claramente o que o commit faz, preferindo frases no imperativo, como "Adiciona suporte a tema escuro".
- **Exemplo**:
  ```
  git commit -m "Adiciona validação de formulário no componente de login"
  ```
- **Benefícios**: Ajuda a entender rapidamente o que cada commit faz sem precisar abrir o código.

## 4. **Commits Relacionados a Funcionalidades**:

- **Ideia**: Se for implementar uma funcionalidade completa, como "Criar sistema de autenticação", você pode quebrar em commits menores, mas todos com um contexto relacionado.
- **Exemplo**:
  - `Adicionar formulário de login`
  - `Implementar lógica de autenticação`
  - `Estilizar formulário de login`
- **Benefícios**: Facilita a organização de commits por funcionalidades.

## 5. **Commits de Refatoração e Correção Separados**:

- **Ideia**: Mantenha commits de refatoração e de correção de bugs separados dos commits que adicionam novas funcionalidades.
- **Exemplo**:
  - `Refatora a estrutura de pastas`
  - `Corrige bug na validação do formulário`
- **Benefícios**: Evita confusão e facilita o entendimento do histórico.

## 6. **Títulos e Descrições para Commits Maiores**:

- **Ideia**: Para mudanças que exigem mais detalhes, adicione uma descrição mais longa.
- **Exemplo**:

  ```
  git commit -m "Adiciona suporte a tema escuro

  - Adiciona botão de alternância de tema
  - Implementa persistência de tema no localStorage
  - Ajusta paleta de cores no CSS"
  ```

- **Benefícios**: Facilita o entendimento de commits com várias alterações.

## 7. **Comits em Lote: Use com Cuidado!**

- **Quando Usar**: Quando fizer pequenas alterações em documentos ou em refatorações que afetam várias partes sem alterar o comportamento do código.
- **Cuidados**: Faça um commit em lote apenas quando for garantir que todas as mudanças fazem parte de um mesmo contexto.

## 8. **Convenção de Commits Melhorada**

#### Contexto:

- Manter um histórico de commits organizado e descritivo é essencial para facilitar o entendimento das mudanças no projeto. A escolha de uma boa convenção de commits ajuda a equipe a entender rapidamente o que foi feito, por quem e por quê, além de proporcionar rastreabilidade e maior clareza nas revisões de código.

#### **Tipos de Commits:**

- Esta tabela define os tipos de commits que serão utilizados no projeto. Cada tipo deve ser utilizado conforme o objetivo da alteração feita no código.

| Tipo de Commit | Descrição                                                             | Exemplo                                               |
| -------------- | --------------------------------------------------------------------- | ----------------------------------------------------- |
| `feat`         | Adiciona uma nova funcionalidade ao projeto.                          | `feat(auth): add JWT authentication`                  |
| `fix`          | Corrige um bug ou problema no projeto.                                | `fix(api): correct endpoint response`                 |
| `docs`         | Altera a documentação do projeto.                                     | `docs: update README.md for new features`             |
| `style`        | Realiza mudanças na aparência, sem alterar a funcionalidade.          | `style: format code with Prettier`                    |
| `refactor`     | Realiza mudanças no código que não alteram a funcionalidade.          | `refactor(user-service): simplify user data handling` |
| `test`         | Adiciona ou modifica testes no projeto.                               | `test(auth): add unit tests for login`                |
| `chore`        | Tarefas de manutenção ou ajustes que não afetam o código de produção. | `chore: update npm dependencies`                      |
| `perf`         | Melhorias de desempenho do código.                                    | `perf(api): improve data fetching speed`              |
| `build`        | Mudanças no sistema de build ou em dependências.                      | `build: add Dockerfile`                               |
| `revert`       | Reverte um commit anterior.                                           | `revert: revert commit abc123`                        |

### Estrutura da Mensagem de Commit

#### **Contexto:**

- Para garantir que a mensagem de commit seja clara e informativa, é importante seguir uma estrutura bem definida. Uma mensagem de commit bem formatada facilita o entendimento das mudanças, mesmo que você volte a ela meses depois. Veja abaixo como estruturar uma mensagem de commit ideal para este projeto:

#### **Estrutura:**

- **Título**: Um resumo curto (máximo de 50 caracteres).
- **Corpo (opcional)**: Explicação mais detalhada da mudança (máximo de 72 caracteres por linha). Use quando precisar explicar o porquê da mudança.
- **Rodapé (opcional)**: Informções adicionais, como fechamento de issues ou referências a tickets.
  - **Fechamento de Issues**: Use palavras-chave como `Closes`, `Fixes`, ou `Resolves` seguidas do número da issue para indicar que a mudança resolve um problema aberto. Isso ajuda a manter o controle de issues diretamente no histórico de commits. Exemplo: `Closes #123`.
  - **Referências a Tickets**: Inclua referências a tickets ou tarefas no sistema de gestão do projeto, como `Refs #456`, para facilitar o rastreamento do progresso e entender o contexto do commit.

#### **Exemplo**:

```
feat(auth): add JWT authentication

This commit adds JWT-based authentication to the login endpoint.
Users can now securely log in and receive a token for future requests.

Closes #45
```

#### **Comando git**

```
git commit -m "feat(auth): add JWT authentication" -m "This commit adds JWT-based authentication to the login endpoint. Users can now securely log in and receive a token for future requests." -m "Closes #45"
```

- Explicação:
  1.  O primeiro -m é o título principal do commit.
  2.  Os -m seguintes são para adicionar linhas no corpo da mensagem e o rodapé.

## 9. **Sugestão de Mensagem de Commit**

Esse é um exemplo de uma mensagem de commit aceitável:

```
docs: update to README.md and addition of the document BoasPráticasdeCommits.md

This commit adds content to README.md and includes in the project
documentation the document BoasPráticasdeCommits.md, which indicates the
good commit practices that will be implemented in this challenge.
```

Mas ele pode ser melhorado, veja:

```
docs: update README.md and add BoasPráticasdeCommits.md

- Added good commit practices to README.md.
- Included BoasPráticasdeCommits.md as part of the documentation.
```

Análise e Ajustes:
Título Resumido e Claro:

Usei update para indicar a atualização no README e add para o novo documento.
A separação por and conecta as duas principais mudanças de maneira objetiva.
Descrição em Listas:

Detalhei as mudanças em dois pontos: README.md e o novo documento. Isso facilita o entendimento para quem estiver revisando e rastreando alterações.
Dica de Estilo:

Prefira manter os verbos no infinitivo (imperativo) em inglês, como add, update, remove. Isso segue a convenção mais usada para commits e mantém a mensagem objetiva e formal.
Evite Descrever de Forma Redundante:

Frases como “which indicates the good commit practices that will be implemented in this challenge” podem ser excessivas. A ideia é focar no que foi feito agora, pois o objetivo do commit deve ser fácil de entender em uma leitura rápida.
No geral, a mensagem original estava boa, mas esses pequenos ajustes podem deixar a comunicação do seu commit mais direta e clara! 😊

## 10. **Quadro Visual para Comandos Git**

### Contexto:

O Git é uma ferramenta de controle de versão poderosa, mas para quem está começando, a quantidade de comandos e opções pode ser confusa. Para facilitar o aprendizado e o uso correto dos comandos, este quadro visual apresenta os principais comandos utilizados no fluxo de trabalho Git, ajudando a compreender suas funções e quando utilizá-los.

### Quadro Visual de Comandos Git:

| **Comando**                | **Descrição**                                                                                     | **Quando Usar**                                                                                       |
| -------------------------- | ------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------- |
| `git init`                 | Inicializa um novo repositório Git no diretório atual.                                            | Use ao começar um novo projeto do zero, para iniciar o versionamento do código.                       |
| `git clone <url>`          | Clona um repositório remoto para um diretório local.                                              | Use para baixar uma cópia de um repositório existente.                                                |
| `git add <arquivo/pasta>`  | Adiciona arquivos ou pastas específicos à área de staging.                                        | Use para preparar arquivos para o commit.                                                             |
| `git add .`                | Adiciona todas as mudanças feitas no diretório atual para a área de staging.                      | Use quando deseja adicionar todas as mudanças no projeto para o próximo commit.                       |
| `git commit -m "mensagem"` | Salva as alterações no histórico do Git com uma mensagem descritiva.                              | Use para registrar mudanças com uma mensagem clara e objetiva.                                        |
| `git status`               | Mostra o status atual do repositório (arquivos modificados, novos arquivos, etc.).                | Use para ver o que está acontecendo no repositório antes de um commit ou push.                        |
| `git log`                  | Exibe o histórico de commits do repositório.                                                      | Use para visualizar o histórico completo dos commits e suas mensagens.                                |
| `git push`                 | Envia os commits locais para o repositório remoto (ex.: GitHub, GitLab, etc.).                    | Use para sincronizar as mudanças locais com o repositório remoto.                                     |
| `git pull`                 | Puxa as mudanças do repositório remoto para o diretório local.                                    | Use para trazer atualizações remotas para o repositório local, garantindo estar atualizado.           |
| `git branch`               | Lista todas as branches no repositório e indica a branch ativa.                                   | Use para verificar as branches disponíveis e identificar em qual branch você está.                    |
| `git checkout <branch>`    | Alterna para uma branch específica no repositório.                                                | Use para trocar de branch no projeto e trabalhar em funcionalidades paralelas.                        |
| `git merge <branch>`       | Mescla a branch especificada com a branch ativa.                                                  | Use para integrar mudanças de uma branch específica à branch atual.                                   |
| `git stash`                | Salva temporariamente mudanças não commitadas para poder alternar branches sem perder o trabalho. | Use quando precisar trocar de branch, mas ainda tem mudanças que não deseja fazer commit.             |
| `git reset`                | Desfaz mudanças na área de staging ou em commits específicos.                                     | Use para reverter alterações antes de fazer um commit ou para voltar a um estado anterior do projeto. |
| `git revert <commit>`      | Reverte as mudanças de um commit específico no histórico.                                         | Use para desfazer as alterações feitas por um commit anterior, criando um novo commit de reversão.    |

## 11. 💡 Fluxo Ideal para Commits

- **Contexto:**
  - O fluxo de commits define como e quando as mudanças devem ser registradas no histórico do Git. Seguir um fluxo de commits adequado ajuda a manter a linearidade e o entendimento do progresso no desenvolvimento. Aqui está um fluxo sugerido para manter o repositório limpo e organizado:

1. **Pequenas Alterações** ➡️ **Commits Frequentes**
2. **Funcionalidades Completas** ➡️ **Push para o repositório**
3. **Commits em Lote** ➡️ **Evite ao máximo** (A menos que seja uma documentação ou refatoração específica)

Dica:
Manter um fluxo de commits organizado faz com que o histórico do seu repositório se pareça com uma linha do tempo clara e objetiva, facilitando o trabalho em equipe e o rastreamento das alterações para futuras manutenções.
