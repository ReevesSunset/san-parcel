const hwp = require('html-webpack-plugin')
const path = require('path')

module.exports = {
    entry: './main.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js'
    },
    plugins: [
        new hwp()
    ],
    module: {
    	rules: [{
    		test: /\.js$/,
            use: [{
                loader: 'babel-loader'
            }]
    	}]
    },
    devServer: {
        open: true
    }
}
