/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    colors: {
      'default-color': '#329a9a',
    },
    screens: {
      sm: '750px',
      md: '950px',
      lg: '1340px'
    },
    extend: {},
  },
  plugins: [],
}

