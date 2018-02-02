
const path = require('path');
const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin')
const config = require('./config');

module.exports = {
    context: config.ENTRY_PATH,
    entry: config.CLIENT_ENTRY,
    output: {
        path: config.OUTPUT_PATH,
        publicPath: '/',
        filename: 'static/[name].[hash:6].bundle.js',
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: [/node_modules/],
                loader: 'babel-loader'
            },
            {
                test: /\.(less|css)$/,
                loader:  ExtractTextPlugin.extract({
                    fallback: 'style-loader',
                    use: ['css-loader', 'less-loader']
                })
            },
            {
                test: /\.(png|svg|jpg|gif)$/,
                use: [
                    'file-loader'
                ]
            }, 
            {
                test: /\.(woff|woff2|eot|ttf|otf)$/,
                use: [
                    'file-loader'
                ]
            },
            {
                test: /\.(csv|tsv)$/,
                use: [
                    'csv-loader'
                ]
            },
        ]
    },

    resolve: {
        extensions: ['.js', '.jsx'],
    },

    plugins: [

        // 抽离css合并文件
        new ExtractTextPlugin({
            filename: 'static/[name].bundle.css',
            allChunks: true
        }),

        // 提取共用代码到common文件
        new webpack.optimize.CommonsChunkPlugin({
            name: 'common'
        }),

        // 生成html
        new HtmlWebpackPlugin({
            title: '主页',
            template: path.resolve(config.SRC_PATH, './app.html'),
            filename: 'index.html',
            chunks: ['index', 'common']
        }),

        // 设置全局变量
        new webpack.ProvidePlugin({
            React: 'react',
            _: 'lodash'
        }),

        // 构建时删除dist
        new CleanWebpackPlugin(
            ['dist'],
            {
                root: config.DIRNAME,
                dry: false,
            }
       ),

       // 复制static到build目录下
        new CopyWebpackPlugin([
            {
            from: config.STATIC_PATH,
            to: config.OUTPUT_STATIC_PATH,
            ignore: ['.*']
            }
        ])
    ]
}

