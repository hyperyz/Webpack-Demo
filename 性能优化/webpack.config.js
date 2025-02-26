const compressionPlugin = require('compression-webpack-plugin');
const WebpackBundleAnalyzer = require('webpack-bundle-analyzer').BundleAnalyzerPlugin

module.exports = {
    mode: 'production',
    plugins: [
        new compressionPlugin({
            test: /\.(js|css|html|svg)$/
        }),
        new WebpackBundleAnalyzer()
    ]
}