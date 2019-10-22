// next.config.js
const withCSS = require("@zeit/next-css");
const isProd = (process.env.NODE_ENV || "production") === "production";
const webpack = require("webpack");
const assetPrefix = isProd ? "/emboldened" : "";

module.exports = withCSS({
  exportPathMap: () => ({
    "/": { page: "/" }
  }),
  assetPrefix: assetPrefix,
  webpack: function(config) {
    config.module.rules.push({
      test: /\.(eot|woff|woff2|ttf|svg|png|jpg|gif)$/,
      use: {
        loader: "url-loader",
        options: {
          limit: 100000,
          name: "[name].[ext]"
        }
      }
    });
    config.plugins.push(
      new webpack.DefinePlugin({
        "process.env.ASSET_PREFIX": JSON.stringify(assetPrefix)
      })
    );
    return config;
  }
});
