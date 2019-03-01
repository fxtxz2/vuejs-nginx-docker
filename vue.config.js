// vue.config.js
module.exports = {
    devServer: {
        port: 8080,
        proxy: {
            // 代理所有请求
            "/": {
                // 后端rest服务
                target: "http://localhost:8882",
                ws: true,
                changeOrigin: true
            }
        }
    }
};