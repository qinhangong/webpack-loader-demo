const path = require('path');
debugger;
module.exports = {
    mode: 'none',
    entry: './src/index.js',
    devtool: 'source-map',
    resolveLoader: {
        modules: ['node_modules', path.resolve(__dirname, 'loaders')]
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                use: [
                    'transform-loader',
                    {
                        loader: 'del-log-loader',
                        options: {
                            filename: 'source.js',
                            isDelLog: process.env.NODE_ENV === 'production'
                        }
                    }
                ]
            }
        ]
    }
};
