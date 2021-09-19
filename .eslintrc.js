module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  extends: [
    'airbnb-base',
    'plugin:sonarjs/recommended',
  ],
  globals: {
    afterAll: 'readonly',
    afterEach: 'readonly',
    beforeAll: 'readonly',
    beforeEach: 'readonly',
    describe: 'readonly',
    expect: 'readonly',
    test: 'readonly',
  },
  parserOptions: {
    ecmaVersion: 12,
    sourceType: 'module',
  },
  plugins: [
    'sonarjs',
    'jest',
  ],
  rules: {
    'max-len': [
      'error',
      {
        code: 120,
        tabWidth: 2,
      },
    ],
  },
};
