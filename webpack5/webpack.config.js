const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
module.exports = {
    mode: "production",
    optimization: {
        usedExports: true,  // Tree Shaking除去不用的代码
    },
    entry: "./src/index.js",
    devtool: false,
    watch: true,
    devServer: {
        hot: true,  // 热更新
        open: true,
    },
    output: {
        filename: "bundle.js",
        path: path.resolve(__dirname, "dist")
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: ["style-loader", "css-loader"]
            },
            {
                test: /\.js$/,
                use: [{
                    loader: "babel-loader",
                    options: {
                        presets: ["@babel/preset-env"]
                    }
                }]
            }
        ]
    },
    plugins: [new HtmlWebpackPlugin()]  // 自动生成html文件
}