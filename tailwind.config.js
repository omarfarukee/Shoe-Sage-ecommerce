/* eslint-disable no-undef */
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
        titleXxxl: '128px',  
        titleXxl: '70px',  
        titleXl: '60px',  
        titleLg: '48px',  
        titleMd: '40px',  
        titleSm: '27px',  
        titleXsm: '20px',  
        titleXXsm: '14px',  
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
