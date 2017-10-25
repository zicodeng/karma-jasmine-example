// Webpack configuration.
const config = {
    resolve: {
        extensions: ['.js', '.ts'],
        modules: ['node_modules', 'src']
    },
    module: {
        rules: [
            {
                test: /\.ts$/,
                exclude: /node_modules/,
                use: [
                    {
                        loader: 'babel-loader',
                        options: {
                            presets: ['es2015'],
                            sourceMap: true
                        }
                    },
                    {
                        loader: 'ts-loader'
                    }
                ]
            },
            {
                test: /\.js$/,
                use: [
                    {
                        loader: 'babel-loader',
                        options: {
                            presets: ['es2015'],
                            sourceMap: true
                        }
                    }
                ]
            },
            {
                test: /\.js$|\.ts$/,
                exclude: /node_modules/,
                use: [{ loader: 'istanbul-instrumenter-loader' }],
                // Delays coverage after all tests are run, fixing transpiled source coverage error.
                enforce: 'post'
            }
        ]
    },
    devtool: 'inline-source-map'
};

module.exports = config;
