
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
| `GET` | `/users` | Listar todos os usuários | ✅ |
| `GET` | `/users/:id` | Buscar usuário por ID | ✅ |
| `POST` | `/addUser` | Criar novo usuário | ✅ |
| `PATCH` | `/atualizaElemento/:id` | Atualizar campos específicos | 🔄 |
| `PUT` | `/AtualizaTodoUsuario/:id` | Atualizar usuário completo | 🔄 |
| `DELETE` | `/deleteUser/:id` | Deletar usuário | 🔄 |

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

```bash
primeira-api/
├── docker/                      # Configurações Docker
│   └── postgres/
│       └── init/
│           └── 01-init.sql      # Script de inicialização do DB
├── src/                         # Código fonte
│   ├── modulos/                 # Módulos da aplicação
│   │   └── users/               # Gerenciamento de usuários
│   │       ├── domain/          # Camada de domínio
│   │       │   ├── entities/    # Entidades
│   │       │   └── services/    # Serviços de domínio
│   │       ├── dto/             # Data Transfer Objects
│   │       ├── user.controller.ts
│   │       └── users.module.ts
│   ├── app.module.ts            # Módulo principal
│   └── main.ts                  # Ponto de entrada
├── docker-compose.yml           # Configuração Docker Compose
├── package.json                 # Dependências e scripts
├── tsconfig.json                # Configuração TypeScript
└── README.md                    # Este arquivo
```

## 🎯 Funcionalidades

- ✅ **CRUD completo** de usuários
- ✅ **Validação de dados** com class-validator
- ✅ **Autenticação JWT** 
- ✅ **Tratamento de erros** personalizado
- ✅ **Logs estruturados**
- ✅ **Documentação** da API
- ✅ **Testes automatizados**
- ✅ **Docker** para desenvolvimento
- ✅ **TypeScript** para type safety

## 🛡️ Segurança

- **Validação** rigorosa de entrada
- **Sanitização** de dados
- **Rate limiting** (em desenvolvimento)
- **CORS** configurado
- **Headers** de segurança

## 📊 Status do Projeto

- ✅ **API Base** - Completa
- ✅ **CRUD Usuários** - Completa
- ✅ **Banco PostgreSQL** - Configurado
- ✅ **Docker** - Configurado
- ✅ **Autenticação JWT** - Em desenvolvimento

 ## 🤝 Contribuição

1. **Fork** o projeto
2. **Crie** uma branch para sua feature (`git checkout -b feature/AmazingFeature`)
3. **Commit** suas mudanças (`git commit -m 'Add some AmazingFeature'`)
4. **Push** para a branch (`git push origin feature/AmazingFeature`)
5. **Abra** um Pull Request

## 📝 Licença

Este projeto está sob a licença **MIT**. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.

## 👨‍💻 Autor

**Gabriel** - [Gabriel-Zem-Muraro](https://github.com/Gabriel-Zem-Muraro)

## 🙏 Agradecimentos

- **NestJS** pela excelente documentação
- **TypeORM** pela facilidade de uso
- **PostgreSQL** pela robustez
- **Docker** pela praticidade

---

⭐ **Se este projeto te ajudou, deixe uma estrela!**



