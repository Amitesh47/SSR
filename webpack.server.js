// Node doesnt understand JSX. Thats why this configuration is made for the server side.
const path = require('path')
const merge = require('webpack-merge')
const baseConfig = require("./webpack.base")
const webpackNodeExternals = require('webpack-node-externals')

const config = {
    target: 'node',
    // inform webpack that we are building a bundle
    //for  nodeJS , rather than for the browser

    entry: './src/index.js',
    //tell webpack the root file of our
    // server application

        output:{
        filename: 'bundle.js',
        path: path.resolve(__dirname,'build')
    },
    //tell webpack where to put the output file
    //that is generated


    externals: [ webpackNodeExternals()]
}

module.exports = merge(baseConfig,config);