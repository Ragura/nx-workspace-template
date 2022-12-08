module.exports = {
  extends: ['@antfu/vue', 'plugin:tailwindcss/recommended', 'plugin:cypress/recommended'],
  plugins: ['tailwindcss'],
  rules: {
    'tailwindcss/no-custom-classname': 'off',
    '@typescript-eslint/prefer-ts-expect-error': 'off',
  },
}