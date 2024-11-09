/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
  
    extend: {
     fontSize: {
       lg : '3.5rem',
       nrm : '.938rem',
     },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
        jolly: ["Jolly Lodger", "system-ui"],
      },
      colors: {
        backgroundColor: 'hsl(18, 58%, 82%)',
        primaryColor : 'hsl(25, 90%, 54%)',
        primaryAccentColor : 'hsl(25, 84%, 54%)',
        titleColor : 'hsl(25, 48%, 12%)',
        textColor : 'hsl(20, 48%, 12%)',
        whiteColor : 'hsl(0, 0%, 100%)',
        accentcolor: 'hsl(18, 58%, 82)',
      },

      screens: {
        tablet: '640px',
  
        laptop: '1024px',
      
        desktop: '1280px',
        },
    },
    },
    plugins: [],
  }