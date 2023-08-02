module.exports = {
  root: true,
  env: {
    node: true,
  },
  extends: [
    'plugin:vue/vue3-essential',
    '@vue/airbnb',
  ],
  parserOptions: {
    parser: '@babel/eslint-parser',
  },
  rules: {
    indent: 0,
    'no-confusing-arrow': 0,
    'vuejs-accessibility/click-events-have-key-events': 0,
    'brace-style': 0,
    'import/no-extraneous-dependencies': 0,
    'vuejs-accessibility/label-has-for': 0,
    'import/no-cycle': 0,
    'consistent-return': 0,
    'no-console': 0,
    'max-len': 0,
    'vuejs-accessibility/form-control-has-label': 0,
  },
};
