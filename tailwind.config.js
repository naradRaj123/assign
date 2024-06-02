/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "heroimg": "url('../app/img/bannersec.png')",
      },
      colors:{
        "primary": "#FF5555",
        "secondary":"#071854",
      }
    },
  },
  plugins: [],
};
