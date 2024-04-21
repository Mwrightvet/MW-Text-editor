const HtmlWebpackPlugin = require("html-webpack-plugin");
const WebpackPwaManifest = require("webpack-pwa-manifest");
const path = require("path");
const { InjectManifest } = require("workbox-webpack-plugin");

module.exports = (env, argv) => {
  const isDevelopment = argv.mode === "development";

  return {
    mode: isDevelopment ? "development" : "production",
    entry: {
      main: "./src/js/index.js",
      install: "./src/js/install.js",
    },
    output: {
      filename: "[name].bundle.js",
      path: path.resolve(__dirname, "dist"),
    },
    plugins: [
      new HtmlWebpackPlugin({
        template: "./src/index.html", // Path to HTML file
        chunks: ["main"], // Specify which chunks to include in the HTML file
      }),
      new WebpackPwaManifest({
        filename: "manifest.json",
        name: "Your App Name",
        short_name: "App Name",
        description: "Description of your app",
        background_color: "#ffffff",
        theme_color: "#ffffff",
        icons: [
          {
            src: path.resolve("src/assets/icon.png"), // Path to the app icon
            sizes: [96, 128, 192, 256, 384, 512], // Icon sizes
          },
        ],
      }),
      new InjectManifest({
        swSrc: "./src/sw.js", // Path to service worker file
        exclude: [/\.map$/, /manifest\.json$/], // Excludes certain files from being precached
      }),
    ],

    module: {
      rules: [
        // CSS loader configuration here if needed
        // Babel loader configuration here if needed
      ],
    },
  };
};
