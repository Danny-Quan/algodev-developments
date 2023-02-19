/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors:{
        white:"#ffffff",
        black:"#000000",
        secondary:"rgb(255, 196, 0)",
        primary:"rgb(189, 29, 29)",
        accent:"rgb(4, 12, 43)",
        facebook:"rbg(24,119,242)",
        twitter:"#1da1f2",
        youtube:"#ff0000",
        instagram:"#c32aa3",
      }
    },
  },
  plugins: [],
};
