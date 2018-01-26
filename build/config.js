const path = require('path');

// 当前路径
const DIRNAME =  path.resolve(__dirname, '../');

// 前端项目开发目录
const SRC_PATH = path.resolve(DIRNAME, './src');

// 打包输出目录
const OUTPUT_PATH = path.resolve(DIRNAME, './dist');

module.exports = {
    DIRNAME: DIRNAME,
    SRC_PATH: SRC_PATH,
    OUTPUT_PATH: OUTPUT_PATH,
    CLIENT_ENTRY: {index: path.resolve(SRC_PATH, './app.jsx')},
}