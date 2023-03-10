/** @type {import("prettier").Config} */
module.exports = {
  arrowParens: 'avoid',
  printWidth: 120,
  semi: true,
  singleQuote: true,
  tabWidth: 2,
  trailingComma: 'es5',
  plugins: [require.resolve('prettier-plugin-tailwindcss'), require.resolve('prettier-plugin-prisma')],
};
