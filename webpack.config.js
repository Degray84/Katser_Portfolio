var webpack = require('webpack');

module.exports = {
    context: __dirname + "/source",
    devtool: 'source-map',
    entry: {
        app: './js/app.js'
    },
    output: {
        filename: 'assets/js/[name].bundle.js',
        path: __dirname + "./build"
    },
    plugins: [
        new webpack.optimize.UglifyJsPlugin({
            compress: {
                warnings: false
            },
            sourceMap: true
        }),
        new webpack.ProvidePlugin({
            $: 'jquery',
            jQuery: 'jquery'
        })
    ]
};