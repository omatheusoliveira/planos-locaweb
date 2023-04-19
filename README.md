
# Frontend - Planos - Locaweb

- O projeto em questão, foi feito o deploy no S3 da AWS para melhor visualização, para conferir, [clique aqui](http://choose-plan-locaweb.s3-website-sa-east-1.amazonaws.com).

## Descrição:
```
Pequeno projeto para comprar um serviço de hosting, feito com Vue 2, Tailwind, Vuex como 
gerenciador de estado e JWT como autenticação
```

## Tecnologias usadas: 
```
Vue 2 | Tailwind | Axios | Vuex | Vue router
```

## Itens obrigatórios: 
```
Vue: 2 | Node: 18.15 
```

## Inicializando o projeto

**Passo 1:**

Na raiz do projeto, execute este comando para instalar as dependências:

```
npm install
```

**Passo 2:**

Na raiz do projeto, crie um arquivo chamado .env, para receber a url da api, ela fica setada no .env por questões de segurança:
> No projeto em questão, foi usado a api https://fakestoreapi.com

```
VUE_APP_BASE_URL=url
```

**Passo 3:**

Para rodar o projeto, execute os seguintes comandos:

```
npm run serve // para executar a aplicação
```
