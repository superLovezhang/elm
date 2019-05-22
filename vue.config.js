module.exports = {
    devServer:{
        proxy:{
            '/api':{
                target:'192.168.0.1',
                changeOrigin:true
            }
        }
    }
}