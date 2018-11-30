const path = require("path");
const webpack = require("webpack");
const Merge = require("webpack-merge");
const CommonConfig = require("./webpack.common.js");

module.exports = Merge(CommonConfig, {
    devtool: "inline-source-map",
    entry: path.resolve(__dirname, "src/index.ts"),
    output: {
        filename: "bundle.js",
        path: __dirname + "/dist"
    },
    module: {
        loaders: [
            // All css files will be handled here
            {
                test: /\.css$/,
                use: ["style-loader", "css-loader"]
            }
        ]
    }
})