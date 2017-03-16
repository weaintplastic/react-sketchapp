const path = require('path');
const CopyWebpackPlugin = require('copy-webpack-plugin');

const entries = ['Profiles', 'stress-Styleguide', 'Styleguide'].reduce(
  (acc, val) => Object.assign({}, acc, { [val]: `./example-plugin/${val}.js` }),
  {}
);

module.exports = {
  entry: entries,

  output: {
    filename: '[name].js',
    library: 'onRun',
    path: path.join(__dirname, 'react-example.sketchplugin/Contents/Sketch'),
  },

  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: [
          { loader: 'babel-loader' }
        ],
      },
    ],
  },

  plugins: [new CopyWebpackPlugin([{ from: 'example-plugin/manifest.json' }])],
};
