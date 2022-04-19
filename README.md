# decompose-numbers
App desenvolvido para decompor números inteiros. foi desenvolvido com Node, Typescript, Express, e Jest.

Foi realizado o deploy do projeto no Heroku [click qui](https://stormy-ridge-87001.herokuapp.com/) para realizar testes.

## Começando

Para executar este projeto em desenvolvimento, você precisará ter um ambiente básico com o NodeJS instalado (Estou desenvolvendo ele na versão v16.14.2).

### Instalando

#### Clonando o Repositório

```
$ git clone https://github.com/iannisacksson/decompose-numbers.git

cd decompose-numbers
```

#### Instalando dependências

```
$ yarn
```

_ou_

```
$ npm install
```

#### Executando o projeto na máquina

Com todas as dependências instaladas agora você pode executar o back-end:

```
$ yarn dev:server
```

_ou_

```
$ npm run dev:server
```

Quando estiver em execução no console onde está rodando o projeto irá aparecer a seguinte mensagem "🚀️ Server running at http://localhost:3333"

#### Rodando testes

```
$ yarn test
```

_ou_

```
$ npm test
```

## Executando no terminal

Para executar a função de decompor números pelo terminal, basta rodar o comando:

```
$ yarn run:terminal
```
_ou_

```
$ npm run run:terminal
```

E no console deve retornar os seguintes valores: 

> decompose-numbers@1.0.0 run:terminal
> ts-node-dev src/index.ts

```
[INFO] 12:08:32 ts-node-dev ver. 1.1.8 (using ts-node ver. 9.1.1, typescript ver. 4.6.3)
Número de entrada: 45
Números divisores: 1,3,5,9,15,45
Divisores primos: 1,3,5
```

Para alterar o número basta acessar a pasta src/index.ts. Dentro é possível ver um método `run(45)`, para testar com novos valores só é preciso alterar o número do método.
