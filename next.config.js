// next.config.js
const withCSS = require("@zeit/next-css");

module.exports = withCSS({
  assetPrefix: process.env.NODE_ENV === "production" ? "/emboldened" : "",
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
    return config;
  }
});
