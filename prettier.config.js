// https://prettier.io/docs/en/options.html
/** @type {import('prettier').RequiredOptions} */
module.exports = {
  trailingComma: 'es5',
  bracketSpacing: true,
  tabWidth: 4,
  semi: true,
  singleQuote: true,
  arrowParens: 'always',
  printWidth: 140,
  overrides: [
    {
      files: 'Routes.*',
      options: {
        printWidth: 999,
      },
    },
  ],
}
