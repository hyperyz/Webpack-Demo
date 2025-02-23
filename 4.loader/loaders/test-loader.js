var loaderUtils = require("loader-utils");

// loader本质上就是一个函数，loader的执行时机就是在构建AST之前
module.exports = function(sourceCode) {
    // sourceCode源代码字符串

    console.log("test-loader is running");
    
    // return 一个新的源代码字符串用于做AST转换分析
    // return sourceCode.replace(/变量/g, "var")


    // console.log(this); // this绑定了非常多的内容，比如配置中的options
    
    // webpack4还需要使用loaderUtils来获取options，但是webpack5已经自带了
    var options = loaderUtils.getOptions(this);
    console.log(options);
    var reg = new RegExp(options.changeVar, "g");

    return sourceCode.replace(reg, "var");
    
}