const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCSSExtractPlugin = require('mini-css-extract-plugin');

module.exports = {

    module: {
        rules: [
            {
                test: /\.css$/,
                use: [
                    MiniCSSExtractPlugin.loader,
                    'css-loader'
                ]
            },
            {
                test: /\.html$/,
                use: [
                  {
                    loader: 'html-loader'
                  },
                ],
              },
              {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'babel-loader'  
              },
        ]
    },
    output: {
        path: path.resolve(__dirname, 'dist')
        
    },
    plugins: [
        new HtmlWebpackPlugin(
            {
                template: './src/index.html',
                filename: './index.html'
            }
        ),
        new MiniCSSExtractPlugin()
    ]
}