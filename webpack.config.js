const path = require("path");

module.exports = {
    entry: "./scripts/script.js",
    output: {
        filename: "main.js",
        path: path.resolve(__dirname, "dist"),
    },
    mode: "production",
};
