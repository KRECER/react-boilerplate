const prettierOptions = require('./.prettierrc.js');
module.exports = {
  extends: ['react-app', 'plugin:storybook/recommended'],
  overrides: [{
    files: ['public/**/*.html', 'src/**/*.html', 'src/**/*.ts?(x)']
  }],
  parser: '@typescript-eslint/parser',
  plugins: ['html', '@typescript-eslint/eslint-plugin', 'unused-imports', 'prettier'],
  rules: {
    // TODO: change to error step by step
    'no-restricted-globals': ['warn', 'event'],
    'space-before-function-paren': 0,
    'prettier/prettier': [1, prettierOptions],
    'no-unused-vars': 'off',
    'react-hooks/exhaustive-deps': ['warn', {
      additionalHooks: '(useMyCustomHook|useMyOtherCustomHook)'
    }],
    '@typescript-eslint/no-use-before-define': ['warn', {
      functions: true,
      classes: true
    }],
    '@typescript-eslint/no-unused-expressions': 'off',
    '@typescript-eslint/interface-name-prefix': 'off',
    '@typescript-eslint/explicit-module-boundary-types': 'off',
    '@typescript-eslint/no-explicit-any': 'off',
    // '@typescript-eslint/no-empty-function': 'warn',
    'no-multi-spaces': ['warn'],
    eqeqeq: ['warn', 'always'],
    'max-classes-per-file': ['warn', 1],
    'array-callback-return': ['warn', {
      checkForEach: true
    }],
    // marks
    quotes: ['warn', 'single', {
      allowTemplateLiterals: true,
      avoidEscape: true
    }],
    'spaced-comment': ['warn', 'always'],
    'space-before-blocks': ['warn'],
    '@typescript-eslint/no-unused-vars': 'warn',
    'unused-imports/no-unused-imports': 'warn',
    'unused-imports/no-unused-vars': ['warn', {
      vars: 'all',
      varsIgnorePattern: '^_',
      args: 'after-used',
      argsIgnorePattern: '^_'
    }],
    '@typescript-eslint/explicit-function-return-type': 'warn',
    'react/no-unused-prop-types': 'warn',
    'consistent-return': ['warn'],
    camelcase: [0, {
      properties: 'always'
    }],
    'no-underscore-dangle': 'warn',
    'no-console': ['warn', {
      allow: ['warn', 'error']
    }],
    'newline-per-chained-call': 'warn',
    'react/jsx-key': 'warn',
    'no-restricted-syntax': ['error', {
      selector: `ImportDeclaration[source.value=/(@pages|@widgets|@features|@entities)\\u002F.*\\u002F.*/]`,
      message: 'No slice internal modules imports'
    }]
  }
};