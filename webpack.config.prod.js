const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const merge = require('webpack-merge');
const baseWebpackConfig = require('./webpack.config.base');
const FaviconsWebpackPlugin = require('favicons-webpack-plugin');

module.exports = merge(baseWebpackConfig, {
    module: {
        rules: [
            {
                test: /\.scss$|\.css$/,
                use: ExtractTextPlugin.extract({
                    use: [
                        {
                            loader: 'css-loader',
                            options: { minimize: true },
                        },
                        'postcss-loader',
                        'sass-loader',
                    ],
                    fallback: 'style-loader',
                }),
            },
        ],
    },
    plugins: [
        new FaviconsWebpackPlugin({
        // Your source logo
            logo: './src/assets/favicon.png',
            // The prefix for all image files (might be a folder or a name)
            // Emit all stats of the generated icons
            emitStats: false,
            // The name of the json containing all favicon information
            statsFilename: 'iconstats-[hash].json',
            // Generate a cache file with control hashes and
            // don't rebuild the favicons until those hashes change
            persistentCache: true,
            // Inject the html into the html-webpack-plugin
            inject: true,
            // favicon background color (see https://github.com/haydenbleasel/favicons#usage)
            background: '#fff',
            // favicon app title (see https://github.com/haydenbleasel/favicons#usage)
            title: 'Demo',
            // which icons should be generated (see https://github.com/haydenbleasel/favicons#usage)
            icons: {
                android: false,
                appleIcon: true,
                appleStartup: false,
                coast: false,
                favicons: true,
                firefox: false,
                opengraph: false,
                twitter: false,
                yandex: false,
                windows: false,
            },
        }),
        new webpack.optimize.UglifyJsPlugin({
            sourceMap: true,
            compress: {
                warnings: false,
                screw_ie8: true,
            },
        }),
        new ExtractTextPlugin('style.css?[hash]'),
    ],
});
