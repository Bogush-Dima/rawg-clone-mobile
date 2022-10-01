module.exports = function (api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
    plugins: [
      [
        'module-resolver',
        {
          alias: {
            // This needs to be mirrored in tsconfig.json
            app: './src/app',
            entities: './src/entities',
            features: './src/features',
            pages: './src/pages',
            assets: './src/shared/assets',
            components: './src/shared/components',
            constants: './src/shared/constants'
          }
        }
      ]
    ]
  };
};
