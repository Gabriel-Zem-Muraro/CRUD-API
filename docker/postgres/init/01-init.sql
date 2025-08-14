-- Script de inicialização do banco de dados
-- Este arquivo será executado automaticamente quando o container for criado

-- Conectar ao banco
\c primeira_api_db;

-- Criar tabela de usuários
CREATE TABLE IF NOT EXISTS users (
    id SERIAL PRIMARY KEY,
    idade SMALLINT NOT NULL,
    name VARCHAR(100) NOT NULL,
    email VARCHAR(255) UNIQUE NOT NULL,
    password VARCHAR(255) NOT NULL,
    is_active BOOLEAN DEFAULT true,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Inserir usuários de exemplo
INSERT INTO users (name, idade, email, password) 
VALUES 
  ('Admin User', 21, 'gabriel@gmail.com', 'senha123'),
  ('Client User', 18, 'pedro@gmail.com', 'senha12345')
ON CONFLICT (email) DO NOTHING;
