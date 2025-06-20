module.exports = {
  semi: true,
  singleQuote: true,
  trailingComma: 'all',
  bracketSpacing: true,
  jsxSingleQuote: true,
  proseWrap: 'always',
  printWidth: 100,
  endOfLine: 'crlf',
  overrides: [
    {
      files: ['.lintstagedrc'],
      options: {
        parser: 'json',
      },
    },
  ],
};
