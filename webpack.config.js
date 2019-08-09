const path = require('path');
debugger;
module.exports = {
    mode: 'none',
    entry: './src/index.js',
    devtool: 'source-map',
    module: {
        rules: [
            {
                test: /\.js$/,
                use: [
                    // {
                    //     loader: path.resolve(__dirname, 'loaders/transform-loader')
                    // },
                    {
                        loader: path.resolve(__dirname, 'loaders/drop-console-loader'),
                        options: {
                            filename: 'source.js'
                        }
                    }
                ]
            }
        ]
    }
};
