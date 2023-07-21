const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

module.exports = {
  entry: './src/index',
  mode: 'development',
  devServer: {
    static: path.join(__dirname, 'dist'),
    port: 3001,
    historyApiFallback: true,
  },
  output: {
    publicPath: 'auto',
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        options: {
          presets: ['@babel/preset-react'],
        },
      },
    ],
  },
  plugins: [
    // new ModuleFederationPlugin({
    //   name: "app1",
    //   remotes: {
    //     app2: "app2@[app2Url]/remoteEntry.js",
    //   },
    //   shared: {react: {singleton: true}, "react-dom": {singleton: true}},
    // }),
    // new ExternalTemplateRemotesPlugin(),
    new HtmlWebpackPlugin({
      template: './public/index.html',
    }),
  ],
};
