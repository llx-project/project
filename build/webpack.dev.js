const path = require('path');
const webpack = require('webpack');
const webpackCommon = require('./webpack.common');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const merge = require('webpack-merge');
const config = require('./config');


module.exports = merge(webpackCommon, {
    devtool: 'inline-source-map',
    plugins: [
        new webpack.HotModuleReplacementPlugin()
    ]
})