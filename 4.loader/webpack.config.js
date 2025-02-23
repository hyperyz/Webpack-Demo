// module.exports = {
//     mode: "development",
//     module: {
//         rules: [
//             {
//                 test: /index\.js$/, //正则表达式，匹配模块的路径
//                 // use: [
//                 //     {
//                 //         loader: './loaders/test-loader?changeVar=未知数', // 加载器的路径
//                 //         // options: {
//                 //         //     changeVar: "未知数"
//                 //         // }
//                 //     }
//                 // ] // 匹配之后，使用加载器，每个加载器是一个对象
//                 use: ["./loaders/test-loader?changeVar=未知数"]  //简写
//             }, // 规则1
//             // {},// 规则2
//         ],  // 模块的匹配规则
//         // noParse: //是否不要解析某个模块
//     }
// }


//运行顺序是4 3 2 1 
module.exports = {
    module: {
        rules: [
            {
                test: /index\.js$/,
                use: ["./loaders/loader1.js", "./loaders/loader2.js"]
            },
            {
                test: /\.js$/,
                use: ["./loaders/loader3.js", "./loaders/loader4.js"]
            }
        ]
    }
}


