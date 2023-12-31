const path = require('path');

module.exports = {
  entry: {
    index: './src/index.js',
    about: './src/about.js',
    menu: './src/menu.js',
    contact:'./contact.js'
  },
  devtool: 'inline-source-map',
  mode: 'none',
  entry: './src/index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
  module: {

    rules: [

      {

        test: /\.css$/i,

        use: ['style-loader', 'css-loader'],

      },
      {

        test: /\.(woff|woff2|eot|ttf|otf)$/i,

        type: 'asset/resource',

      },
      {

        test: /\.(png|svg|jpg|jpeg|gif)$/i,

        type: 'asset/resource',

      },

    ],

  },
 };
