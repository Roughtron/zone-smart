module.exports = {
    devServer: {
        disableHostCheck: true
    },
    chainWebpack: config => {
        config.module
            .rule('svg-sprite')
            .use('svgo-loader')
            .loader('svgo-loader')

        config.plugin('html')
            .tap(args => {
                args[0].title = 'ZoneSmart'
                return args
            })
    }
}
