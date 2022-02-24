module.exports = {
  extends: ['standard-with-typescript', 'plugin:prettier/recommended'],
  plugins: ['prettier', '@typescript-eslint'],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: './tsconfig.json',
    ecmaVersion: 2018,
    createDefaultProgram: true,
  },
  rules: {
    'prettier/prettier': [
      'error',
      {
        endOfLine: 'auto',
      },
    ],
    semi: 'off',
    radix: 'off',
    'func-names': 'off',
    'no-console': 'off',
    'no-shadow': 'off',
    'no-unused-vars': ['error', { args: 'none' }],
    'consistent-return': 'off',
    'no-underscore-dangle': 'off',
    'import/prefer-default-export': 'off',
    'import/no-unresolved': 'off',
    'new-cap': 'off',
    'no-new': 'off',
    'import/extensions': [
      'error',
      'ignorePackages',
      {
        js: 'never',
        jsx: 'never',
        ts: 'never',
        tsx: 'never',
        mjs: 'never',
      },
    ],
    'no-useless-constructor': 'off',
    '@typescript-eslint/no-misused-promises': 'off',
    '@typescript-eslint/strict-boolean-expressions': 'off',
    '@typescript-eslint/no-useless-constructor': 'error',
    '@typescript-eslint/no-extraneous-class': 'off',
    '@typescript-eslint/restrict-template-expressions': 'off',
    'node/no-path-concat': 'off',
  },
  env: {
    browser: true,
    node: true,
    es6: true,
    commonjs: true,
  },
  settings: {
    'import/extensions': ['.js', '.jsx', '.ts', '.tsx'],
    'import/parsers': {
      '@typescript-eslint/parser': ['.ts', '.tsx'],
    },
    'import/resolver': {
      alias: true,
      node: {
        extensions: ['.js', '.jsx', '.ts', '.tsx'],
      },
    },
  },
}
