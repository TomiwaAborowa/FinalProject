/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      gradientColorStops: {
        'blue-gradient': ['#005AE2', '#73E6FF'],
      },
      // custom colors
      colors: {
        light: "#f5f5f5",
        primary: "#B63E96", 
        primaryBlue: "#005AE2",
        primaryBlueBase: "#0065FE", 
      },
      
      // custom width
      maxWidth: {
        '600': '600px',
      },
      screens: {
      "2xl": { max: "1535px" },
      
  
      xl: { max: "1279px" },
      // => @media (max-width: 1279px) { ... }
  
      lg: { max: "1023px" },
      // => @media (max-width: 1023px) { ... }
  
      md: { max: "767px" },
      // => @media (max-width: 767px) { ... }
  
      sm: { max: "639px" },
      // => @media (max-width: 639px) { ... }
  
      xs: { max: "479px" },
      // => @media (max-width: 479px) { ... }
  },
    },
  },
  plugins: [
  ],
}

