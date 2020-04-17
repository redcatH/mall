module.exports = {
    devServer: {
        // open:true,
        port:8080,
        host:'localhost',
        proxy: {
            '/api': {
                target: 'http://mall-pre.springboot.cn',
                changeOrigin: true,
                pathRewrite:{
                    '/api':''
                }
            }
        }
    }
}