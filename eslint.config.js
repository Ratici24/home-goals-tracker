import js from '@eslint/js';
import tseslint from 'typescript-eslint';

export default [
  // ignores (ESLint v9 flat config)
  {
    ignores: ['jest.config.cjs', 'prisma/dev.db', 'prisma/dev.db-journal', 'node_modules/**'],
  },

  js.configs.recommended,
  ...tseslint.configs.recommended,

  {
    files: ['**/*.ts'],
    languageOptions: {
      parserOptions: {
        ecmaVersion: 2020,
        sourceType: 'module',
      },
    },
  },
];
