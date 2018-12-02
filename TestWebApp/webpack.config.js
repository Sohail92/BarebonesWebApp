var path = require('path');

module.exports = {
    mode: 'development',
    entry: './src/index.ts',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js'
    },
    module: {
        rules: [
            // All files with a ".ts" or ".tsx" extension will be handled by "awesome-typescript-loader".
            { test: /.ts$/, use: "awesome-typescript-loader" },
            // All css files will be handled here
            { test: /\.css$/, use: ["style-loader", "css-loader"] }
        ]
    },
    // pretty terminal output
    stats: { colors: true }
};