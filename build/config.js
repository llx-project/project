const path = require('path');

// 当前路径
const DIRNAME =  path.resolve(__dirname, '../');

// 前端项目开发目录
const SRC_PATH = path.resolve(DIRNAME, './src');

// 打包输出目录
const OUTPUT_PATH = path.resolve(DIRNAME, './dist');

// 打包静态
const OUTPUT_STATIC_PATH = path.resolve(DIRNAME, './dist/static');

// 静态资源目录
const STATIC_PATH = path.resolve(DIRNAME, './static');

module.exports = {
    DIRNAME,
    SRC_PATH,
    OUTPUT_PATH,
    STATIC_PATH,
    OUTPUT_STATIC_PATH,
    CLIENT_ENTRY: {index: path.resolve(SRC_PATH, './app.jsx')},
}