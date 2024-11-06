const path = require('path');
const glob = require("glob");
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
// const { PurgeCSSPlugin } = require("purgecss-webpack-plugin");
const CopyWebpackPlugin = require('copy-webpack-plugin');

const PATHS = {
  src: path.join(__dirname, "src"),
  dist: path.join(__dirname, "dist"),
};

const config = {
    entry: './src/app.js',
    output: {
        path: PATHS.dist,
        filename: "js/[name].bundle.js",
    },
    devServer: {
        port: 3000,
    },
    plugins: [
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: path.join(__dirname, './src/templates/views/index.pug'),
        }),
        new MiniCssExtractPlugin({
            filename: 'css/[name].bundle.css'
        }),
        new CopyWebpackPlugin({
          patterns: [
            { from: 'src/assets/fonts', to: 'assets/fonts' }
          ]
        }),
        // new PurgeCSSPlugin({
        //   paths: () => glob.sync(`${PATHS.src}/templates/**/*.pug`, { nodir: true }),
        //   safelist: {
        //     deep: [/@xxl$/, /@xl$/, /@lg$/, /@md$/],
        //   },
        // })
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
            test: /\.(png|svg|jpe?g|gif|webp)$/i,
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
          {
            test: /\.(ttf|eot|woff|woff2)$/,
            use: {
              loader: 'file-loader',
              options: {
                name: '[name].[ext]',
                outputPath: 'assets/fonts/' 
              }
            }
          }
        ]
    }
}

module.exports = (env, argv) => {
    if (argv.mode === 'development') {}
    if (argv.mode === 'production') {}
    return config;
}
