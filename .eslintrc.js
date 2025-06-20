module.exports = {
  extends: [
    'eslint:recommended',
    'plugin:prettier/recommended',
    'plugin:react/recommended',
    // 'plugin:mobx/recommended',
    'plugin:@typescript-eslint/eslint-recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:import/recommended',
    'plugin:import/typescript',
    // 'plugin:jest-dom/recommended',
  ],
  env: {
    browser: true,
    commonjs: true,
    es6: true,
    node: true,
  },
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 2021,
    sourceType: 'module',
    ecmaFeatures: { jsx: true, arrowFunctions: true },
  },
  plugins: [
    '@typescript-eslint',
    'prettier',
    'unused-imports',
    'react',
    // 'mobx',
    'jest-dom',
    'eslint-plugin-tsdoc',
  ],
  settings: {
    react: {
      version: 'detect',
    },
    'import/parser': {
      '@typescript-eslint/parser': ['.ts', '.tsx'],
    },
    'import/resolver': {
      typescript: {},
      node: {
        extensions: ['.js', '.jsx', '.ts', '.tsx'],
        paths: ['./src'],
      },
    },
  },
  rules: {
    // eslint
    // "max-len": ["warn", { "code": 80 }],
    'no-unused-vars': 'off',
    'sort-imports': 'off',
    // ts
    '@typescript-eslint/no-unused-vars': 'off',
    '@typescript-eslint/ban-ts-comment': 'warn',
    '@typescript-eslint/consistent-type-imports': [
      'warn',
      {
        prefer: 'type-imports',
        fixStyle: 'inline-type-imports',
      },
    ],
    // unused-imports
    'unused-imports/no-unused-imports': 'warn',
    'unused-imports/no-unused-vars': [
      'warn',
      { vars: 'all', varsIgnorePattern: '^_', args: 'after-used', argsIgnorePattern: '^_' },
    ],
    // react
    'react/react-in-jsx-scope': 'off',
    // mobx
    // 'mobx/no-anonymous-observer': 'off',
    // import
    'import/order': [
      'warn',
      {
        groups: ['builtin', 'external', 'internal', 'parent', 'sibling', 'index', 'type', 'object'],
        'newlines-between': 'always',
        alphabetize: {
          order: 'asc',
          caseInsensitive: true,
        },
        pathGroups: [
          {
            pattern: '{react,react-dom,react-router-dom,react-use,react-i18next}',
            group: 'builtin',
            position: 'after',
          },
          // {
          //   pattern: '{@testing-library,@testing-library/**}',
          //   group: 'builtin',
          //   position: 'after',
          // },
          // {
          //   pattern: '{mobx,mobx-react-lite}',
          //   group: 'builtin',
          //   position: 'after',
          // },
            //FIXME: далее ниже нужно править эту хуету
          {
            pattern:
              '{@app-core,@app-core/**,@app-api,@app-api/**,@app-controllers,@app-controllers/**,@app-stores,@app-stores/**,@app-models,@app-models/**}',
            group: 'internal',
            position: 'before',
          },
          {
            pattern: '{@app-components,@app-components/**,@app-scenes,@app-scenes/**}',
            group: 'internal',
            position: 'before',
          },
          {
            pattern: '@app/shared,@app-shared/**',
            group: 'internal',
            position: 'after',
          },
          {
            pattern: '{@app-images,@app-images/**,@app-styles,@app-styles/**}',
            group: 'internal',
            position: 'after',
          },
          {
            pattern: './*.less',
            group: 'sibling',
            position: 'after',
          },
        ],
        pathGroupsExcludedImportTypes: ['builtin'],
      },
    ],
    // jest-dom (https://github.com/testing-library/eslint-plugin-jest-dom#supported-rules)
    'jest-dom/prefer-checked': 'error',
    'jest-dom/prefer-enabled-disabled': 'error',
    'jest-dom/prefer-required': 'error',
    'jest-dom/prefer-to-have-attribute': 'error',
    // TSDoc
    'tsdoc/syntax': 'warn',
  },
  overrides: [
    {
      files: ['*.js'],
      rules: {
        '@typescript-eslint/no-var-requires': 'off',
      },
    },
  ],
  ignorePatterns: [
    'build',
    'node_modules',
    '.snapshots',
    '*.test.js',
    '*.setup.js',
    '*.min.js',
    '*.d.ts',
    '*.yml',
    'src/api/services/index.ts',
  ],
};
