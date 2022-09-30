module.exports = {
  root: true,
  env: {
    "browser": true,
    "amd": true,
    "node": true
  },
  plugins: ['@typescript-eslint'],
  extends: ['eslint:recommended', 'plugin:@typescript-eslint/recommended'],
};
