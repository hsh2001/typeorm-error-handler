// @ts-check

const eslint = require('@eslint/js');
const tseslint = require('typescript-eslint');

exports = tseslint.config(
  eslint.configs.recommended,
  ...tseslint.configs.strict,
  ...tseslint.configs.stylistic,
  {
    ignores: ['dist/', 'node_modules/'],
  },
);
