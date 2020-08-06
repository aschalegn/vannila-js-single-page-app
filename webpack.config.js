const HtmlWebpackPlugin = require('html-webpack-plugin'); //installed via npm
const path = require('path');

module.exports = {
    module: {
        rules: [
            {
                //Load js
                test: /\.m?js$/,
                exclude: /node_modules|/,
                use: [
                    {
                        loader: 'babel-loader'
                    }
                ]
            },
            {
                //Load html
                test: /\.html$/,
                use: [
                    {
                        loader: 'html-loader',
                        options: { minimize: true }
                    }
                ]
            },

            {
                //Load files
                test: /\.(png|svg|jpg|JPG|gif|mp4|mov)$/,
                use: [
                    { loader: 'file-loader' }
                ]
            },
            {
                test: /\.css$/i,
                use: [
                    'style-loader',
                    'css-loader'
                ]
            }
        ]
    },
    devServer: {
        port: 3000,
        historyApiFallback: true
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './src/index.html',
            filename: './index.html'
        })
    ]
}