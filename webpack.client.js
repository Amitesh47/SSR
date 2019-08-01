//Since ssr only provides the HTML document to the browser,
// any event or js code attached is not executed.
//For this purpose , a client side webpack config is also done.

const path = require('path')
const merge = require('webpack-merge')
const baseConfig = require("./webpack.base")

const config = {
    entry: './src/client/client.js',
     //tell webpack the root file of our
    // client application

    output:{
        filename: 'bundle.js',
        path: path.resolve(__dirname,'public')
    }
    //tell webpack where to put the output file
    //that is generated
}

module.exports = merge(baseConfig,config);