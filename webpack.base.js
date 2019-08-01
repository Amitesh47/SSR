//Tell webpack to run babel on every file it runs through
module.exports = {
    module: {
        rules: [
            {
                test: /\.js?$/,
                loader: 'babel-loader',
                exclude: /node_modules/,
                options: {
                    presets : [
                        'react',
                        'stage-0', //to run some async code
                        ['env',{ targets: { browsers: ['last 2 versions']}}] //run all the diff
                                                        // transform rules needed for latest
                                                        // 2 versions of browser
                    ]
                }
            }
        ]
    }
}