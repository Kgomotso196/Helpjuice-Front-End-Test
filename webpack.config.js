const path = require('path');

module.exports = {
  mode: 'development',
  entry: path.resolve(__dirname, './src/scripts/main.js'),
  module: {
    rules: [
      {
        test: /\.(js)$/,
        // eslint-disable-next-line no-dupe-keys
        test: /\.css$/i,
        exclude: /node_modules/,
        use: ['babel-loader', 'style-loader', 'css-loader'],
      },
    ],
  },
  resolve: {
    extensions: ['*', '.js'],
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    publicPath: '/dist/',
    filename: 'bundle.js',
  },
  devServer: {
    static: path.resolve(__dirname, './dist'),
  },
};