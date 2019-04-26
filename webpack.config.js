const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
console.log('webpack start')
module.exports = {
    mode:'production',
    entry:{
        index:"./webapp/views/index.entry.js",
        "detail":"./webapp/views/detail.entry.js"
    },
    output:{
        path: __dirname + '/dist',
        filename:'[name].[hash].bundle.js'
    },
    module:{
        rules:[
            {
                test:/\.css$/,
                use:['style-loader','css-loader']
            }
        ]
    },
    plugins:[
        new HtmlWebpackPlugin({
            template:__dirname + '/webapp/views/index.html',
            filename:'html/index.html',
            chunks:['index']
        }),
        new HtmlWebpackPlugin({
            template:__dirname + '/webapp/views/layout.html',
            filename:'html/layout.html',
            chunks:['index']
        }),
        new HtmlWebpackPlugin({
            template:'./webapp/views/detail.html',
            filename:'html/detail.html',
            chunks:['detail']
        })
    ]
}