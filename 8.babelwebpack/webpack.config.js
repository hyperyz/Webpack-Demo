module.exports = {
    mode: 'development',
    devtool: 'source-map',
    module: {
        rules: [
            { test: /\.js$/, use: 'babel-loader', exclude: /node_modules/ }
        ]
    }
}