module.exports = {
  env: {
    es6: true,
    node: true,
    mocha: true,
    jest: true,
    shelljs: true,
  },
  extends: 'eslint:recommended',
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  parser: '@babel/eslint-parser',
  parserOptions: {
    ecmaVersion: 2019,
    sourceType: 'module',
  },
  rules: {
    'arrow-parens': 'off',
    'consistent-return': 'off',
    'comma-dangle': 'off',
    'import/no-cycle': 'off',
    'no-useless-escape': 'off',
    'no-prototype-builtins': 'warn',
  },
};
