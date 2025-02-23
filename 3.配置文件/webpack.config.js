// 这个文件名是默认文件名
// 配置文件导出一个对象就可以，但是需要能在node环境执行（打包环境是node环境），所以不能使用ES6语法，要用commonJS语法

/**
 * 会报错，因为这段代码在打包的时候会运行
 */
// var b = null
// b.abc()

module.exports = {
    mode: 'development',  // 如果和命令行冲突，以命令行为准
    entry: './src/main.js',
    output: {
        filename: 'bundle.js',
    },
    // devtool: 'eval-source-map',  // 开发环境下使用source map
    devtool: 'source-map'  // 生产环境下使用source map，用于调试真实的代码运行问题，但是需要做出相应的处理规避网络传输和代码暴露问题
}

// 调试的时候希望能在源码看到错误，而不是在bundle.js里看到错误。为了解决这个问题，需要使用source map，不会有任何兼容性问题，source map不仅记录了所有源码内容，还记录了和转换后的代码映射关系。

