const path = require('path');
const HtmlWebPackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin= require('mini-css-extract-plugin');

module.exports = {
    mode: 'production',
    entry: './src/app.js',
    output: {
        path: path.join(__dirname, 'public'),
        filename: 'bundle.js',
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
                        // We configure 'MiniCssExtractPlugin'              
                        loader: MiniCssExtractPlugin.loader,
                    },
                    {
                        loader: 'css-loader',
                        options: {
                            modules: true,
                            // Allows to configure how many loaders 
                            // before css-loader should be applied
                            // to @import(ed) resources
                            importLoaders: 1,
                            localsConvention: 'camelCase',
                            // Create source maps for CSS files
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
    plugins: [
        new HtmlWebPackPlugin({
            template: "./public/index.html",
            filename: "../index.html"
        }),
        new MiniCssExtractPlugin({
            filename: 'styles/styles.[hash].css'
        })
    ],
};