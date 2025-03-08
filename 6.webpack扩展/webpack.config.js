const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HTMLWebpackPlugin = require('html-webpack-plugin');
module.exports = {
    entry: {
        
    },
    output: {
        filename: '[name].[chunkhash:5].js'
    },
    plugins: [
        new CleanWebpackPlugin(),  // 自动清理dist目录，但是webpack5已经内置
        new HTMLWebpackPlugin({
            template: './public/index.html'  // 用public下的模板
        })  // 自动生成html文件，且自动引入打包后的js文件
    ]
}


