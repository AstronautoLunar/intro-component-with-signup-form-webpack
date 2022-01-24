import webpack from "webpack";
import path from "path";

export default {
    mode: "production",
    entry: "./src/ts/main.ts",
    output: {
        filename: "code.min.js",
        path: path.join(__dirname, "src", "core")
    },
    module: {
        rules: [
            {
                test: /\.ts$/,
                use: [
                    "ts-loader"
                ]
            },
            {
                test: /\.s[ac]ss$/,
                use: [
                    "style-loader",
                    "css-loader",
                    "sass-loader"
                ]
            }
        ]
    },
    resolve: {
        extensions: [ ".ts" ]
    }
}