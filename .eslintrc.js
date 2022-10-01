module.exports = {
  root: true,
  env: {
    browser: true,
    amd: true,
    node: true,
    es6: true
  },
  plugins: ['@typescript-eslint', 'prettier'],
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:prettier/recommended'
  ],
  rules: {
    ['no-var']: 'error',
    semi: 'error',
    ['no-multi-spaces']: 'error',
    ['space-in-parens']: 'error',
    ['no-multiple-empty-lines']: 'error',
    ['prefer-const']: 'error',
    ['no-use-before-define']: 'error',
    ['prettier/prettier']: [
      'error',
      {
        endOfLine: 'auto'
      }
    ]
  }
};
