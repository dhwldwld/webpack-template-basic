const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin');
const Copyplugin = require('copy-webpack-plugin')

module.exports = {
    entry: './js/main.js',
    output: {
        // path: path.resolve(__dirname, 'public'),
        // filename: 'main.js',
        clean: true
    },

    module: {
        rules: [
            {
                test: /\.s?css$/,
                use: [ // 순서 중요* 밑에부터 위로 작동됨  sass컴파일 -> postcss -> css -> html style tag 추가
                    'style-loader',
                    'css-loader',
                    'postcss-loader',
                    'sass-loader',
                ]
            },
            {
                test: /\.js$/,
                use: [
                    'babel-loader',
                ]
            }
        ]
    },

    plugins: [
        new HtmlWebpackPlugin({
            template: './index.html'
        }),
        new Copyplugin({
            patterns: [
                { from: 'static'}
            ]
        })
    ],

    devServer: {
        host: 'localhost'
    }
}