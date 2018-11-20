module.exports = {
  env: {
    es6: true
  },
  parserOptions: {
    sourceType: 'module',
    ecmaVersion: 2018,
  },
  extends: [
    './rules/core.js',
    './rules/es6.js',
  ].map(require.resolve)
};
