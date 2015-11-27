var path = require('path');
var webpack = require('webpack');

module.exports = {
    cache: true,
    context: __dirname + "/www",
    entry: {
        app: './src'
    },
    output: {
        path: path.join(__dirname, 'www/dist'),
        publicPath: 'dist/',
        filename: '[name].js',
        chunkFilename: '[chunkhash].js'
    },
    module: {
        loaders: [
            { test: /\.jsx?$/, exclude: /node_modules/, loader: 'babel-loader?experimental&optional=runtime' }
        ]
    }
};
