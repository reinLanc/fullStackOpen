import globals from 'globals'
import stylisticJs from '@stylistic/eslint-plugin-js'
import js from '@eslint/js'

export default [
  js.configs.recommended,
  {
    files: ['**/*.js'],
    languageOptions: {
      sourceType: 'module',
      globals: {
        ...globals.node,
      },
      ecmaVersion: 'latest',
    },
    plugins: {
      '@stylistic/js': stylisticJs
    },
    rules: {
      '@stylistic/js/semi': [
        'error',
        'never'
      ],
      '@stylistic/js/indent': [
        'error',
        2
      ],
      '@stylistic/js/linebreak-style': [
        'error',
        'unix'
      ],
      '@stylistic/js/quotes': [
        'error',
        'single'
      ],
      '@stylistic/js/object-curly-spacing': [
        'error',
        'always'
      ],
      'no-trailing-spaces': 'error',
      '@stylistic/js/arrow-spacing': [
        'error', { 'before': true, 'after': true },
      ],
      'eqeqeq': 'error',
      'no-console': 'off',
    },
  },
  {
    ignores: ['dist/**', 'build/**'],
  },
]