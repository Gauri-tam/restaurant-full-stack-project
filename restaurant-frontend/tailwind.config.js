/** @type {import('tailwindcss').Config} */
const withMT = require("@material-tailwind/react/utils/withMT");

module.exports = withMT({
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
     'node_modules/preline/dist/*.js',
     "./node_modules/flowbite/**/*.js"
  ],
  theme: {
    extend: {},
    screens: {
      sm: '640px',
      md: '768px'
    },
  },
  plugins: [
    require('preline/plugin'),
    require('flowbite/plugin')
  ],
})

