module.exports = {
  entry: "./src/index.js",
  output: {
    path: __dirname,
    publicPath: "/",
    filename: "bundle.js"
  },

  module: {
    rules: [
      {
        exclude: [
           "node_modules"
        ],
        loader: "babel-loader",
        options: {
          presets: ["es2015"]
        },
      }
    ]
  },

  resolve: {
    modules: [
        "node_modules",
      ],
    extensions: [".js", ".json", ".jsx", ".css"],

  },


  devServer: {
    proxy: { // proxy URLs to backend development server
      '/api': 'http://localhost:3000'
    },
  }
}
