// @flow
module.exports = function(api) {
  api.cache(true);
  const presets = [
    [
      '@babel/preset-env',
      {
        targets: {
          edge: '17',
          firefox: '60',
          chrome: '67',
          safari: '11.1',
        },
        useBuiltIns: 'usage',
      },
    ],
    '@babel/preset-react',
    '@babel/preset-flow',
  ];
  const plugins = ['@babel/plugin-transform-flow-comments'];

  return {
    presets,
    plugins,
    ignore: [
      "**/__tests__/",
      "**/*.story.js",
      "**/*.schema.js",
    ]
  };
};
