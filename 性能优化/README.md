# 性能优化（Webpack）

前端性能主要考虑：

- 构建性能：提高开发阶段的构建速度。

- 传输性能：打包后JS代码传输到浏览器经过的时间。需要考虑文件数量、浏览器缓存。

- 运行性能：JS代码在浏览器执行的速度。


## 懒加载

## gzip压缩
浏览器：`Accept-Encoding: gzip, deflate, br`表示自身支持的压缩算法

服务器：用gzip压缩传输文件，并在响应头中添加`Content-Encoding: gzip`，浏览器收到后就会进行解压

优点：可能提高传输效率

缺点：服务器压缩需要时间，客户端解压需要时间

webpack在这个过程中可以进行预压缩，使用`compress-webpack-plugin`插件，移除服务器的压缩时间。（文件太小是不会进行压缩的）


## 其它优化
### ESLint
代码风格检查

`npm i -D eslint`

配置文件`.eslintrc`

### bundle analyzer


