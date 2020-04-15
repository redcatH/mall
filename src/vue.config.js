module.exports = {
    devServer: {
        port:8080,
        host:'localhost',
        porxy: {
            '/api': {
                target: '<url>',
                changeOrigin: true,
                pathRewrite:{
                    'api':''
                }
            }
        }
    }
}