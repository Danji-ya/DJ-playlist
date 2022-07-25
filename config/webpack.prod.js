const { merge } = require('webpack-merge');
const common = require('./webpack.common.js');
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');

module.exports = merge(common, {
  mode: "production",
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: [
          {
            loader: 'babel-loader',
            options: {
              presets: ['@babel/preset-env', '@babel/preset-react', '@babel/preset-typescript'],
              plugins: [
                ["@babel/transform-runtime"]
              ]
            },
          },
        ]
      },
    ],
  },
  plugins: [
    // REMOVE: production 디버깅
    // new BundleAnalyzerPlugin()
  ],
  // REMOVE: production 디버깅
  // devtool: 'source-map',
  optimization: {
    splitChunks: {
      cacheGroups: {
        default: false,
        vendor: {
          chunks: 'all',
          name: 'vendor',
          test: /[\\/]node_modules[\\/](react|react-dom|react-router)[\\/]/,
          filename: '[name].[chunkhash].js',
        }
      },
    },
  },
});