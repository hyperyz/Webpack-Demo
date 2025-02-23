// plugin的本质是一个带有apply方法的对象。但习惯上，会将该对象写成构造函数的模式

class MyPlugin {
    apply(compiler) {
        console.log("插件运行了");

        // compiler对象是初始化阶段构建的，apply函数会在创建好complier对象之后执行

        // 在这里注册事件，不是处理事件的
        compiler.hooks.done.tap("MyPlugin-done",function(compilation){
            // done表示编译完成
            console.log("编译完成了");
        })
    }
}

module.exports = MyPlugin;