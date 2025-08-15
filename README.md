
## 📋 Pré-requisitos

- **Node.js** >= 18.0.0
- **npm** ou **yarn**
- **Docker** e **Docker Compose**
- **Git**

## 🚀 Instalação

### 1. Clone o repositório
```bash
git clone https://github.com/seu-usuario/primeira-api.git
cd primeira-api
```

### 2. Instale as dependências
```bash
# Com yarn (recomendado)
yarn install

# Ou com npm
npm install
```

### 3. Configure as variáveis de ambiente
```bash
# Copie o arquivo de exemplo
cp .env.example .env

# Edite as configurações
nano .env
```

## 🐘 Configuração do Banco

### 1. Inicie o PostgreSQL com Docker
```bash
# Inicie o banco de dados
docker-compose up -d

# Verifique se está rodando
docker-compose ps
```

### 2. Verificar a conexão
```bash
# Conectar ao banco
docker exec -it primeira-api-postgres psql -U gabriel -d primeira_api_db

# Listar tabelas
\dt

# Sair
\q
```

## 🎮 Como Usar

### 1. Desenvolvimento
```bash
# Modo desenvolvimento (com hot reload)
yarn start:dev

# Ou
npm run start:dev
```

### 2. Produção
```bash
# Build da aplicação
yarn build

# Iniciar em produção
yarn start:prod
```

### 3. Testes
```bash
# Testes unitários
yarn test

# Testes com coverage
yarn test:cov

# Testes e2e
yarn test:e2e
```

## 🔗 Endpoints da API

### Usuários

| Método | Endpoint | Descrição | Autenticação |
|--------|----------|-----------|--------------|
| `GET` | `/users` | Listar todos os usuários | ❌ |
| `GET` | `/users/:id` | Buscar usuário por ID | ❌ |
| `POST` | `/addUser` | Criar novo usuário | ❌ |
| `PATCH` | `/atualizaElemento/:id` | Atualizar campos específicos | ❌ |
| `PUT` | `/AtualizaTodoUsuario/:id` | Atualizar usuário completo | ❌ |
| `DELETE` | `/deleteUser/:id` | Deletar usuário | ❌ |

### Exemplos de Uso

#### Listar usuários
```bash
curl http://localhost:3000/users
```

#### Criar usuário
```bash
curl -X POST http://localhost:3000/addUser
```

#### Buscar usuário por ID
```bash
curl http://localhost:3000/users/1
```

#### Atualizar usuário
```bash
curl -X PUT http://localhost:3000/AtualizaTodoUsuario/1
```

#### Deletar usuário
```bash
curl -X DELETE http://localhost:3000/deleteUser/1
```

## 📁 Estrutura do Projeto
