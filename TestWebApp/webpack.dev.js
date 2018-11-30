const path = require("path");
const webpack = require("webpack");

module.exports = {
    target: "web",
    resolve: {
        // Add ".ts" and ".tsx" as resolvable extensions.
        extensions: [".ts", ".tsx", ".js", ".json", ".html"],
    },
    entry: path.resolve(__dirname, "src/index.ts"),
    output: {
        filename: "bundle.js",
        path: __dirname + "/dist"
    },
    module: {
        loaders: [
            // All files with a ".ts" or ".tsx" extension will be handled by "awesome-typescript-loader".
            { test: /.ts$/, loader: "awesome-typescript-loader" },
            // All css files will be handled here
            { test: /\.css$/, use: ["style-loader", "css-loader"]}
        ]
    },
    plugins: ([
        // make sure we allow any jquery usages outside of our webpack modules
        new webpack.ProvidePlugin({
            $: "jquery",
            jQuery: "jquery",
            "window.jQuery": "jquery"
        }),
        // avoid publishing when compilation failed.
        new webpack.NoEmitOnErrorsPlugin()
    ]),
    // pretty terminal output
    stats: { colors: true }
};