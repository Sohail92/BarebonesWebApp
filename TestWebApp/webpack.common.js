const webpack = require("webpack");
const CleanWebpackPlugin = require("clean-webpack-plugin");

module.exports = {
    target: "web",
    resolve: {
        // Add ".ts" and ".tsx" as resolvable extensions.
        extensions: [".ts", ".tsx", ".js", ".json", ".html"],
    },
    module: {
        loaders: [
            // All files with a ".ts" or ".tsx" extension will be handled by "awesome-typescript-loader".
            { test: /.ts$/, loader: "awesome-typescript-loader" }
        ]
    },
    plugins: ([
        // make sure we allow any jquery usages outside of our webpack modules
        new webpack.ProvidePlugin({
            $: "jquery",
            jQuery: "jquery",
            "window.jQuery": "jquery"
        }),
        // Clean dist folder.
        new CleanWebpackPlugin(["./dist"], {
            "verbose": true // Write logs to console.
        }),
        // avoid publishing when compilation failed.
        new webpack.NoEmitOnErrorsPlugin()
    ]),
    // pretty terminal output
    stats: { colors: true }
};