const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const config = {
    entry: './src/app.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: "[name].bundle.js",
    },
    devServer: {
        port: 3000,
        open: true
    },
    plugins: [
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: './src/templates/views/index.pug'
        }),
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
              {loader: 'style-loader'},
              {loader: 'css-loader'},
              {loader: 'sass-loader'}
            ]
          }
        ]
    }
}

module.exports = (env, argv) => {
    if (argv.mode === 'development') {}
    if (argv.mode === 'production') {}
    return config;
}