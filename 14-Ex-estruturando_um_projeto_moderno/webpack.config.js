

module.exports = {
    entry: {
        index: './src/index.js'
    },
    output: {
        filename: '[name].min.js'
    },

    mode: 'development',

    module: {
        rules: [{
            test: /\.css$/,
            use: ['style-loader', 'css-loader', 'babel-loader']
        }]
    }
}