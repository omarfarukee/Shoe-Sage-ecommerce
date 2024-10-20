/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        red: 'var(--red)', 
      },
      fontSize: {
        titleXxl: 'var(--titleXxl)',  
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
  daisyui: {
    themes: [], // Completely disable DaisyUI themes
  },
  // important: true,
}
