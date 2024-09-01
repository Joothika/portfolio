/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/*.jsx", "./index.html", "./src/**/*.jsx"],
  theme: {
    extend: {
      fontFamily: {
        driod: ["driod-reg"],
        poetsen: ["poetsen-one"],
      },
      backgroundColor: {
        pageColor: "#121214",
        aboutColor: "#1A1717",
        contactColor: "#2D2828",
      },
      colors: {
        grayColor: "#8E7C7C",
        redColor: "#C82727",
        shadowColor: "#A78A8A",
      },
    },
  },
  plugins: [],
};
