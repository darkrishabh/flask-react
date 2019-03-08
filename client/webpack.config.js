const webpack = require('webpack');
const resolve = require('path').resolve;
const config = {
    entry: './app/index.js',
    output: {
        path: resolve('../static'),
        filename: 'bundle.js',
        publicPath: resolve('../static')
    },
    resolve: {
        extensions: ['.js', '.jsx', '.css']
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: ['babel-loader']
            },
            {
                test: /\.css$/,
                use: [ 'style-loader', 'css-loader' ]
            }
        ]
    }
};
module.exports = config;