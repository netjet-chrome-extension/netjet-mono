const path = require('path');

module.exports = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'plugin.js',
    library: 'scePlugin',

    //  "var" | "assign" | "this" | "window" | "global" | "commonjs" | "commonjs2" | "commonjs-module" | "amd" | "umd" | "umd2" | "jsonp"
    libraryTarget: 'var'
  },
  resolve: {
    extensions: ['.js']
  }
};