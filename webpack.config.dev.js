const path = require('path');
const baseWebpackConfig = require('./webpack.config.base');
const merge = require('webpack-merge');

module.exports = merge(baseWebpackConfig, {
    module: {
        rules: [
            {
                test: /\.scss$|\.css$/,
                use: ['style-loader', 'css-loader', 'postcss-loader', 'sass-loader'],
            },
        ],
    },
    devServer: {
        port: 9000,
        hot: true,
        contentBase: path.resolve(__dirname, 'dist'),
        publicPath: '/',
    },
});
