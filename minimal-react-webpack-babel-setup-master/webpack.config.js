const webpack = require('webpack');
const autoprefixer = require('autoprefixer');
module.exports = {
  entry: ['./src/app.scss','./src/index.js'],
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: ['babel-loader']
        
      },
      {test: /\.scss$/,
      use: [
        {
          loader: 'file-loader',
          options: {
            name: 'bundle.css',
          },
        },
        { loader: 'extract-loader' },
        { loader: 'css-loader' },
        {
            loader: 'postcss-loader',
            options: {
               plugins: () => [autoprefixer()]
            }
          }, 
          {
            loader: 'sass-loader',
                options: {
                  includePaths: ['./node_modules']
                }
          },
       
      ]
    }
    ]
  },
  resolve: {
    extensions: ['*', '.js', '.jsx','.scss']
  },
  output: {
    path: __dirname + '/dist',
    publicPath: '/',
    filename: 'bundle.js'
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin()
  ],
  devServer: {
    contentBase: './dist',
    hot: true
  }
};
