const HtmlWebpackPlugin = require('html-webpack-plugin');
const { ModuleFederationPlugin } = require('webpack').container;

module.exports = {
  entry: './src/warning-alert.js',
  mode: 'development',
  devServer: {
    port: 4203,
  },
  output: {
    publicPath: 'http://localhost:4203/'
  },
  module: {
    rules: [
      {
        test: /\.ico$/,
        loader: 'file-loader',
        options: {
          name: '[name].[ext]',
          outputPath: 'assets',
        },
      }
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './public/index.html',
    }),
    new ModuleFederationPlugin({
      name: 'AlertsComponent',
      filename: 'remoteEntry.js',
      exposes: {
        './WarningAlert': './src/warning-alert.js',
      },
    }),
  ],
  resolve: {
    extensions: ['.js'],
  },
};
