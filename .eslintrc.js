module.exports = {
  env: {
    browser: true,
    es6: true,
    node: true,
  },
  extends: [
    'eslint:recommended',
    'airbnb',
    'airbnb/hooks',
    'plugin:@tanstack/eslint-plugin-query/recommended',
  ],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  parser: '@babel/eslint-parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  plugins: ['react', '@tanstack/query'],
  settings: {
    'import/resolver': {
      'babel-module': {},
    },
  },
  rules: {
    'react/jsx-filename-extension': [
      1,
      {
        extensions: ['.js', '.jsx'],
      },
    ],
    'react/prop-types': [
      'error',
      {
        ignore: ['navigation', 'route'],
      },
    ],
    'implicit-arrow-linebreak': 0,
    'react/jsx-curly-newline': 0,
    'object-curly-newline': 0,
    'operator-linebreak': 0,
    'react/function-component-definition': 0,
    'react/jsx-one-expression-per-line': 0,
    'function-paren-newline': 0,
    'react/jsx-wrap-multilines': 0,
  },
};
