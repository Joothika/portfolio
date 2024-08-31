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
      },
      colors: {
        grayColor: "#8E7C7C",
      },
    },
  },
  plugins: [],
};
