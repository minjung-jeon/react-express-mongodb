const webpack = require('webpack');
const path = require('path');

module.exports = {
    mode: 'production',

    entry: './src/index.js',

    output: {
        path: path.join(__dirname, 'public'),
        filename: 'bundle.js',
        publicPath: '/'
    },

    devtool: 'cheap-module-source-map',

    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                include: path.resolve(__dirname, 'src'),
                use: [
                    {
                        loader: 'babel-loader',
                        options: {
                            presets: ['env', 'react']
                        }
                    }
                ]
            }
        ]
    }
};
