/**
 * fileTransformer.cjs
 * -------------------------
 * Jest transformer for JS/JSX files using Babel.
 */

const babelJest = require("babel-jest");

module.exports = babelJest.createTransformer({
  presets: [
    ["@babel/preset-env"],
    ["@babel/preset-react", { runtime: "automatic" }]
  ]
});