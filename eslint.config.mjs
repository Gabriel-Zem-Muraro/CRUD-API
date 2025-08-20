// @ts-check
import eslint from '@eslint/js';
import eslintPluginPrettierRecommended from 'eslint-plugin-prettier/recommended';
import globals from 'globals';
import tseslint from 'typescript-eslint';
import spellcheck from 'eslint-plugin-spellcheck';

export default tseslint.config(
  {
    ignores: ['eslint.config.mjs'],
  },
  eslint.configs.recommended,
  ...tseslint.configs.recommendedTypeChecked,
  eslintPluginPrettierRecommended,
  {
    languageOptions: {
      globals: {
        ...globals.node,
        ...globals.jest,
      },
      sourceType: 'commonjs',
      parserOptions: {
        projectService: true,
        tsconfigRootDir: import.meta.dirname,
      },
    },
  },
  {
    plugins: {
      spellcheck: spellcheck,
    },
    rules: {
      '@typescript-eslint/no-explicit-any': 'off',
      '@typescript-eslint/no-floating-promises': 'warn',
      '@typescript-eslint/no-unsafe-argument': 'warn',
      'spellcheck/spell-checker': ['warn', {
        skipWords: [
          // Palavras técnicas em português
          'usuario', 'usuarios', 'consulta', 'cria', 'novo', 'remove', 'atualiza', 'atualizar',
          'termo', 'modulos', 'idade', 'ativo', 'actived', 'registado', 'consultar',
          'todos', 'nenhum', 'deve', 'ser', 'uma', 'ter', 'pelo', 'menos', 'caracteres',
          'pode', 'exceder', 'mero', 'maior', 'igual', 'menor', 'endere', 'senha',
          'numero', 'resultado', 'encontrado', 'existe', 'banco', 'cadastrado',
          'atualizado', 'rio', 'foi', 'por', 'inteiro', 'verificar', 'este', 'removido', 'sucesso',
          'dotenv', 'req', 'orm', 'bool', 'smallint',
          
          // Tecnologias e frameworks
          'nestjs', 'typeorm', 'postgres', 'dto', 'auth', 'decorators',
          'validator', 'validations', 'eslint', 'tsconfig', 'pwsh',
          
          // Nomes específicos do projeto
          'starya', 'psyco', 'primeira', 'paulo', 'gabriel', 'prodution',
          
          // Palavras técnicas em inglês
          'middleware', 'config', 'spec', 'mjs', 'typeof', 'instanceof'
        ],
        skipIfMatch: [
          'http://[^s]*',
          'https://[^s]*',
          '/^[a-zA-Z_$][a-zA-Z0-9_$]*$/' // variáveis camelCase
        ],
        minLength: 3
      }]
    },
  },
);