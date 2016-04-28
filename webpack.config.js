var webpack = require('webpack');
var path = require('path');
var libraryName = 'conditionals';
var outputFile = libraryName + '.js';

var config = {
    entry: __dirname + '/src/conditionals.js',
    devtool: false,
    output: {
        path: __dirname + '/lib',
        filename: outputFile,
        library: libraryName,
        libraryTarget: 'umd',
        umdNamedDefine: true
    },
    plugins: [
        new webpack.optimize.DedupePlugin(),
        new webpack.optimize.OccurenceOrderPlugin(),
        new webpack.optimize.UglifyJsPlugin()
    ],
    module: {
        loaders: [
            {
                test: /(\.jsx|\.js)$/,
                loader: 'babel',
                exclude: /(node_modules|bower_components)/
            }
        ]
    },
    resolve: {
        root: path.resolve('./src'),
        extensions: ['', '.js']
    }
};

module.exports = config;
