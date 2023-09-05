const TerserPlugin = require('terser-webpack-plugin');

module.exports = async function minimizerPlugin(context, options) {
  return {
    name: 'minimizer-plugin',
    configureWebpack(config, isServer, utils) {
      // Disable cache in CI since it gets evicted too quickly from github actions limits
      //const isCI = process.env.CI;
      //const cacheOptions = isCI ? { cache: false } : {};
      const cacheOptions = { cache: false };

      // Or compress the cache w/ gzip or brotli
      // const cacheOptions = isCI ? { cache: { compression: 'brotli' } } : {};

      // Replace terser with esbuild minify, but only if terser would have been used
      // This still respects the --no-minify flag
      const minimizer = new TerserPlugin({
        minify: TerserPlugin.esbuildMinify,
      });
      const minimizers = config.optimization.minimizer?.map((m) =>
        m instanceof TerserPlugin ? minimizer : m
      );

      return {
        mergeStrategy: { 'optimization.minimizer': 'replace' },
        optimization: {
          minimizer: minimizers,
        },
        ...cacheOptions
      };
    },
  };
};
