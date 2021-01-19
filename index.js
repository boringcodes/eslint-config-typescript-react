module.exports = {
  // https://github.com/typescript-eslint/typescript-eslint/blob/master/docs/getting-started/linting/README.md#configuration
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint'],
  parserOptions: {
    project: './tsconfig.json',
  },
  env: {
    es6: true,
    browser: true,
    node: true,
  },

  extends: [
    // https://github.com/standard/eslint-config-standard-with-typescript
    'standard-with-typescript',

    // https://github.com/prettier/eslint-config-prettier#example-configuration
    'prettier',
    'prettier/@typescript-eslint',
    'prettier/react',
    'prettier/standard',
  ],
};
