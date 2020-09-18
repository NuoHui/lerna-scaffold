const path = require('path')
const { name, version } = require('./package.json')
const Webpack = require('webpack')

module.exports = {
  mode: 'production',
  entry: path.resolve(__dirname, './src/index.ts'),
  output: {
    path: path.resolve(__dirname, './dist'),
    filename: `${name}.min.js`,
    library: `${name}`,
    globalObject: 'this',
    libraryTarget: 'umd',
    libraryExport: 'default',
    umdNamedDefine: true
  },
  resolve: {
    extensions: ['.ts', '.js', '.json'],
    alias: {
      '@': path.resolve(__dirname, './src')
    }
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        exclude: /node_modules/,
        loaders: ['ts-loader']
      }
    ]
  },
  devtool: 'source-map',
  node: { fs: 'empty' },
  plugins: [
    new Webpack.optimize.ModuleConcatenationPlugin(),
    new Webpack.BannerPlugin(
      [
        'Across Multiple Platforms v' + version,
        '',
        'Copyright (C) XXXX. All rights reserved.'
      ].join('\n')
    )
  ]
}
