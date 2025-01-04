const path = require('path');
const glob = require("glob");
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
// const { PurgeCSSPlugin } = require("purgecss-webpack-plugin");
const CopyWebpackPlugin = require('copy-webpack-plugin');
// const postcssUncss = require('postcss-uncss');
const UnCSSPlugin = require('uncss-webpack-plugin');

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
        new UnCSSPlugin({
          html: glob.sync(`${PATHS.dist}/*.html`, { nodir: true }),
          stylesheets: [`${PATHS.dist}/css/override.css`],
         })
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
              {loader: 'sass-loader'},
              {
                // loader: 'postcss-loader',
                // options: {
                //   postcssOptions: {
                //     plugins: [
                //       postcssUncss({
                //         // html: glob.sync(`${PATHS.src}/templates/**/*.pug`, { nodir: true }),
                //         html: glob.sync(`${PATHS.dist}/*.html`, { nodir: true }),
                //         stylesheets: [`${PATHS.dist}/css/override.css`],
                //         ignore: [
                //           /@xxl$/, 
                //           /@xl$/, 
                //           /@lg$/, 
                //           /@md$/
                //         ], // aggiungi regole ignorate
                //       }),
                //     ],
                //   },
                // },
              },
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
