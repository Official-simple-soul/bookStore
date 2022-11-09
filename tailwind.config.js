/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'bgColor': '#452474',
        'secColor': 'rgba(28, 50, 56)',
        'secColor2': '#55130a',
        'secColor3': '#CD4F3F'
      },
      lineHeight: {
        '12': '4.5rem',
      },
    },
  },
  plugins: [],
}
