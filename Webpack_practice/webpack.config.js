const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const SRC = path.join(__dirname, 'src/');
const NODE_MODULES = path.join(__dirname, 'node_modules/');


module.exports = {
    mode: 'development',
    entry : './src',
    output: {
        path: __dirname + '/dist',
        filename: 'my-app.js'
    },
    resolve: {
        modules : [SRC, NODE_MODULES, path.join(SRC, 'modules')]
    },
    plugins: [
        new ExtractTextPlugin('my-app.min.css'),
        new HtmlWebpackPlugin('index.html')
    ],
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'babel-loader'
            },
            {
                test: /\.css$/,
                loader: ExtractTextPlugin.extract('css-loader')
            }
        ]
    }
    
    
};