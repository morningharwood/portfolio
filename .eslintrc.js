module.exports = {
  extends: require.resolve('./apps/morningharwood/node_modules/eslint-config-fusion/index.js'),
  env: {
    node: true
  },
  settings: {
    'import/resolver': {
      alias: {
        map: [
          ['component/Header', './src/components/Header.js'],
        ],
        extensions: ['.js']
      }
    }
  }
};
