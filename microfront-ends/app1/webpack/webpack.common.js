const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const CopyPlugin = require('copy-webpack-plugin')
const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");
const deps = require('../package.json').dependencies;

module.exports = {
  entry: path.resolve(__dirname, '..', './src/index.js'),
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
  },
  module: {
    rules: [
      {
        test: /\.(ts|js)x?$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'babel-loader',
          },
        ],
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.(?:ico|gif|png|jpg|jpeg)$/i,
        type: 'asset/resource',
      },
      {
        test: /\.(woff(2)?|eot|ttf|otf|svg|)$/,
        type: 'asset/inline',
      },
    ],
  },
  output: {
    path: path.resolve(__dirname, '..', './build'),
    filename: 'bundle.js',
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, '..', './src/index.html'),
    }),
    /*new CopyPlugin({
      patterns: [{ from: 'source', to: 'dest'}]
    }),*/
    new ModuleFederationPlugin({
      name: "app1",
      filename: "remoteEntry.js",
      exposes: {
        './ClickCounter': './src/ClickCounter',
      },
      shared: {
        ...deps,
        react: { 
          singleton: true, 
          eager: true, 
          requiredVersion: deps.react 
        },
        'react-dom': {
          singleton: true,
          eager: true,
          requiredVersion: deps['react-dom'],
        },
      },
    })
  ],
  stats: 'errors-only',
}