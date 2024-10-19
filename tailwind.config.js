/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      // custom color and font sizes
      colors: {
        red: 'var(--red)', 
      },
      fontSize: {
      titleXl: 'var(--titleXl)',  
      titleLg: 'var(--titleLg)',  
      titleMd: 'var(--titleMd)',  
      titleSm: 'var(--titleSm)',  
      titleXsm: 'var(--titleXsm)',  
      },
    },
  },
  plugins: [
    require('daisyui'),
  ],
}

