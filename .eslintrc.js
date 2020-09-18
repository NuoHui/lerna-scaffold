module.exports = {
  root: true,
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint', 'prettier'],
  extends: [
    'plugin:@typescript-eslint/recommended',
    'prettier/@typescript-eslint',
    'plugin:prettier/recommended'
  ],
  rules: {
    'ordered-imports': 0,
    'member-ordering': 0,
    'object-literal-sort-keys': 0,
    'type-literal-delimiter': 0,
    'arrow-parens': 0,
    semicolon: [0, 'always'],
    'no-console': 0,
    '@typescript-eslint/no-var-requires': 0,
    '@typescript-eslint/no-unused-vars': 2
  },
  env: {
    browser: true,
    node: true,
    es6: true
  },
  globals: {
    wx: 'readonly'
  }
}
