const webpack = require('webpack');
const { join } = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const playgroundBasedir = join(__dirname, 'src/__playground__');

module.exports = {
  mode: 'development',
  entry: join(playgroundBasedir, 'index.tsx'),
  output: {
    path: playgroundBasedir,
    filename: 'ReactContexify.js',
  },
  resolve: {
    extensions: [".ts", ".tsx", ".js"]
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        exclude: /node_modules/,
        loader: 'ts-loader',
        options: {
          compilerOptions: {
            noUnusedLocals: false
          }
        }
      },
      {
        test: /\.less$/,
        use: [
          {
            loader: 'style-loader',
          },
          {
            loader: 'css-loader',
          },
          {
            loader: 'less-loader',
            options: {
              lessOptions: {
                strictMath: true,
              },
            },
          },
        ],
      }, {
        test: /\.css$/,
        use: [
          {
            loader: 'style-loader',
          },
          {
            loader: 'css-loader',
          },
        ],
      }

    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: join(playgroundBasedir, 'index.html'),
    }),
    new webpack.HotModuleReplacementPlugin()
  ],
  devServer: {
    host: 'localhost',
    port: process.env.PORT || 8888,
    historyApiFallback: true,
    open: true,
  }
};
