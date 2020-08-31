const path = require('path');
function resolve(dir) {
  return path.join(__dirname, dir)
}
// 项目的主要配置文件
module.exports = {
  // webpack 配置进行更细粒度的修改  https://cli.vuejs.org/zh/config/#chainwebpack
  chainWebpack: (config) => {
    //修改文件引入自定义路径
    config.resolve.alias
      .set('@', resolve('src'))
      .set('common', resolve('@/common'))
      .set('components', resolve('@/components'))
      .set('assets', resolve('@/assets'))
      .set('views', resolve('@/views'))
      .set('newtwork', resolve('@/network'))
  },
  devServer: {
    host: '0.0.0.0',
    port: 8088,
    headers: {
      'Access-Control-Allow-Origin': '*',
    },
    hotOnly:false,
    disableHostCheck: true
  },
}
