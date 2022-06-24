module.exports = function (api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
    env: {
      production: {
        plugins: [
          'react-native-paper/babel',
          'babel-plugin-styled-components',
          [
            'babel-plugin-inline-import',
            {
              extensions: ['.json', '.svg'],
            },
          ],
        ],
      },
    },
  };
};
