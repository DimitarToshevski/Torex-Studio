const UglifyJsPlugin = require('uglifyjs-webpack-plugin');

module.exports = {
    entry: "./scripts/router.js",
    output: {
        filename: "build.js"
    },
    watch: true,
    plugins: [
        new UglifyJsPlugin({
            test: /\.js($|\?)/i,
            uglifyOptions: {
                ecma: 8,
                ie8: false
            }
        })
    ],
    module: {
        rules: [
            {
                test: /\.css$/,
                use: [
                    { loader: 'style-loader' },
                    {
                        loader: 'css-loader',
                        options: {
                            minimize: true
                        }
                    }
                ]
            },
            {test: /\.js$/,
                loader: 'babel-loader',
                query: {
                    presets: ['env']
                }
            }
        ]
    }
};