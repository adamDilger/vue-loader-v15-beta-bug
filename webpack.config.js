const { VueLoaderPlugin } = require("vue-loader");

module.exports = {
  resolve: {
    alias: {
      vue: "vue/dist/vue.esm.js",
    },
  },
  plugins: [
    new VueLoaderPlugin(),
  ],
  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: "vue-loader",
      },
    ]
  }
}

