/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/*.js", "./src/**/*.js", "./public/index.html"],
  theme: {
    container: {
      center: true,
      padding: "1rem"
    },
    fontFamily: {
      "pop": "Poppins"
    },
    extend: {},
  },
  plugins: [],
}

