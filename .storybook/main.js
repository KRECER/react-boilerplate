const custom = require('../webpack.config');
module.exports = {
  stories: ['../src/**/*.stories.mdx', '../src/**/*.stories.@(js|jsx|ts|tsx)'],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-interactions',
  ],
  framework: {
    name: '@storybook/react-webpack5',
    options: {},
  },
  webpackFinal: (config) => {
    config.module.rules.push({
      test: /\.stories\.tsx?$/,
      use: [
        {
          loader: require.resolve('@storybook/source-loader'),
          options: {
            parser: 'typescript',
          },
        },
      ],
      enforce: 'pre',
    });
    return {
      ...config,
      module: {
        ...config.module,
        rules: [...config.module.rules, ...custom.module.rules],
      },
      resolve: {
        ...config.resolve,
        ...custom.resolve,
      },
      plugins: [...config.plugins, ...custom.plugins],
    };
  },
  docs: {
    autodocs: true,
  },
};
