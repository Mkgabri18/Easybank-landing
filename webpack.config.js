const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

const config = {
    entry: './src/app.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: "js/[name].bundle.js",
    },
    devServer: {
        port: 3000,
    },
    plugins: [
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: './src/templates/views/index.pug'
        }),
        new MiniCssExtractPlugin({
            filename: 'css/bundle.css'
        })
    ],
    module: {
        rules: [
          { 
            test: /\.pug$/,
            use: ["pug-loader"]
          },
          {
            test: /\.scss$/,
            use: [
              {loader: MiniCssExtractPlugin.loader},
              {loader: 'css-loader'},
              {loader: 'sass-loader'}
            ]
          },
          {
            test: /\.(png|svg|jpe?g|gif)$/i,
            use: [
              {
                loader: 'file-loader',
                options: {
                    name:'[name].[ext]',
                    outputPath: 'assets/',
                }
              },
            ]
          },
        ]
    }
}

module.exports = (env, argv) => {
    if (argv.mode === 'development') {}
    if (argv.mode === 'production') {}
    return config;
}
