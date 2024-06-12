const path = require("path");
const fs = require("fs");
const HTMLPlugin = require("html-webpack-plugin");
const CopyPlugin = require("copy-webpack-plugin");

const entries = {
    index: "./src/index.tsx",
    contentScript: './src/Scripts/contentScript.js',
    serviceWorker: './src/Scripts/serviceWorker.js',
};

const pagesDir = path.join(__dirname, "src/pages");
const pageFiles = fs.readdirSync(pagesDir).filter(file => file.endsWith('.js'));
pageFiles.forEach(file => {
    const name = path.basename(file, path.extname(file));
    entries[name] = path.join(pagesDir, file);
});

module.exports = {
    entry: entries,
    mode: "production",
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader",
                    options: {
                        presets: ["@babel/preset-env", "@babel/preset-react"]
                    }
                }
            },
            {
                test: /\.tsx?$/,
                use: [
                    {
                        loader: "ts-loader",
                        options: {
                            compilerOptions: { noEmit: false },
                        }
                    }
                ],
                exclude: /node_modules/,
            },
            {
                exclude: /node_modules/,
                test: /\.css$/i,
                use: [
                    "style-loader",
                    "css-loader"
                ]
            },
        ],
    },
    plugins: [
        new CopyPlugin({
            patterns: [
                { from: "./public/manifest.json", to: "./manifest.json" },
            ],
        }),
        ...getHtmlPlugins(["index", ...pageFiles.map(file => path.basename(file, path.extname(file)))]),
    ],
    resolve: {
        extensions: [".tsx", ".ts", ".js", ".jsx"],
    },
    output: {
        path: path.join(__dirname, "dist"),
        filename: "js/[name].js",
    },
};

function getHtmlPlugins(chunks) {
    return chunks.map(
        (chunk) =>
            new HTMLPlugin({
                title: "React extension",
                filename: `${chunk}.html`,
                template: "./public/template.html",
                chunks: [chunk],
            })
    );
}
