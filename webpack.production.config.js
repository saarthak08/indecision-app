const path = require('path');
const HtmlWebPackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin= require('mini-css-extract-plugin');

module.exports = {
    mode: 'production',
    entry: './src/app.js',
    output: {
        filename: 'static/bundle.js',
        path: path.resolve(__dirname, 'dist'),
    },
    module: {
        rules: [
            {
                loader: 'babel-loader',
                test: /\.js$/,
                exclude: /node_modules/,
            },
            {
                test: /\.html$/,
                use: [
                    {
                        loader: "html-loader"
                    }
                ]
            },
            {
                test: /\.css$/,
                use: [
                    {
                        loader: MiniCssExtractPlugin.loader,
                    },
                    {
                        loader: 'css-loader',
                        options: {
                            modules: true,
                            importLoaders: 1,
                            localsConvention: 'camelCase',
                            sourceMap: true
                        }
                    },
                    {
                        // PostCSS will run before css-loader and will 
                        // minify and autoprefix our CSS rules.
                        loader: 'postcss-loader',
                    }
                ]
            }
        ],

    },
    optimization: {
        splitChunks: {
          cacheGroups: {
            styles: {
              name: 'styles',
              test: /\.css$/,
              chunks: 'all',
              enforce: true
            },
            vendor: {
              chunks: 'initial',
              test: 'vendor',
              name: 'vendor',
              enforce: true
            }
          }
        }
      },
    plugins: [
        new HtmlWebPackPlugin({
            template: "./public/index.html",
            filename: "./index.html"
        }),
        new MiniCssExtractPlugin({
            filename: 'styles/styles.css'
        })
    ],
};