const js = require('@eslint/js');
const tseslint = require('typescript-eslint');

module.exports = [
  // Base JS rules
  js.configs.recommended,

  // TypeScript rules (для майбутнього коду)
  ...tseslint.configs.recommended,

  // Override for config files
  {
    files: ['eslint.config.cjs'],
    rules: {
      '@typescript-eslint/no-require-imports': 'off',
      'no-undef': 'off',
    },
  },

  {
    ignores: ['node_modules/**', 'dist/**'],
  },
];
