module.exports = {
    entry: './src/index.js',
    output: {
        path: './lib',
        filename: 'index.js'
    },
    module: {
        loaders: [
            {
                test: /\.js$/,
                exclude: /(node_modules)/,
                loader: 'babel'
            }
        ]
    }
};