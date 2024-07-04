
---

# API Simples em TypeScript com Express

## Descrição

Esta é uma API simples desenvolvida com TypeScript e Express. O objetivo deste projeto é demonstrar habilidades técnicas na criação de uma API RESTful, utilizando boas práticas de modularização de código, tipagem estática e organização de projeto.

## Funcionalidades

A API possui as seguintes funcionalidades para gerenciamento de usuários:

- **GET /api/users**: Retorna todos os usuários.
- **GET /api/users/:id**: Retorna um usuário específico com base no ID fornecido.
- **POST /api/users**: Cria um novo usuário.
- **PUT /api/users/:id**: Atualiza um usuário existente com base no ID fornecido.
- **DELETE /api/users/:id**: Deleta um usuário com base no ID fornecido.

## Estrutura do Projeto

```
api/
├── node_modules/
├── src/
│   ├── controllers/
│   │   └── userController.ts
│   ├── routes/
│   │   └── userRoutes.ts
│   ├── index.ts
├── .env
├── package.json
└── tsconfig.json
```

- **src/controllers/userController.ts**: Contém a lógica dos controladores para as rotas de usuários.
- **src/routes/userRoutes.ts**: Define as rotas de usuários e mapeia para os controladores correspondentes.
- **src/index.ts**: Ponto de entrada do aplicativo, configura o servidor Express e carrega as rotas.

## Tecnologias Utilizadas

- [Node.js](https://nodejs.org/)
- [Express](https://expressjs.com/)
- [TypeScript](https://www.typescriptlang.org/)
- [dotenv](https://github.com/motdotla/dotenv)

## Instalação e Execução

### Pré-requisitos

- Node.js (v12 ou superior)
- npm (v6 ou superior)

### Passos para Configuração

1. **Clone o repositório**

   ```sh
   git clone https://github.com/seu-usuario/nome-do-repositorio.git
   cd nome-do-repositorio
   ```

2. **Instale as dependências**

   ```sh
   npm install
   ```

3. **Configure as variáveis de ambiente**

   Crie um arquivo `.env` na raiz do projeto e adicione a variável de ambiente para a porta:

   ```
   PORT=3000
   ```

4. **Execute a aplicação**

   ```sh
   npm run dev
   ```

   A aplicação estará rodando em `http://localhost:3000`.

## Endpoints

### GET /api/users

Retorna todos os usuários.

#### Exemplo de Resposta

```json
"Get all users"
```

### GET /api/users/:id

Retorna um usuário específico com base no ID fornecido.

#### Parâmetros

- `id` (string): O ID do usuário.

#### Exemplo de Resposta

```json
"Get user 1"
```

### POST /api/users

Cria um novo usuário.

#### Exemplo de Resposta

```json
"Create user"
```

### PUT /api/users/:id

Atualiza um usuário existente com base no ID fornecido.

#### Parâmetros

- `id` (string): O ID do usuário.

#### Exemplo de Resposta

```json
"Update user 1"
```

### DELETE /api/users/:id

Deleta um usuário com base no ID fornecido.

#### Parâmetros

- `id` (string): O ID do usuário.

#### Exemplo de Resposta

```json
"Delete user 1"
```

## Contribuição

Este projeto é apenas uma demonstração técnica e não está aberto para contribuições externas. Sinta-se à vontade para usar este código como base ou referência para seus próprios projetos.

## Licença

Este projeto não possui uma licença específica. É apenas um exemplo para fins educacionais.

---
