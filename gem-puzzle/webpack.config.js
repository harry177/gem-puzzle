const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

let conf = {
    entry: './src/index.js',
    output: {
        filename: 'main.js',
        path: path.resolve(__dirname, 'dist')
    },
    devServer: {
        static: {
            directory: path.join(__dirname, '/')
        }
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: [
                    'style-loader',
                    'css-loader'
                ]
            },
            {
                test: /\.mp3$/,
                loader: 'file-loader'
            }
        ]
    },
    plugins: [

        new HtmlWebpackPlugin({
          inject: 'body',
          template: './index.html',
          filename: 'index.html'
        })
    
      ]
};

module.exports = conf;