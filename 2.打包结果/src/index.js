console.log('入口模块');

var a = require('./a')
console.log(a);

/**
 * 以webpack4为例
 * 执行打包命令：npx webpack
 * 默认entry: src/index.js
 * 默认output: dist/main.js
 * 
 */
