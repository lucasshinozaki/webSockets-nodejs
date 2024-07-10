# Curso de WebSocket com Socket.IO e MongoDB

Este repositório contém o código desenvolvido durante o curso sobre WebSocket, onde aprendi a implementar comunicações e armazenar dados em tempo real utilizando Socket.IO e MongoDB.

## Funcionalidades

- **Implementação do protocolo WebSocket com Socket.IO**
  - Explorar as possibilidades do Socket.IO:
    - Servidor emitir para um ou vários clientes
    - Reconhecimento (acknowledgements)
    - Salas do Socket.IO
    - Interação do servidor com diversas páginas
- **Aplicação de conceitos de front-end e back-end**
- **Utilização do driver do Node.js para MongoDB**
- **Aplicação do fluxo de cadastro, login e armazenamento de JWT**
  - Cadastro de senhas criptografadas
  - Autenticação de usuários e geração de JWT no servidor
  - Armazenamento do JWT nos cookies
- **Controle de acessos**
  - Utilização de middlewares para verificar a autenticidade do cliente
  - Criação de um namespace para registrar o middleware
- **Controle de informações de forma local**
  - Criação de uma lista local para controlar as conexões dos documentos
  - Utilização de `socket.data` para armazenar informações no socket

## Tecnologias Utilizadas

O projeto utiliza uma combinação de tecnologias modernas para construir uma aplicação robusta e eficiente. Abaixo estão as principais tecnologias e bibliotecas usadas:

- **Node.js**: Ambiente de execução JavaScript server-side.
- **Express**: Framework web para Node.js que simplifica a construção de servidores.
- **Socket.IO**: Biblioteca que permite comunicação bidirecional em tempo real entre clientes e servidores.
- **MongoDB**: Banco de dados NoSQL orientado a documentos, utilizado para armazenar dados em tempo real.
- **Mongoose**: Biblioteca ODM (Object Data Modeling) para MongoDB e Node.js, que facilita a interação com o banco de dados.
- **jsonwebtoken**: Biblioteca para gerar e verificar JSON Web Tokens (JWT), utilizados para autenticação.
- **bcrypt**: Biblioteca para criptografia de senhas, garantindo a segurança dos dados dos usuários.
- **dotenv**: Biblioteca para carregar variáveis de ambiente a partir de um arquivo `.env`.
- **Nodemon**: Ferramenta que reinicia automaticamente o servidor quando alterações nos arquivos são detectadas durante o desenvolvimento.

## Como Executar o Projeto

1. **Clone o repositório:**
   ```bash
   git clone endereço_do_repositorio
   cd alura-docs-main
   ```

2. **Instale as dependências:**
   ```bash
   npm install
   ```

3. **Configure as variáveis de ambiente:**
   Crie um arquivo `.env` na raiz do projeto e adicione as variáveis necessárias (DB_CONNECT = servirdor mongoAtlas e SECRETO_JWT código de criptografia ).

4. **Execute o servidor:**
   ```bash
   npm run dev
   ```