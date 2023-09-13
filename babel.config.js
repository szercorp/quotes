module.exports = function (api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
    plugins: [
      [
        'module-resolver',
        {
          root: ['./src'],
          alias: {
            Q: './src',
          },
        },
      ],
      ['react-native-reanimated/plugin'],
    ],
  };
};
