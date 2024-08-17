const path = require('path');
// const nodeExternals = require('webpack-node-externals');

module.exports = {
    mode: "development",
    entry: {
        main: "./src/index.ts",
    },
    target: 'node',
    output: {
        path: path.resolve(__dirname, './dist'),
        filename: "index.js"
    },
    resolve: {
        extensions: [".ts", ".tsx", ".js"],
    },
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                loader: "ts-loader"
            }
        ]
    },
    // externals: [nodeExternals()]
};